import React from 'react';
import _ from 'lodash';
import { graphql, Link } from 'gatsby';
import { MDXRenderer } from 'gatsby-plugin-mdx';
import Layout from '../components/Layout';

const ProjectPage = ({ data }) => {

	const { frontmatter, body } = data.mdx;

	return (
		<Layout>
			<div 
				className='project single' 
				style={{
					padding: '0 1rem'
				}}
			>
				<div 
					className='title'
					style={{
						marginBottom:'3rem',
						borderBottom: '1px solid rgba(0,0,0,.1)'
					}}
				>
					<span className='meta'>{frontmatter.date} {'\u2192'} {frontmatter.date_end?frontmatter.date_end:'Present'}</span>
					<h3
						style={{ maxWidth:'20em' }}
					>
						{frontmatter.title}
					</h3>
				</div>
				<div 
					className='main'
					style={{
						display:'flex'
					}}
				>
					<div 
						className='metadata' 
						style={{ fontWeight:'lighter' }}
					>
						<dl>
							{frontmatter.client&&<dt className='meta'>Client</dt>}
							{frontmatter.client&&<dd>{frontmatter.client}</dd>}
							{<dt className='meta'>Filed under</dt>}
							<dd>
								<ul style={{ listStyle:'none' }}>
							{
								frontmatter.tags&&frontmatter.tags.map(tag => 
									<li key={tag}>
										<span className='tag'>
											<Link to={`/tags/${_.kebabCase(tag)}`} >{tag}</Link>
										</span>
									</li>
								)
							}
								</ul>
							</dd>
						</dl>
					</div>

					<div className='content'>
						<MDXRenderer>
							{body}
						</MDXRenderer>
					</div>
				</div>
			</div>
		</Layout>
	)
}

export default ProjectPage;

export const query = graphql`
	query ($id: String) {
		mdx(id: {eq: $id}) {
			frontmatter{
				title
				date
				date_end
				client
				tags
			}
			body
		}
	}
`

