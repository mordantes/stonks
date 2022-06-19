
import { OptionGroupUnstyled } from '@mui/material/node_modules/@mui/base';
import * as React from 'react';
import styles from './select.module.css'
import { Option } from '../../../types'

interface Props {
	name: string
	options: Option[]
	current: Option
	onChange: (val: string) => void
}


export const Select: React.FC<Props> = ({ name, current, options, onChange }) => {

	return (
		<div className={styles.customSelectWrapper}>
			<select
				className={styles.customSelect}
				name={name}
				id={name}
				value={current.label}
				onChange={(e) => {
					onChange(e.target.value)
				}}
			>
				{options.map((opt) => {
					return (
						<option
							key={opt.label}
							value={opt.label}
						>{opt.label}</option>
					)
				})}
			</select>

		</div>
	)
}