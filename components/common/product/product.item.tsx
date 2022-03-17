
export interface interfaceProductItem {
	productName: string
	productCurrentPrice: number
	productStartPrice: number
	productOffer: number | boolean
	productPriceChangePercent: number
	productRank: number
	_id: number
	sub: number
	length?: number
}


export const ProductItem: React.FC<interfaceProductItem> = ({
	productName,
	productCurrentPrice,
	productStartPrice,
	productOffer,
	productPriceChangePercent,
	productRank
}) => {

	return (
		<div className='row'>
			<div className='d-flex justify-content-evenly align-items-baseline'>
				<span className='col-6 text-left mt-3 '>
					{productName}
				</span>
				<span className='col-1 text-center'>
					{productStartPrice}
				</span>
				<span className='col-1 text-center'>
					{productCurrentPrice}
				</span>
				<span className='col-1 text-center'>
					{productOffer || 'no offer'}
				</span>
				<span className='col-1 text-center'>
					{productPriceChangePercent} %
				</span>
				<span className='col-1 text-center'>
					{productRank}
				</span>
			</div>
		</div>

	)
}