import React from 'react'

const Header = () => {
	return (
		<>
			<div id='top-bar'>
				<div className='container'>
					<div className='row justify-content-between'>
						<div className='col-12 col-md-auto'>
							<ul id='top-social'>
								<li>
									<a href='#' className='h-bg-facebook'>
										<span className='ts-icon'>
											<i className='fa-brands fa-facebook-f'></i>
										</span>
										<span className='ts-text'>Facebook</span>
									</a>
								</li>
								<li>
									<a href='#' className='h-bg-twitter'>
										<span className='ts-icon'>
											<i className='fa-brands fa-twitter'></i>
										</span>
										<span className='ts-text'>Twitter</span>
									</a>
								</li>
								<li>
									<a href='#' className='h-bg-dribbble'>
										<span className='ts-icon'>
											<i className='fa-brands fa-dribbble'></i>
										</span>
										<span className='ts-text'>Dribbble</span>
									</a>
								</li>
								<li>
									<a href='#' className='h-bg-github'>
										<span className='ts-icon'>
											<i className='fa-brands fa-github'></i>
										</span>
										<span className='ts-text'>Github</span>
									</a>
								</li>
								<li>
									<a href='#' className='h-bg-pinterest'>
										<span className='ts-icon'>
											<i className='fa-brands fa-pinterest-p'></i>
										</span>
										<span className='ts-text'>Pinterest</span>
									</a>
								</li>
								<li>
									<a href='#' className='h-bg-instagram'>
										<span className='ts-icon'>
											<i className='fa-brands fa-instagram'></i>
										</span>
										<span className='ts-text'>Instagram</span>
									</a>
								</li>
							</ul>
						</div>

						<div className='col-12 col-md-auto'>
							<div className='top-links'>
								<ul className='top-links-container'>
									<li className='top-links-item'>
										<a href='#'>Locations</a>
										<ul className='top-links-sub-menu'>
											<li className='top-links-item'>
												<a href='#'>San Francisco</a>
											</li>
											<li className='top-links-item'>
												<a href='#'>London</a>
											</li>
											<li className='top-links-item'>
												<a href='#'>Amsterdam</a>
											</li>
										</ul>
									</li>
									<li className='top-links-item'>
										<a href='faqs.html'>FAQs</a>
									</li>
									<li className='top-links-item'>
										<a href='contact.html'>Contact</a>
									</li>
								</ul>
							</div>
						</div>
					</div>
				</div>
			</div>
			<header id='header' className='header-size-sm' data-sticky-shrink='false'>
				<div className='container'>
					<div className='header-row'>
						<div id='logo' className='ms-auto ms-lg-0 me-lg-auto'>
							<a href='demo-construction.html'>
								<img
									className='logo-default'
									srcSet='/images/logo.png, /images/logo@2x.png 2x'
									src='/images/logo@2x.png'
									alt='Canvas Logo'
								/>
							</a>
						</div>

						<div className='header-misc d-none d-lg-flex'>
							<ul className='header-extras'>
								<li>
									<i className='i-plain bi-telephone m-0'></i>
									<div className='he-text'>
										Call Us
										<span>(1) 22 54215821</span>
									</div>
								</li>
								<li>
									<i className='i-plain bi-envelope m-0'></i>
									<div className='he-text'>
										Email Us
										<span>info@canvas.com</span>
									</div>
								</li>
								<li>
									<i className='i-plain bi-clock m-0'></i>
									<div className='he-text'>
										We'are Open
										<span>Mon - Sat, 10AM to 6PM</span>
									</div>
								</li>
							</ul>
						</div>
					</div>
				</div>

				<div id='header-wrap'>
					<div className='container'>
						<div className='header-row justify-content-between flex-row-reverse flex-lg-row justify-content-lg-center'>
							<div className='header-misc'>
								<div id='top-search' className='header-misc-icon'>
									<a href='#' id='top-search-trigger'>
										<i className='uil uil-search'></i>
										<i className='bi-x-lg'></i>
									</a>
								</div>
							</div>

							<div className='primary-menu-trigger'>
								<button className='cnvs-hamburger' type='button' title='Open Mobile Menu'>
									<span className='cnvs-hamburger-box'>
										<span className='cnvs-hamburger-inner'></span>
									</span>
								</button>
							</div>

							<nav className='primary-menu with-arrows'>
								<ul className='menu-container'>
									<li className='menu-item current'>
										<a className='menu-link' href='demo-construction.html'>
											<div>Home</div>
										</a>
									</li>
									<li className='menu-item'>
										<a className='menu-link' href='demo-construction-services.html'>
											<div>What we do</div>
										</a>
										<ul className='sub-menu-container'>
											<li className='menu-item'>
												<a className='menu-link' href='#'>
													<div>Housing Management</div>
												</a>
											</li>
											<li className='menu-item'>
												<a className='menu-link' href='#'>
													<div>Construction Planning</div>
												</a>
											</li>
											<li className='menu-item'>
												<a className='menu-link' href='#'>
													<div>Green Homes</div>
												</a>
											</li>
											<li className='menu-item'>
												<a className='menu-link' href='#'>
													<div>Architecture Design</div>
												</a>
											</li>
											<li className='menu-item'>
												<a className='menu-link' href='#'>
													<div>Interior Planning</div>
												</a>
											</li>
										</ul>
									</li>
									<li className='menu-item'>
										<a className='menu-link' href='demo-construction-about-us.html'>
											<div>About Us</div>
										</a>
									</li>
									<li className='menu-item'>
										<a className='menu-link' href='demo-construction-projects.html'>
											<div>Projects</div>
										</a>
										<ul className='sub-menu-container'>
											<li className='menu-item'>
												<a className='menu-link' href='demo-construction-projects-2.html'>
													<div>2 Columns</div>
												</a>
											</li>
											<li className='menu-item'>
												<a className='menu-link' href='demo-construction-projects-3.html'>
													<div>3 Columns</div>
												</a>
											</li>
											<li className='menu-item'>
												<a className='menu-link' href='demo-construction-projects.html'>
													<div>4 Columns</div>
												</a>
											</li>
											<li className='menu-item'>
												<a className='menu-link' href='demo-construction-projects-5.html'>
													<div>5 Columns</div>
												</a>
											</li>
										</ul>
									</li>
									<li className='menu-item'>
										<a className='menu-link' href='demo-construction-investors.html'>
											<div>Investors</div>
										</a>
									</li>
									<li className='menu-item'>
										<a className='menu-link' href='demo-construction-blog.html'>
											<div>News</div>
										</a>
									</li>
									<li className='menu-item'>
										<a className='menu-link' href='demo-construction-careers.html'>
											<div>Careers</div>
										</a>
									</li>
									<li className='menu-item'>
										<a className='menu-link' href='demo-construction-contact.html'>
											<div>Contact</div>
										</a>
									</li>
								</ul>
							</nav>

							<form className='top-search-form' action='search.html' method='get'>
								<input
									type='text'
									name='q'
									className='form-control'
									value=''
									placeholder='Type &amp; Hit Enter..'
									autoComplete='off'
								/>
							</form>
						</div>
					</div>
				</div>

				<div className='header-wrap-clone'></div>
			</header>
		</>
	)
}

export default Header
