import { CSSProperties, ReactNode } from "react"

type buttonType = 'primary' | 'info' | 'dark' | 'default' | 'success' | 'danger' | 'warning'


export const ResponsiveButton: React.FC<{
	color: buttonType,
	text: ReactNode,
	className?: string,
	style?: CSSProperties,
	onClick?: () => void,
	outline?: boolean,

}> = ({ color, text, className, outline = false, onClick, style }) => {

	const defaultClazz = 'btn btn-'
	const clazz =
		outline ? defaultClazz + 'outline' + '-' + color
			: className
				? defaultClazz + color + ' ' + className
				: defaultClazz + color


	return (
		<div className={className}>
			<button
				style={style}
				type="button"
				className={clazz}
				onClick={() => onClick && onClick()}
			>
				{text}
			</button>
		</div>

	)
}