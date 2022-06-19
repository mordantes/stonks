import React, { ReactNode } from "react"




export const TableWrapper: React.FC<{ children: ReactNode | ReactNode[] }> = ({ children }) => {


	return (
		<div className="col-lg-12">
			<table className="table table-hover">
				{children}
			</table>
		</div>
	)
}