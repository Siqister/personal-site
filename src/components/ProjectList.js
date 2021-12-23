import React from 'react';
import { Link } from 'gatsby';
import { GatsbyImage, getImage } from 'gatsby-plugin-image';
import _ from 'lodash';

const projectStyle = {
	padding: '1.5rem 1rem',
	textAlign: 'center'
}

const tagStyle = {
	padding: '0 .5rem',
	fontSize: '.625rem',
	lineHeight: 1.6,
}

const Project = ({ data }) => {

	const {tags, title, date, thumb} = data.frontmatter;
	const image = getImage(thumb);
	
	return (
		<div className='project thumb' style={projectStyle}>
			<div className='tags-list'>
				{tags.slice(0,2).map(tag => 
						<span className='tag meta' key={tag} style={tagStyle}>
							<Link to={`/tags/${_.kebabCase(tag)}`}>{tag}</Link>
						</span>
				)}
			</div>
			<Link to={`/${data.slug}`}>
				<h3>{title}</h3>
				{
					thumb.childImageSharp?
					<GatsbyImage image={image} title={title} alt={title}/>:
					<img src={thumb.publicURL} title={title} alt={title} />
				}
			</Link>
		</div>
	)
}

const ProjectList = ({ data }) => {
	return (
		<div className='project-list'>
			{data.map(x => <Project data={x} key={x.id}/>)}
		</div>
	)
}

export default ProjectList;