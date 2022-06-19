import { ReactNode } from "react";

export const MainWrapper: React.FC<{ children: ReactNode | ReactNode[] }> = ({ children }) => {
	return (
		<div className='container'>
			{children}
		</div>
	)
}