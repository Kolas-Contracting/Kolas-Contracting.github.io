import React from 'react'
import type { PageProps } from 'gatsby'
import Layout from '../components/layout'
import SEO from '../components/seo'

const IndexPage: React.FC<PageProps> = () => {
	return <Layout>Kolas Home Page</Layout>
}

export default IndexPage

export const Head = () => <SEO title='Home' />
