
import Head from "next/head";
import React, { ReactNode } from "react";
import { SWRConfig } from "swr";
import { ResponsiveNavbar } from "./common/navbar";
import { MainWrapper } from "./main.wrapper";

interface ContainerProps {
    keywords?: string | string[]
    children?: ReactNode | ReactNode[]
}
export const MainContainer = ({ children, keywords }: ContainerProps) => {
    return (
        <SWRConfig value={{
            revalidateOnFocus: false,
            revalidateIfStale: false
        }}>
            <Head>
                <title>PP2P</title>
                <link rel="icon" type="image/png" href="/3.png" />
            </Head>


            <ResponsiveNavbar />
            <MainWrapper>
                {children}
            </MainWrapper>
        </SWRConfig>
    )
}

