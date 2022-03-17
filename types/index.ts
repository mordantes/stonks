export interface ProductData {
    _id:  number,
	goodName:  string
	offer:  number | boolean
	actual:  boolean
	shopName:  string
	link:  string
	category:  string
	prices: {
        date: Date
        price : number
    }[],
	sub: number
}