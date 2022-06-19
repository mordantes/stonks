import { Breadcrumbs, Paper } from "@mui/material";
import { ReactChild, ReactChildren, ReactNode } from "react";
import styles from './navbar.module.css'

export const NavbarWrapper: React.FC<{ children: ReactNode | ReactNode[] }> = ({ children }) => {


	return (
		<div className={styles.sticky}>
			<Paper elevation={1} >
				<nav className={styles.navbar}>
					{children}
				</nav >
			</Paper>
		</div >
	)
}