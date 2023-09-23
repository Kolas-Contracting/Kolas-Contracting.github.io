import { useState } from 'react'
import { Link, NavLink } from 'react-router-dom'
import AppRoutes from '@/constants/appRoutes'
import NavToggle from '../navToggle'

interface NavItem {
	text: string
	url: string
}

const navItems: NavItem[] = [
	{
		url: AppRoutes.Home,
		text: 'Home',
	},
	{
		url: AppRoutes.About,
		text: 'About',
	},
	{
		url: AppRoutes.Services,
		text: 'Services',
	},
	{
		url: AppRoutes.Contact,
		text: 'Contact',
	},
]

const Header = () => {
	const [showNav, setShowNav] = useState<boolean>(false)

	const toggleNav = () => setShowNav(!showNav)
	const hideNav = () => setShowNav(false)

	return (
		<header className='header'>
			<div className='container'>
				<div className='nav'>
					<Link to={AppRoutes.Home} onClick={hideNav} className='nav-brand'>
						Kolas Contracting Inc
					</Link>
					<NavToggle isOpen={showNav} onClick={toggleNav} />
					<ul className={`nav-items ${showNav && 'nav-items--visible'}`}>
						{navItems.map(item => (
							<li key={`nav-${item.text}`}>
								<NavLink to={item.url} onClick={hideNav} className='nav-link'>
									{item.text}
								</NavLink>
							</li>
						))}
					</ul>
				</div>
			</div>
		</header>
	)
}

export default Header
