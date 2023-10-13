import React from 'react'
import useSiteMetadata from '../../hooks/useSiteMetadata'

type SEOProps = {
	title?: string
	description?: string
	pathname?: string
}

const SEO = ({ title, description, pathname, children }: React.PropsWithChildren<SEOProps>) => {
	const { title: defaultTitle, description: defaultDescription, siteUrl } = useSiteMetadata()

	const seo = {
		title: title ? `${title} - ${defaultTitle}` : defaultTitle,
		description: description || defaultDescription,
		url: `${siteUrl}${pathname || ``}`,
	}

	return (
		<>
			<html lang='en' />
			<body className='stretched' />
			<title>{seo.title}</title>
			<meta name='description' content={seo.description} />
			<link rel='preconnect' href='https://fonts.googleapis.com' />
			<link rel='preconnect' href='https://fonts.gstatic.com' crossOrigin='anonymous' />
			<link
				href='https://fonts.googleapis.com/css2?family=Roboto:wght@300;400;500;700&family=Source+Sans+Pro:wght@300;400;600;700&display=swap'
				rel='stylesheet'
			/>
			<link rel='stylesheet' href='/css/style.css' />
			<link rel='stylesheet' href='/css/font-icons.css' />
			<link rel='stylesheet' href='/css/swiper.css' />
			<link rel='stylesheet' href='/css/construction.css' />
			{children}
		</>
	)
}

export default SEO
