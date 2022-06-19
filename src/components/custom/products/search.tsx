

import { Box, Button, TextField, Paper, InputBase } from '@mui/material';
import * as React from 'react';

interface Props {
	label: string
	value?: string
	placeholder: string
	onSubmit: (val: string) => void
}
export const SearchField: React.FC<Props> = ({
	label,
	value,
	placeholder,
	onSubmit
}) => {

	const [input, setValue] = React.useState<string>('')

	React.useEffect(() => {
		setValue(prev => value != undefined ? value : '')
	}, [])



	return (
		<Paper
			component="form"
			sx={{ p: '2px 4px', display: 'flex', alignItems: 'center', width: '30ch' }}
			onSubmit={(e: any) => {
				e.preventDefault()
				onSubmit(input)
			}}
		>
			<InputBase
				value={input}
				sx={{ ml: 1, flex: 1 }}
				placeholder={placeholder}
				inputProps={{ 'aria-label': placeholder }}
				onChange={(e) => setValue(e.target.value)}
			/>
			<Button
				variant="contained"
				color="secondary"
				onClick={() => onSubmit(input)}
			>Найти</Button>
		</Paper>

		// <Box
		// 	component="form"
		// 	sx={{
		// 		'& .MuiTextField-root': { m: 1, width: '30ch' },
		// 	}}
		// 	noValidate
		// 	autoComplete="off"
		// 	onSubmit={(e: any) => {
		// 		e.preventDefault()
		// 		onSubmit(input)
		// 	}}
		// >
		// 	<div>
		// 		<TextField
		// 			label={label}
		// 			id="outlined-size-small"
		// 			placeholder={placeholder}
		// 			size="small"
		// 			value={input}
		// 			onChange={(e) => {
		// 				console.log(e.target.value)
		// 				setValue(e.target.value)
		// 			}}
		// 		/>
		// 		<Button>123</Button>
		// 	</div>
		// </Box>
	)
}