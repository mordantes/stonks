import { ResponsiveButton } from "../button"
import styles from './table.item.module.css'


export const Pagination: React.FC<{
	length?: number,
	current: number,
	perPage: number,
	pageClick: (value: number) => void
}>
	= ({ length = 0, current, perPage, pageClick }) => {

		console.log(length)

		const defaultClazz = 'page-item'
		const endValue = ((length - (length % perPage)) / perPage)
		const startValue = 0

		const leftArrowClazz = current === startValue ? defaultClazz + ' disabled' : defaultClazz + ' active'
		const rightArrowClazz = current === endValue ? defaultClazz + ' disabled' : defaultClazz + ' active'

		const nextValue = current + 1 === endValue ? endValue : current + 1
		const prevValue = current - 1 < 0 ? startValue : current - 1

		return (
			<div>
				<ul className="pagination">
					<li className={leftArrowClazz}>
						<ResponsiveButton className={styles.paginationFieldLightSpeed} color="info" onClick={() => pageClick && pageClick(startValue)} text={'В начало'} />
					</li>
					<li className="page-item">
						<ResponsiveButton className={styles.paginationField} color="info" onClick={() => pageClick && pageClick(prevValue)} text={<span>&laquo;</span>} />
					</li>
					<li className="page-item disabled">
						<ResponsiveButton
							color="info"
							onClick={() => pageClick && pageClick(current)}
							text={current}
							className={styles.paginationField}
						/>
					</li>
					<li className={rightArrowClazz}>
						<ResponsiveButton className={styles.paginationField}
							color="info"
							onClick={() => length === perPage && pageClick(nextValue)}
							text={<span>&raquo;</span>}
						/>
					</li>
					{/* <li className={rightArrowClazz}>
						<ResponsiveButton className={styles.paginationFieldLightSpeed} color="info" onClick={() => pageClick(endValue)} text={'В конец'} />
					</li> */}
				</ul>
			</div>

		)
	}