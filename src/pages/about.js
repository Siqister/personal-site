import React from 'react';
import Layout from '../components/Layout';
import { graphql } from 'gatsby';
import { MDXRenderer } from 'gatsby-plugin-mdx';

const AboutPage = ({ data }) => {

	const node = data.allMdx.nodes[0];

	return (
		<Layout>
			<div 
				className='about single' 
				style={{
					padding: '0 1rem'
				}}
			>
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
							<dt className='meta'>Find me elsewhere</dt>
							<dd>
								<ul style={{ listStyle:'none' }}>
									<li><a href='http://github.com/siqister'>Github</a></li>
									<li>siqi.zhu [at] gmail.com</li>
								</ul>
							</dd>
						</dl>
					</div>
					<div
						className='content'
					>
						<MDXRenderer>
							{node.body}
						</MDXRenderer>
					</div>
				</div>
			</div>
		</Layout>
	)
}

export default AboutPage;

export const query = graphql`
	query AboutPageQuery {
	  allMdx(filter: {frontmatter: {title: {eq: "about"}}}){
			nodes{
				frontmatter {
					resume {
						publicURL
					}
					contact
				}
				body
	    }
	  }
	}
`