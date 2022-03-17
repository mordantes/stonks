
export const SlideIndicator: React.FC<{ length: number }> = ({ length }) => {

	const indicators: JSX.Element[] = []
	for (let i = 0; i < length; i++) {
		indicators.push(
			<button
				key={i}
				type="button"
				data-bs-target="#carouselExampleCaptions"
				data-bs-slide-to={i}
				className=""
				aria-current="true"
				aria-label="Slide 1">
			</button>
		)
	}
	return (
		<div className="carousel-indicators">
			{indicators}
		</div>
	)
}