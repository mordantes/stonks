import React from "react"
import { ResponsiveButton } from ".";



export const ScrollButton: React.FC = () => {


	const scrollToTop = () => {
		window.scrollTo({
			top: 0,
			behavior: 'smooth',
		});
	};

	return (
		<>
			<ResponsiveButton
				color="success"
				className='d-flex flex-row-reverse mb-1'
				text='Click to top'
				onClick={scrollToTop}
				style={{ marginBottom: '4px !important' }}
			/>
		</>

	)
}