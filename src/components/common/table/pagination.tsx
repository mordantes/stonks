import { Button } from "@mui/material"
import { ResponsiveButton } from "../button"
import styles from './table.item.module.css'


export const Pagination: React.FC<{
	length?: number,
	current: number,
	perPage: number,
	pageClick: (value: number) => void
}>
	= ({ length = 0, current, perPage, pageClick }) => {


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
					{/* start page */}
					<Button
						variant="outlined"
						color="secondary"
						disabled={startValue === current}
						onClick={() => pageClick && pageClick(startValue)}
					>В начало</Button>

					{/* prev page */}
					<Button
						variant="outlined"
						color="secondary"
						disabled={startValue === current}
						onClick={() => pageClick && pageClick(prevValue)}
					>{startValue === current ? '...' : prevValue}</Button>

					{/* current page */}
					<Button
						variant="outlined"
						color="primary"
					>{current}</Button>

					{/* nextPage page */}
					<Button
						variant="outlined"
						color="secondary"
						disabled={(current == endValue)}
						onClick={() => pageClick && pageClick(nextValue)}
					>{(current == endValue) ? '...' : nextValue}</Button>

					{/* last page */}
					<Button
						variant="outlined"
						color="secondary"
						disabled={(current == endValue)}
						onClick={() => pageClick && pageClick(endValue)}
					>В конец</Button>



					{/* <li className={leftArrowClazz}>
						<ResponsiveButton className={styles.paginationFieldLightSpeed} color="info" onClick={() => pageClick && pageClick(startValue)} text={'В начало'} />
					</li>
					<li className="page-item">
						<ResponsiveButton className={styles.paginationField} color="info" onClick={() => pageClick && pageClick(prevValue)} text={<span>&laquo;</span>} />
					</li>
					<li className="page-item disabled">
						<ResponsiveButton
							color="info"
							onClick={() => pageClick(current)}
							text={current}
							className={styles.paginationField}
						/>
					</li>
					<li className={rightArrowClazz}>
						<ResponsiveButton className={styles.paginationField}
							color="info"
							onClick={() => (length === perPage) && pageClick(nextValue)}
							text={<span>&raquo;</span>}
						/>
					</li> */}
					{/* <li className={rightArrowClazz}>
						<ResponsiveButton className={styles.paginationFieldLightSpeed} color="info" onClick={() => pageClick(endValue)} text={'В конец'} />
					</li> */}
				</ul>
			</div>

		)
	}