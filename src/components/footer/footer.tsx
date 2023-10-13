import React from 'react'

const Footer = () => {
	return (
		<footer id='footer' className='dark'>
			<div className='container'>
				<div className='footer-widgets-wrap'>
					<div className='row'>
						<div className='col-lg-9'>
							<div className='widget'>
								<img
									src='images/footer-widget-logo.png'
									alt='Image'
									className='alignleft'
									style={{ marginTop: '8px', paddingRight: '18px', borderRight: '1px solid #4A4A4A' }}
								/>
								<p>
									We believe in <strong>Simple</strong>, <strong>Creative</strong> &amp; <strong>Flexible</strong> Design Standards
									with a Retina &amp; Responsive Approach. Browse the amazing Features this template offers.
								</p>
								<div className='line' style={{ margin: '30px 0' }}></div>
								<div className='row col-mb-30'>
									<div className='col-lg-3 col-6 widget_links'>
										<ul>
											<li>
												<a href='#'>Home</a>
											</li>
											<li>
												<a href='#'>About</a>
											</li>
											<li>
												<a href='#'>FAQs</a>
											</li>
											<li>
												<a href='#'>Support</a>
											</li>
											<li>
												<a href='#'>Contact</a>
											</li>
										</ul>
									</div>

									<div className='col-lg-3 col-6 widget_links'>
										<ul>
											<li>
												<a href='#'>Shop</a>
											</li>
											<li>
												<a href='#'>Portfolio</a>
											</li>
											<li>
												<a href='#'>Blog</a>
											</li>
											<li>
												<a href='#'>Events</a>
											</li>
											<li>
												<a href='#'>Forums</a>
											</li>
										</ul>
									</div>

									<div className='col-lg-3 col-6 widget_links'>
										<ul>
											<li>
												<a href='#'>Corporate</a>
											</li>
											<li>
												<a href='#'>Agency</a>
											</li>
											<li>
												<a href='#'>eCommerce</a>
											</li>
											<li>
												<a href='#'>Personal</a>
											</li>
											<li>
												<a href='#'>One Page</a>
											</li>
										</ul>
									</div>

									<div className='col-lg-3 col-6 widget_links'>
										<ul>
											<li>
												<a href='#'>Restaurant</a>
											</li>
											<li>
												<a href='#'>Wedding</a>
											</li>
											<li>
												<a href='#'>App Showcase</a>
											</li>
											<li>
												<a href='#'>Magazine</a>
											</li>
											<li>
												<a href='#'>Landing Page</a>
											</li>
										</ul>
									</div>
								</div>
							</div>
						</div>

						<div className='col-lg-3 mt-5 mt-lg-0'>
							<div className='widget'>
								<div className='row col-mb-30'>
									<div className='col-12'>
										<div className='footer-big-contacts'>
											<span>Call Us:</span>
											(1) 22 55412474
										</div>
									</div>

									<div className='col-12'>
										<div className='footer-big-contacts'>
											<span>Send an Email:</span>
											info@canvas.com
										</div>
									</div>
								</div>
							</div>

							<div className='widget subscribe-widget'>
								<div className='row col-mb-30'>
									<div className='col-12 col-sm-6'>
										<a href='#' className='social-icon bg-dark h-bg-facebook mb-0 me-3'>
											<i className='fa-brands fa-facebook-f'></i>
											<i className='fa-brands fa-facebook-f'></i>
										</a>
										<a href='#'>
											<small className='d-block text-smaller'>
												<strong>Like us</strong>
												<br />
												on Facebook
											</small>
										</a>
									</div>
									<div className='col-12 col-sm-6'>
										<a href='#' className='social-icon bg-dark h-bg-rss mb-0 me-3'>
											<i className='fa-solid fa-rss'></i>
											<i className='fa-solid fa-rss'></i>
										</a>
										<a href='#'>
											<small className='d-block text-smaller'>
												<strong>Subscribe</strong>
												<br />
												to RSS Feeds
											</small>
										</a>
									</div>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
			<div id='copyrights'>
				<div className='container'>
					<div className='row justify-content-between col-mb-30'>
						<div className='col-12 col-md-auto text-center text-md-start'>
							Copyrights &copy; 2023 All Rights Reserved by Canvas Inc.
							<br />
							<div className='copyright-links'>
								<a href='#'>Terms of Use</a> / <a href='#'>Privacy Policy</a>
							</div>
						</div>

						<div className='col-12 col-md-auto text-center text-md-end'>
							<div className='copyrights-menu copyright-links'>
								<a href='#'>Home</a>/<a href='#'>About Us</a>/<a href='#'>Team</a>/<a href='#'>Clients</a>/<a href='#'>FAQs</a>/
								<a href='#'>Contact</a>
							</div>
						</div>
					</div>
				</div>
			</div>
		</footer>
	)
}

export default Footer
