import React from 'react';
import { graphql } from 'gatsby';

import Layout from '../components/Layout';
import ProjectList from '../components/ProjectList';

const TagPage = ({ pageContext, data }) => {

	return (
		<Layout title={`projects / ${pageContext.tag}`}>
			<ProjectList data={data.allMdx.nodes} />
		</Layout>
	)

}

export default TagPage;

export const query = graphql`
	query TagQuery($tag: String) {
	  allMdx(filter: {frontmatter: {tags: {in: [$tag]}}}){
	    nodes {
	      ...ProjectQueryFragment
	    }
	  }
	}
`