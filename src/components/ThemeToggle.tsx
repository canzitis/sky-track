import { Tooltip } from 'antd'
import { Link } from 'react-router-dom'

import { Heart } from './animate-ui/icons/heart'
import { Moon } from './animate-ui/icons/moon'
import { Sun } from './animate-ui/icons/sun'
import { useTheme } from './providers/theme/useTheme'

export function ThemeToggle() {
	const { theme, toggleTheme } = useTheme()

	return (
		<div className='absolute top-3 right-0 -translate-x-1/2'>
			<div className='flex gap-3'>
				<Tooltip placement='bottom' title='Favorites'>
					<Link to='/like'>
						<Heart animateOnHover className='h-4 w-4' />
					</Link>
				</Tooltip>

				<Tooltip placement='bottom' title='Change theme'>
					<button onClick={toggleTheme} className='h-full w-full'>
						{theme === 'dark' ? (
							<Sun animateOnHover className='h-4 w-4' color={'white'} />
						) : (
							<Moon animateOnHover className='h-4 w-4' color={'black'} />
						)}
					</button>
				</Tooltip>
			</div>
		</div>
	)
}
