
import React, { useEffect, useMemo, useState } from "react";
import { ScrollButton } from "../button/scroll.button";
import { SearchField } from "../search";
import { ResponsiveTable } from "../table";
import { Pagination } from "../table/pagination";
import { interfaceProductItem } from "./product.item";






export const Products: React.FC<{
	products: interfaceProductItem[],
	page: number
	term?: string | undefined
	pageClick: (val: number) => void
	resetTerm: () => void
	changeTerm: (val: string) => void
}> = ({ products, pageClick, page, changeTerm, resetTerm, term = '' }) => {



	const [sort, setSort] = useState<{ field: keyof interfaceProductItem, order: -1 | 1 }>({ field: 'sub', order: -1 })


	const filtered = useMemo(() =>
		(products) ?
			products
				.filter(e => term ? e.productName.toLowerCase().indexOf(term.toLowerCase()) > -1 : e)
			: products
		, [term, products, sort])


	const onHeaderClick = (field: keyof interfaceProductItem) => {
		setSort(prev => ({ field: field, order: prev.order === 1 ? -1 : 1 }))
	}


	return (
		<>
			<SearchField setTerm={changeTerm} resetTerm={resetTerm} term={term} />
			<Pagination current={page} length={products.length} perPage={50} pageClick={pageClick} />
			<ResponsiveTable products={filtered} onHeaderClick={onHeaderClick} />
			<ScrollButton />
		</>
	)
}