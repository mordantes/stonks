

export const SlideButton: React.FC<{ direction: 'prev' | 'next' }> = ({ direction }) => {

	const control = 'carousel-control-' + direction
	const icon = "carousel-control-" + direction + "-icon"
	return (
		<button className={control} type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide={direction}>
			<span className={icon} aria-hidden="true"></span>
			<span className="visually-hidden">Next</span>
		</button>
	)
}