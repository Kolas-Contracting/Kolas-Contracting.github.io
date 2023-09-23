import { MouseEvent } from 'react'

interface NavToggleProps {
	isOpen: boolean
	onClick?: () => void
}

const NavToggle = ({ isOpen = false, onClick = () => {} }: NavToggleProps) => {
	const handleClick = (event: MouseEvent<HTMLButtonElement>) => {
		event.preventDefault()

		onClick()
	}

	return (
		<button onClick={handleClick} className='nav-toggle'>
			<span className={`fa ${isOpen ? 'fa-times' : 'fa-bars'}`}></span>
		</button>
	)
}

export default NavToggle
