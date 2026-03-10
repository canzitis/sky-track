import { Outlet } from 'react-router-dom'

import Header from './header/Header'

export default function Layout() {
	return (
		<div className='relative h-full'>
			<Header />
			<Outlet />
		</div>
	)
}
