'use client'

import { useState } from 'react'

import { ThemeToggle } from '../ThemeToggle'
import { ChevronDown } from '../animate-ui/icons/chevron-down'
import { ChevronUp } from '../animate-ui/icons/chevron-up'

import { HeaderMenuItem } from './HeaderMenuItem'
import { headerMenuData } from './header-menu.data'

export default function Header() {
	const [isHidden, setIsHidden] = useState(false)

	const toggleHeader = () => {
		setIsHidden(!isHidden)
	}

	return (
		<div className='relative flex justify-center md:ml-5 md:justify-start'>
			<div
				className={`bg-card-foreground relative w-200 shadow-[0_15px_30px_-10px_rgba(0,0,0,0.3)] transition-all duration-300 ease-in-out ${isHidden ? '-translate-y-full' : 'translate-y-2 rounded-lg xl:w-100 2xl:w-140'} `}
			>
				<div className='relative h-10 p-2'>
					<div className='flex justify-start gap-5'>
						<img src='/public/logo.svg' alt='logo' width={30} height={30} />
						{headerMenuData.map(item => (
							<HeaderMenuItem
								key={item.id}
								title={item.title}
								patch={item.patch}
							/>
						))}
					</div>

					<ThemeToggle />
				</div>

				<button
					onClick={toggleHeader}
					className='bg-card-foreground absolute -bottom-3 left-1/2 flex h-3 w-8 -translate-x-1/2 items-center justify-center overflow-visible rounded-b-full border border-t-0 transition-colors md:hidden'
				>
					{isHidden ? (
						<ChevronDown animateOnHover width={16} height={16} />
					) : (
						<ChevronUp animateOnHover width={16} height={16} />
					)}
				</button>
			</div>
		</div>
	)
}
