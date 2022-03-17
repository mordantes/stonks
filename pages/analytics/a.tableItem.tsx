import styles from '../../components/common/table/table.item.module.css'


export const AnalyticsTableHeader: React.FC = () => {
	return (
		<tr>
			<th scope="col" className={styles.defaultHeader}>Имя товара</th>
			<th scope="col" className={styles.defaultHeader}>Изменение цены</th>
			<th scope="col" className={styles.defaultHeader}>Цена изменилась, раз</th>
		</tr>
	)
}