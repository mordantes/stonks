import { Accordion, AccordionDetails, AccordionSummary, Typography } from '@mui/material';
import React from 'react';
import { ProductData } from '../../../types'
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import ArrowDropDown from '@mui/icons-material/ArrowDropDown'
import ArrowDropUp from '@mui/icons-material/ArrowDropUp'
import styles from './prices.module.css'
import { PriceChart } from './price.chart';



interface Props {
	data: ProductData[] | undefined
	// length: number | undefined
}

export const ProductsList: React.FC<Props> = ({ data }) => {

	const [expanded, setExpanded] = React.useState<string | false>(false);
	const handleChange =
		(panel: string) => (event: React.SyntheticEvent, isExpanded: boolean) => {
			setExpanded(isExpanded ? panel : false);
		};

	if (data == undefined) return null;

	return (
		<div className={styles.accordion}>
			{data.map((elem) => {
				const isGrowth = elem.sub > 0
				return (
					<Accordion expanded={expanded === elem.goodName} onChange={handleChange(elem.goodName)} key={elem._id}>
						<AccordionSummary
							expandIcon={<ExpandMoreIcon />}
							aria-controls={elem.goodName}
							id={elem.goodName}
						>
							<Typography sx={{ width: '45%', flexShrink: 0, flexGrow: .7, wordWrap: 'break-word' }}>
								{elem.goodName}
							</Typography>
							<div className={styles.listDetailes}>
								<span className={styles.priceBlock}>
									<span className='text-secondary'>Текущая цена - </span>
									<span className='text-primary'>
										{elem.prices.sort((a, b) => a.date > b.date ? -1 : 1)[0].price}
									</span>

								</span>
								<span className={styles.priceBlockSmall}>
									<span className={isGrowth ? 'text-danger' : 'text-success'}>
										{isGrowth ? <ArrowDropUp /> : <ArrowDropDown />}
										{Math.floor(elem.sub)}%
									</span>
								</span>
								{elem.offer ?
									<span className={styles.priceBlock}>
										<span className='text-secondary'>Скидка -  </span>
										<span className='text-success'>
											{elem.offer}
										</span>
									</span>
									:
									<span className={styles.priceBlock}></span>
								}
							</div>
						</AccordionSummary>
						<AccordionDetails>
							<PriceChart prices={elem.prices.sort((a, b) => a.date > b.date ? 1 : -1)} label={elem.goodName} expanded={expanded === elem.goodName} />
						</AccordionDetails>
					</Accordion>
				)
			})}
		</div>
	)
}