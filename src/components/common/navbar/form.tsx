import React from "react";
import TelegramIcon from '@mui/icons-material/Telegram';


export const NavbarForm: React.FC<{}> = () => {


	return (
		<ul className="navbar-nav ms-md-auto">
			<form className="d-flex">
				<a href='https://t.me/mordantly' className="text-light">Telegram
					<TelegramIcon color={'secondary'} aria-label="Мой телеграмм" />
				</a>
			</form>
		</ul>

	)
}