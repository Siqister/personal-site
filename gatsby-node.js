const path = require('path');
const _ = require('lodash');

exports.createPages = async ({ actions, graphql, reporter }) => {

	const { createPage } = actions;

	const tagPageTemplate = path.resolve('src/templates/tag.js');

	// execute query to get a list of tags
	const result = await graphql(`
		{
			tagsGroup: allMdx{
				group(field: frontmatter___tags){
					fieldValue
					totalCount
				}
			}
		}
	`);

	// use resulting list of tags to build tag pages
	if(result.errors){
		reporter.panicOnBuild('Error while running GraphQL query');
		return;
	}

	const tags = result.data.tagsGroup.group;

	tags.forEach(tag => {
		createPage({
			path: `/tags/${_.kebabCase(tag.fieldValue)}`,
			component: tagPageTemplate,
			context: {
				tag: tag.fieldValue,
			},
		});
	});
	
}