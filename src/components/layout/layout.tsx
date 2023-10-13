import React from 'react'
import Footer from '../footer'
import Header from '../header'

const Layout = ({ children }: React.PropsWithChildren) => {
	return (
		<>
			<div id='wrapper'>
				<Header />
				{children}
				<Footer />
			</div>
			<div id='gotoTop' className='uil uil-angle-up'></div>
			<script src='/js/plugins.min.js'></script>
			<script src='/js/functions.bundle.js'></script>
		</>
	)
}

export default Layout
