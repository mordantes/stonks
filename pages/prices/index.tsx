import { GetServerSidePropsContext, NextPage } from "next"; import { useRouter } from "next/router";
import { useContext } from "react";
import { URL } from "url";
import { Products } from "../../components/common/product";
import { interfaceProductItem } from "../../components/common/product/product.item";
import { priceListDto } from "./dto";


interface pageProps {
    data: interfaceProductItem[]
    page: number
    term: string
    success: boolean
    message?: string
    length?: number
}

const Prices: NextPage<pageProps> = (pageProps) => {

    if (!pageProps.success || !pageProps.data) {
        return <p> Loadfing.... </p>
    }
    if (pageProps.message) {
        return <p> {pageProps.message} </p>
    }
    const router = useRouter()
    console.log(pageProps.length)

    const changePage = (val: number) => {
        router.push({ pathname: '/prices', query: { page: val, term: pageProps.term } })
    }

    const changeTerm = (val: string) => {
        router.push({ pathname: '/prices', query: { page: pageProps.page, term: val } })
    }

    const resetTerm = () => {
        router.push({ pathname: '/prices', query: { page: pageProps.page } })
    }


    return (
        <Products
            term={pageProps.term}
            page={pageProps.page}
            pageClick={changePage}
            products={pageProps.data}
            resetTerm={resetTerm}
            changeTerm={changeTerm}
        />
    )
}

export async function getServerSideProps(context: GetServerSidePropsContext) {
    const { page, term } = context.query as { page: string | undefined, term: string | undefined }

    if (page == undefined) {
        return {
            redirect: {
                destination: '/prices?page=0',
                permanent: true
            }
        }
    }
    const data = await getProductsData(page, term)
    return {
        props: {
            page: parseInt(page),
            term: term || '',
            ...data
        },
    }
}

async function getProductsData(current: string, term = '') {
    const url = new URL(process.env.PRODUCT_PATH as string)
    url.searchParams.append('page', current.toString())
    if (term && term != undefined) {
        url.searchParams.append('term', term.toString())
    }

    return fetch(url.toString())
        .then(data => data.json())
        .then(data => ({ ...data, data: priceListDto(data.data) }))
        .catch(e => ({ message: e.toString(), data: null, success: true }))
}
export default Prices