import React from "react"
import { interfaceProductItem } from "../product/product.item"
import { TableHeader } from "./header"
import { TableBody } from "./table.body"
import { TableItem } from "./table.item"
import { TableWrapper } from "./wrapper"




export const ResponsiveTable: React.FC<{
	products: interfaceProductItem[],
	onHeaderClick?: (field: keyof interfaceProductItem) => void
}> = ({ products, onHeaderClick }) => {

	return (
		<TableWrapper>
			<TableHeader>
				<TableItem key={-1} onClick={onHeaderClick} />
			</TableHeader>
			<TableBody>
				{products.map(prod => {
					return <TableItem item={prod} key={prod._id} />
				})}
			</TableBody>
		</TableWrapper>
	)
}