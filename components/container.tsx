
import React, { ReactNode } from "react";
import { MainWrapper } from "./main.wrapper";

interface ContainerProps {
    keywords?: string | string[]
    children?: ReactNode | ReactNode[]
}
export const MainContainer = ({ children, keywords }: ContainerProps) => {
    return (
        <>
            <title>Shop API</title>
            <MainWrapper>
                {children}
            </MainWrapper>
        </>
    )
}

