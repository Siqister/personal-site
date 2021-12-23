import * as React from "react";
import { graphql } from "gatsby";

import Layout from '../components/Layout';
import ProjectList from '../components/ProjectList';

// markup
const IndexPage = ({ data }) => {

  return (
    <Layout title={`select projects by Siqi Zhu`}>
      <ProjectList data={data.allMdx.nodes} />
    </Layout>
  )
}

export default IndexPage

// page query
export const query = graphql`
query ProjectIndexQuery {
  allMdx(filter: {frontmatter: {category: {eq: "project"}}}){
    nodes {
      ...ProjectQueryFragment
    }
  }
}
`;

// https://www.gatsbyjs.com/docs/adding-tags-and-categories-to-blog-posts/