
import Head from "next/head";
import React, { ReactNode } from "react";
import { MainWrapper } from "./main.wrapper";

interface ContainerProps {
    keywords?: string | string[]
    children?: ReactNode | ReactNode[]
}

export const MainContainer = ({ children, keywords }: ContainerProps) => {
    return (
        <>
            <Head><title>Shop API</title></Head>

            <MainWrapper>
                {children}
            </MainWrapper>
        </>
    )
}

