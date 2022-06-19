import * as React from 'react';
import styles from './prices.module.css'


export const ControlField: React.FC = ({ children }) => {



	return (
		<div className={styles.controlField}>
			{children && children}
		</div>
	)
}