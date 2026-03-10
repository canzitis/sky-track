import { Tooltip } from 'antd'
import { Link } from 'react-router-dom'

interface HeaderMenuItemProps {
	title: string
	patch: string
}

export function HeaderMenuItem({ title, patch }: HeaderMenuItemProps) {
	return (
		<Tooltip placement='bottom' title={title}>
			<Link to={patch} className='hover:opacity-70'>
				{title}
			</Link>
		</Tooltip>
	)
}
