import React, { useState } from "react";
import { NavbarBrand } from "./brand";
import { NavbarForm } from "./form";
import { NavbarList } from "./navbar.list";
import { NavbarMenuItem } from "./navbar.menu.item";
import { NavbarWrapper } from "./navbar.wrapper";
import { NavbarToggle } from "./toggle";



export const ResponsiveNavbar: React.FC = () => {
	const [collapsed, setCollapse] = useState<boolean>(true)

	const changeMenu = () => setCollapse(prev => !prev)

	return (
		<NavbarWrapper>
			<NavbarBrand brandName="Stonks" />
			<NavbarToggle changeMenu={changeMenu} />
			<NavbarList collapsed={collapsed}>
				<NavbarMenuItem refName="О нас" refPath="/" />
				<NavbarMenuItem refName="Товары" refPath="/prices" />
				<NavbarMenuItem refName="Наш анализ" refPath="/analytics" />
			</NavbarList>
			<NavbarForm />
		</NavbarWrapper>
	)
}