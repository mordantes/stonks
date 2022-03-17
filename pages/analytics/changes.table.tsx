import { TableHeader } from "../../components/common/table/header"
import { TableBody } from "../../components/common/table/table.body"
import { TableWrapper } from "../../components/common/table/wrapper"
import { AnalyticsTableItem } from "./a.tableHeader"
import { AnalyticsTableHeader } from "./a.tableItem"
import React from 'react'


export const ChangesTable: React.FC<{
	products: {
		[key: string]: number | string
		_id: number,
		prices: number
		goodName: string
		sub: number
	}[],
	title: string,
	sortBy: string
}> = ({ products, sortBy, title }) => {


	return (
		<div className="col-lg-6">
			<h3 className="d-flex justify-content-around mt-5">{title}</h3>
			<TableWrapper>
				<TableHeader>
					<AnalyticsTableHeader key={-1} />
				</TableHeader>
				<TableBody>
					<AnalyticsTableItem items={products.sort((a, b) => a[sortBy] > b[sortBy] ? -1 : 1)} />
				</TableBody>
			</TableWrapper>
		</div>
	)
}