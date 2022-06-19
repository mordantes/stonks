import React from "react";
import { NavbarMenuItem } from "./navbar.menu.item";
import { NavbarWrapper } from "./navbar.wrapper";
import HomeIcon from '@mui/icons-material/Home'


export const ResponsiveNavbar: React.FC = () => {

	return (
		<NavbarWrapper>
			<NavbarMenuItem refName="Товары" refPath="/prices" />
			<NavbarMenuItem refName="Наш анализ" refPath="/analytics" />
		</NavbarWrapper>
	)
}