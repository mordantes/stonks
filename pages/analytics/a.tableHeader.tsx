import styles from '../../components/common/table/table.item.module.css'


export const AnalyticsTableItem: React.FC<{
	items: {
		goodName: string,
		sub: number,
		prices: number
	}[]
}> = ({ items }) => {
	return (
		<>{items.map(e => {
			return (
				<tr>
					<td scope="col" className={styles.defaultHeader}>{e.goodName}</td>
					<td scope="col" className={styles.defaultHeader}>{e.sub}</td>
					<td scope="col" className={styles.defaultHeader}>{e.prices}</td>
				</tr>
			)
		})}
		</>

	)
}