import { graphql } from 'gatsby';

export const ProjectQueryFragment = graphql`
	fragment ProjectQueryFragment on Mdx {
		slug
		id
		frontmatter {
			title
			title_short
			date
			tags
			thumb {
				publicURL
				childImageSharp {
					gatsbyImageData(width:1200)
				}
			}
		}
	}
`