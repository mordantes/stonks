
import { SvgIconTypeMap } from '@mui/material';
import { OverridableComponent } from '@mui/material/OverridableComponent';
import Link from 'next/link';
import styles from './navbar.module.css'

interface Props {
	Icon?: OverridableComponent<SvgIconTypeMap<{}, "svg">>
	refName: string
	refPath: string
}

export const NavbarMenuItem: React.FC<Props> = ({ refName, refPath, Icon, }) => {

	return (
		<Link href={refPath}>
			<a className={styles.ref}>
				{Icon && <Icon sx={{ mr: 0.5 }} fontSize="inherit" />}
				{refName}
			</a>
		</Link>
	)
}