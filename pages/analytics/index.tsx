import React from "react";
import { GetServerSidePropsContext } from "next";
import { Stack } from "@mui/material";
import { Row } from "../../components/common/wrappers/row";
import { ChangesTable } from "../../components/custom/analytics/changes.table";
import { CategoryStat } from "../../components/custom/analytics/product.stat";
import absoluteUrl from 'next-absolute-url'

interface Products {
    [key: string]: number | string
    _id: number,
    prices: number
    goodName: string
    sub: number
}
interface Categories {
    totalValueChanges: number,
    totalCountChanges: number,
    totalStartValue: number,
    totalEndValue: number,
    totalProducts: number,
    _id: string
}
interface Props {
    data: {
        categories: Categories[]
        productsByValue: Products[],
        productsByCount: Products[],
        message?: string
    }
}

export default function Analytics({ data }: Props) {

    if ('message' in data) {
        return <p> {data.message} </p>
    }
    const { categories, productsByValue, productsByCount } = data

    const mostAmount = categories.sort((a, b) => a.totalProducts > b.totalProducts ? -1 : 1)[0]
    const mostChangeFromStart = categories.sort((a, b) => a.totalValueChanges > b.totalValueChanges ? -1 : 1)[0]
    const mostCountChanges = categories.sort((a, b) => a.totalCountChanges > b.totalCountChanges ? -1 : 1)[0]

    const categoryBlockData = [
        {
            name: mostAmount._id,
            text: 'Самая многочисленная категория ',
            summary: {
                description: "Общее количество: ",
                value: mostAmount.totalProducts + " товаров"
            },
            color: "info" as const
        },
        {
            name: mostChangeFromStart._id,
            text: 'Самая подорожавшая категория товаров ',
            summary: {
                description: "Все товары подорожали на ",
                value: mostChangeFromStart.totalValueChanges + " рубля(ей)"
            },
            color: "danger" as const
        },
        {
            name: mostCountChanges._id,
            text: 'Самые частые изменения цен ',
            summary: {
                description: "Цена изменена  ",
                value: mostCountChanges.totalCountChanges + " раз"
            },
            color: "warning" as const
        },

    ]

    return (
        <>
            <h2 className={"d-flex justify-content-around mb-3"}>Статистика по категориям</h2>
            <Stack
                direction={{ xs: 'column', sm: 'row' }}
                spacing={{ xs: 1, sm: 2, md: 4 }}
            >
                {categoryBlockData.map(e => <CategoryStat {...e} />)}
            </Stack>
            <Row>
                <h2 className={"d-flex justify-content-around"}>Статистика по товарам</h2>
                <ChangesTable products={productsByValue} sortBy={'prices'} title={'Изменение в руб.'} />
                <ChangesTable products={productsByCount} sortBy={'sub'} title={'Количество изменений'} />
            </Row>
        </>
    )
}



export async function getServerSideProps(context: GetServerSidePropsContext) {
    const { req } = context;
    let baseUri: string | null = null
    if (req) {
        // Server side rendering
        baseUri = req.headers?.host as string
    } else {
        // Client side rendering
        baseUri = window.location.protocol + '//' + window.location.hostname + (window.location.port ? ':' + window.location.port : '')
    }
    const data = await getAnalytics(baseUri)
    return {
        props: {
            data
        },
    }
}

async function getAnalytics(uri: string) {
    const url = new URL(uri)

    return fetch(url.toString())
        .then(data => data.json())
        .then(data => data.data)
        .catch(e => ({ message: e.toString(), data: null, success: true }))
}