import { Pagination, Stack } from '@mui/material';
import * as React from 'react';

interface Props {
	total: number | undefined
	onClick: (val: number) => void
	current: number
}

export const PaginationField: React.FC<Props> = ({ total, onClick, current }) => {

	if (!total) return null

	const totalFixed = ((total - (total % 50)) / 50) + 1

	return (
		<Stack spacing={2}>
			<Pagination
				sx={{ m: 1, maxWidth: 'ch' }}
				count={totalFixed}
				color="secondary"
				page={current + 1}
				onChange={(event: React.ChangeEvent<unknown>, value: number) => onClick(value - 1)}
				siblingCount={0}
				boundaryCount={0}
				hidePrevButton={true}
			/>
		</Stack>
	)
}