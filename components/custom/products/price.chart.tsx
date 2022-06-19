import * as React from 'react';
import { AxisOptions, Chart, Series } from 'react-charts'
import { PriceProps, ProductData } from '../../../types';
import styles from './prices.module.css'

export const PriceChart: React.FC<{ prices: PriceProps[], label: string, expanded: boolean }> = ({ prices, label, expanded }) => {

	if (!expanded) return null

	const data = [{
		label,
		data: prices
	}]

	const primaryAxis = React.useMemo(
		(): AxisOptions<PriceProps> => ({
			getValue: datum => (new Date(datum.date).toISOString().replace('T', ' ')).replace(/[.]\w{3}[Z]/, ''),
		}),
		[]
	)
	const secondaryAxes = React.useMemo(
		(): AxisOptions<PriceProps>[] => [
			{
				getValue: datum => datum.price,
			},
		],
		[]
	)

	return (
		<div className={styles.chart}>
			<Chart
				options={{
					data,
					primaryAxis,
					secondaryAxes,
				}}

			/>
		</div>

	)
}