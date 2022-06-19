

export const NavbarBrand: React.FC<{ brandName: string }> = ({ brandName }) => {
	return (
		<> <a className="navbar-brand" href="/">{brandName}</a></>
	)
}