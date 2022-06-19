


export const NavbarToggle: React.FC<{ changeMenu: () => void }> = ({ changeMenu }) => {
	return (
		<button className="navbar-toggler"
			type="button"
			data-bs-toggle="collapse"
			data-bs-target="#navbarColor03"
			aria-controls="navbarColor03"
			aria-expanded="true"
			aria-label="Toggle navigation"
			onClick={() => changeMenu()}
		>
			<span className="navbar-toggler-icon"></span>
		</button>
	)
}