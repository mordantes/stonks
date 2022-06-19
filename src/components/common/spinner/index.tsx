import { CircularProgress, Stack } from "@mui/material"
import styles from './spinner.module.css'


export const Spinner = () => {


	return (
		<Stack
			sx={{ color: 'grey.500' }}
			spacing={2}
			direction="row"
			className={styles.spinnerStack}
		>
			<CircularProgress color="secondary" className={styles.spinner} />
		</Stack>
	)
}