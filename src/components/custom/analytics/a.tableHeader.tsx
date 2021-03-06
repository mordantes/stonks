import styles from '../../../components/common/table/table.item.module.css'
import React from 'react'

export const AnalyticsTableItem: React.FC<{
	items: {
		goodName: string,
		sub: number,
		prices: number
	}[]
}> = ({ items }) => {
	return (
		<>{items.map((e, index) => {
			return (
				<tr key={index}>
					<td scope="col" className={styles.defaultHeader}>{e.goodName}</td>
					<td scope="col" className={styles.defaultHeader}>{e.sub}</td>
					<td scope="col" className={styles.defaultHeader}>{e.prices}</td>
				</tr>
			)
		})}
		</>

	)
}