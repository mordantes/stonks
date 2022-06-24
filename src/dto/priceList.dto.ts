import { interfaceProductItem } from "../components/common/product/product.item";
import { ProductData } from "../types";
import React from 'react'


export const priceListDto = (data: ProductData[]) => {
	try{
	return data.map((e: ProductData): interfaceProductItem => {
		const startPrice = e.prices.sort((a, b) => a.date > b.date ? 1 : -1)[0]
		const lastPrice = e.prices.sort((a, b) => a.date < b.date ? 1 : -1)[0]
		const changePersent = Math.floor(((lastPrice.price - startPrice.price) / startPrice.price) * 100)
		return {
			_id : e._id,
			sub: Math.floor(e.sub),
			productCurrentPrice: lastPrice.price,
			productStartPrice: startPrice.price,
			productName: e.goodName,
			productOffer: e.offer ? e.offer : false,
			productPriceChangePercent: changePersent,
			productRank: changePersent > 100 
				? 5 : changePersent > 75
				? 4 : changePersent > 50
				? 3 : changePersent > 25 
				? 2 : 0
		}
	})
	}catch(e){
		throw e
	}
}