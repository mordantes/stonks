import styles from './table.item.module.css'
import StarHalfIcon from '@mui/icons-material/StarHalf';
import StarIcon from '@mui/icons-material/Star';
import StarBorderIcon from '@mui/icons-material/StarBorder';

export interface interfaceProductItem {
	productName: string
	productCurrentPrice: number
	productStartPrice: number
	productOffer: number | boolean
	productPriceChangePercent: number
	productRank: number
	_id: number
}

type itemType = 'th' | 'td'


export const TableItem: React.FC<{
	type?: itemType,
	item?: interfaceProductItem,
	onClick?: (field: keyof interfaceProductItem) => void
}> = ({ type = 'td', item, onClick }) => {

	if (type === 'th' || item === undefined) {
		return (
			<tr>
				<th scope="col"
					onClick={() => onClick && onClick('productName')}
					className={styles.productNameHeader}
				>Имя товара</th>
				<th onClick={() => onClick && onClick('productStartPrice')} scope="col" className={styles.defaultHeader} >Начальная цена</th>
				<th onClick={() => onClick && onClick('productCurrentPrice')} scope="col" className={styles.defaultHeader}>Текущая цена</th>
				<th onClick={() => onClick && onClick('productOffer')} scope="col" className={styles.defaultHeader}>Скидка</th>
				<th onClick={() => onClick && onClick('productPriceChangePercent')} scope="col" className={styles.defaultHeader}>Изменение, %</th>
				<th onClick={() => onClick && onClick('productRank')} scope="col" className={styles.rankValue}>Частота изменений</th>
			</tr>
		)
	}
	const { productName,
		productCurrentPrice,
		productStartPrice,
		productOffer,
		productPriceChangePercent,
		productRank } = item
	return (
		<tr className='mt-2'>
			<td scope="col" className={styles.productNameValue}>{productName}</td>
			<td scope="col" className={styles.defaultValue}>{productStartPrice}</td>
			<td scope="col" className={styles.defaultValue}>{productCurrentPrice}</td>
			<td scope="col" className={styles.defaultValue}>{productOffer || 'no offer'}</td>
			<td scope="col" className={styles.defaultValue}>{productPriceChangePercent} %</td>
			<td scope="col" className={styles.rankValue}>{getRanks(productRank)}</td>
		</tr>
	)
}


const getRanks = (rank: number) => {

	if (rank === 5) {
		return (
			<div>
				<StarIcon />
				<StarIcon />
				<StarIcon />
				<StarIcon />
				<StarIcon />
			</div>
		)
	}
	if (rank === 4) {
		return (
			<div>
				<StarIcon />
				<StarIcon />
				<StarIcon />
				<StarIcon />
				<StarBorderIcon />
			</div>
		)
	}
	if (rank === 3) {
		return (
			<div>
				<StarIcon />
				<StarIcon />
				<StarIcon />
				<StarBorderIcon />
				<StarBorderIcon />
			</div>
		)
	}
	if (rank === 2) {
		return (
			<div>
				<StarIcon />
				<StarIcon />
				<StarBorderIcon />
				<StarBorderIcon />
				<StarBorderIcon />
			</div>
		)
	}
	if (rank === 1) {
		return (
			<div>
				<StarIcon />
				<StarBorderIcon />
				<StarBorderIcon />
				<StarBorderIcon />
				<StarBorderIcon />
			</div>
		)
	}
	return (
		<div>
			<StarBorderIcon />
			<StarBorderIcon />
			<StarBorderIcon />
			<StarBorderIcon />
			<StarBorderIcon />
		</div>
	)
}