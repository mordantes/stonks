import Link from "next/link"



export const NavbarMenuItem: React.FC<{ refName: string, refPath: string }> = ({ refName, refPath }) => {
	return (
		<li className="nav-item">
			<Link href={refPath}>
				<a className="nav-link" >{refName}</a>
			</Link>
		</li>
	)
}