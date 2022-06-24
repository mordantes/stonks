import { GetServerSideProps, GetServerSidePropsContext, NextPage } from "next";
import { useRouter } from "next/router";
import { URL } from "url";
import { Products } from "../../components/common/product";
import { interfaceProductItem } from "../../components/common/product/product.item";
import { priceListDto } from "../../dto";
import useSWR from 'swr'
import { fetcher } from "../../utils/fetcher";
import { Spinner } from "../../components/common/spinner";
import { ErrorCard } from "../../components/common/error";
import { ProductsList } from "../../components/custom/products";
import { ApiProductsResponse, Option } from "../../types";
import { SearchField } from "../../components/custom/products/search";
import { ControlField } from "../../components/custom/products/control.field";
import { PaginationField } from "../../components/custom/products/pagination";
import { Select } from "../../components/common/select";
import React from "react";
import { Pagination } from "../../components/common/table/pagination";

const options: Option[] = [
    { field: 'lastDate', value: 'DESC', label: 'По дате (сначала новые)' },
    { field: 'lastDate', value: 'ASC', label: 'По дате (сначала старые)' },
    { field: 'price', value: 'DESC', label: 'По убыванию цены' },
    { field: 'price', value: 'ASC', label: 'По возрастанию цены' },
    { field: 'sub', value: 'DESC', label: 'По изменению (убывание)' },
    { field: 'sub', value: 'ASC', label: 'По изменению (возрастание)' },
    { field: 'offer', value: 'DESC', label: 'По убыванию скидки' },
    { field: 'offer', value: 'ASC', label: 'По возрастанию скидки' }
]
interface Props {
    page: string,
    field: string,
    sort: "ASC" | "DESC"
    term: string | undefined
}

const Prices: NextPage<Props> = ({ field, page, sort, term }) => {
    const router = useRouter()
    // const { page, term, field, sort } = router.query
    const { data, error, isValidating } = useSWR<ApiProductsResponse>(
        !term ? '/api/products' + '?page=' + page + '&field=' + field + '&sort=' + sort
            : '/api/products?page=' + page + '&field=' + field + '&sort=' + sort + '&term=' + term
        , fetcher)


    const changePage = (val: number) => {
        router.push({ pathname: '/prices', query: { page: val, sort: sort, field: field, term: term } })
    }

    const changeTerm = (val: string) => {
        router.push({ pathname: '/prices', query: { page: 0, term: val, sort, field } })
    }

    const resetTerm = () => {
        router.push({ pathname: '/prices', query: { page: page } })
    }

    const changeSort = (val: string) => {
        const target = options.filter(e => e.label === val)[0]
        router.push({
            pathname: '/prices',
            query: {
                page: 0,
                term: term,
                field: target.field,
                sort: target.value
            }
        })
    }



    if (isValidating) return <Spinner />
    if (error) return <ErrorCard header={'code' in error ? error.code : '500'} text={'message' in error ? error.message : error} />
    if (!data?.success) return <ErrorCard header={'500'} text={data?.error as string} />
    const content = data?.length == 0 ?
        <h3 className="text-center">Ничего не найдено :(</h3>
        : <ProductsList data={data?.data} />
    return (
        <>
            <ControlField>
                <Select
                    options={options}
                    name={'Сортировка'}
                    current={{
                        field: field as string,
                        label: options.filter(e => e.field === field && e.value === sort)[0].label,
                        value: sort as any
                    }}
                    onChange={changeSort}
                />
                <SearchField
                    placeholder="Молоко"
                    label={'Поиск по названию'}
                    value={term as string}
                    onSubmit={changeTerm}
                />
                <Pagination
                    current={parseInt(page)}
                    pageClick={changePage}
                    perPage={50}
                    length={data.total}
                />
                {/* <PaginationField total={data.total} onClick={changePage} current={page} /> */}

            </ControlField>

            {content}
        </>
    )
}

export const getServerSideProps: GetServerSideProps = async (context: GetServerSidePropsContext) => {

    const { page, field, sort, term } = context.query
    const badPage = (page == undefined || isNaN(parseInt(page as string)))
    const badField = (field == undefined || ['price', 'offer', 'sub', 'lastDate'].indexOf(field as string) == -1)
    const badSort = (sort == undefined || ['DESC', 'ASC'].indexOf(sort as string) == -1)
    const badTerm = (term == undefined || term == '')

    if (badPage || badField || badSort) {
        return {
            redirect: {
                destination:
                    !badTerm ? '/prices'
                        + '?page=' + (badPage ? '0' : page)
                        + '&field=' + (badField ? 'sub' : field)
                        + '&sort=' + (badSort ? 'DESC' : sort)
                        + '&term=' + term
                        : '/prices'
                        + '?page=' + (badPage ? '0' : page)
                        + '&field=' + (badField ? 'sub' : field)
                        + '&sort=' + (badSort ? 'DESC' : sort)
                ,
                permanent: false,
            },
        }
    }


    return {
        props: {
            page, field, sort, term: term || null
        }
    }
}


export default Prices
