export interface ProductData {
    _id:  number,
	goodName:  string
	offer:  number | boolean
	actual:  boolean
	shopName:  string
	link:  string
	category:  string
	prices: PriceProps[],
	sub: number
}

export interface PriceProps{
	date: Date
    price : number
}


export interface ApiProductsResponse  {
	data : ProductData[]
	error: string | undefined 
	success : boolean
	total: number | undefined
	length : number | undefined
}

export interface Option {
	label: string
	field: string
	value: 'ASC' | 'DESC'
}