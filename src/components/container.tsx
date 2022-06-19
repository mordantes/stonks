
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
            <title>Shop API</title>
            <ResponsiveNavbar />
            <MainWrapper>
                {children}
            </MainWrapper>
        </SWRConfig>
    )
}

