import { ReactNode } from "react"



export const TableHeader: React.FC<{ children: ReactNode }> = ({ children }) => {
	return (
		<thead>
			{children}
		</thead>
	)
}