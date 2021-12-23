import React from 'react';
import { Link, graphql, useStaticQuery } from 'gatsby';
import _ from 'lodash';

const menuContainerStyle = {
	position: 'fixed',
	height: '100%',
	width: '300px',
	top:0,
	left: '100%',
	padding:'.5rem 1.2rem',
	zIndex: 1000,
	transition: 'all .2s',
	background: 'rgb(30, 30, 35)',
	color: 'rgb(230, 230, 230)'
}

const navListItemStyle = {
	fontSize: '1.25em',
	fontWeight: 'bold',
	lineHeight: 1.2,
	margin: '.5rem 0 2rem',
	//borderBottom: '1px solid hsla(0,0%,0%,.1)'
}

const tagsListItemStyle = {
	fontSize: '1rem',
	padding: '.25rem 0 0 1rem',
	fontWeight: 'normal',
}

const Menu = ({ style }) => {

	const data = useStaticQuery(graphql`
		query{
			allMdx{
				group( field: frontmatter___tags){
					fieldValue
				}
			}
		}
	`);

	const tags = data.allMdx.group.map(x => x.fieldValue);

	return (
			<nav style={{ ...menuContainerStyle, ...style }}>
				<ul style={{ listStyle:'none' }}>
					<li style={navListItemStyle}>
						<Link to='/'>Projects</Link>
						<ul 
							style={{
								listStyle:'none',
								marginLeft: 0
							}}
							className='tags-list'
						>
							{tags.map(tag => 
								<li key={tag} style={tagsListItemStyle}>
									<Link to={`/tags/${_.kebabCase(tag)}`}>{`${_.capitalize(tag)}`}</Link>
								</li>
							)}
						</ul>
					</li>
					<li style={navListItemStyle}>
						<span style={{textDecoration:'line-through'}}>Writing</span> (coming soon)
					</li>
					<li style={navListItemStyle}>
						<Link to='/about'>About</Link>
					</li>
				</ul>
			</nav>
	)

}

export default Menu;