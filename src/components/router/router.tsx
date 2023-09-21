import { BrowserRouter, Route, Routes } from 'react-router-dom'
import AppRoutes from '@/constants/appRoutes'
import About from '@/pages/about'
import Contact from '@/pages/contact'
import Home from '@/pages/home'
import Services from '@/pages/services'
import Layout from '../layout'

const Router = () => {
	return (
		<BrowserRouter>
			<Routes>
				<Route element={<Layout />}>
					<Route path={AppRoutes.About} element={<About />} />
					<Route path={AppRoutes.Contact} element={<Contact />} />
					<Route path={AppRoutes.Home} element={<Home />} />
					<Route path={AppRoutes.Services} element={<Services />} />
				</Route>
			</Routes>
		</BrowserRouter>
	)
}

export default Router
