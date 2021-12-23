import React, { useState } from 'react';
import { useStaticQuery, graphql } from 'gatsby';
import Helmet from 'react-helmet';

import Header from './Header';
import Menu from './Menu';
import Footer from './Footer';

import './layout.css';

const mainStyle = {
  margin: '0 auto',
  padding: '0 0 1.45rem',
  marginTop: '6rem',
  transition: 'all .2s'
}

const titleStyle = {
	transformOrigin: 'top left',
	transform: 'rotate(270deg)',
	position: 'fixed',
	top: '50%',
	left: '1rem',
	textTransform: 'capitalize',
	color: 'rgb(120,120,150)',
}

const Layout = ({ title, children }) => {

	const [isMenuOpen, setIsMenuOpen] = useState(false);

	const data = useStaticQuery(graphql`
		query {
			site {
				siteMetadata {
					title
				}
			}
		}
	`);

	return <div>
		<Helmet
			title={data.site.siteMetadata.title}
		/>
		<Header 
			onMenuToggle={() => setIsMenuOpen(!isMenuOpen)}
			isMenuOpen={isMenuOpen}
			style={{ transform: `translate(${isMenuOpen?'-300px':'0'})` }}
		/>
		<Menu 
			style={{ transform: `translate(${isMenuOpen?'-300px':'0'})` }}
		/>
		<main 
			style={{ transform: `translate(${isMenuOpen?'-300px':'0'})`, ...mainStyle }}
			className='container'
		>
			{children}
		</main>
		<span className='title' style={titleStyle}>{title}</span>
		<Footer />
	</div>

}

export default Layout;