import React, { ReactNode } from "react"
import { NavbarForm } from "./form"



export const NavbarList: React.FC<{ children: ReactNode, collapsed: boolean }> = ({ children, collapsed }) => {
	const showHide = collapsed ? "collapse navbar-collapse" : "collapse navbar-collapse show"
	return (
		<div className={showHide} id="navbarResponsive">
			<ul className="navbar-nav">
				{children}
			</ul>
			<NavbarForm />
		</div>
	)
}