import { ReactChild, ReactChildren, ReactNode } from "react";



export const NavbarWrapper: React.FC<{ children: ReactNode | ReactNode[] }> = ({ children }) => {


	return (
		<nav className="navbar navbar-expand-lg fixed-top navbar-dark bg-primary">
			<div className="container-fluid">
				{children}
			</div>
		</nav >
	)
}