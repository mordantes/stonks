
import styles from './error.module.css'


interface Props {
	header: string
	text: string
}
export const ErrorCard: React.FC<Props> = ({ header, text }) => {



	return (
		<div className={styles.errorWrapper}>
			<div>
				<h3 className={styles.errorHeader}>{header}</h3>
			</div>
			<div className={styles.errorText}>
				{text}
			</div>
		</div>


	)
}