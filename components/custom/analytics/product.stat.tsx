


export const CategoryStat: React.FC<{
	name: string,
	text: string,
	summary: {
		description: string,
		value: string
	},
	color: "info" | "danger" | "warning"
}> = ({ name, summary, text, color }) => {


	return (
		<div>
			<h4 className={"d-flex justify-content-around text-" + color}>{name}</h4>
			<h5 className="d-flex justify-content-around">{text}</h5>
			<h6 className="d-flex justify-content-around ">
				<span>{summary.description}</span>
				<span className="text-decoration-underline">{summary.value} товаров</span>
			</h6>
		</div>
	)
}