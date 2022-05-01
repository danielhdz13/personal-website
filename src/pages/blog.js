import * as React from 'react'
import { useStaticQuery, graphql } from 'gatsby'
import { MDXRenderer } from 'gatsby-plugin-mdx'
import Layout from '../components/layout'

const BlogPage = () => {
    const data = useStaticQuery(graphql`
        query blogQuery {
            allMdx(
                filter: {frontmatter: {tag: {eq: "blog"}}}
                sort: {fields: frontmatter___date, order: DESC}
                ) {
                nodes {
                    body
                    id
                    frontmatter {
                        tag
                        title
                        date
                    }
                }
            }
        }
    `)
    return (
        <Layout pageTitle="My Blog Posts">
            <ul>
            {
                data.allMdx.nodes.map((node) => (
                    <article key={node.id}>
                        <h2>{node.frontmatter.title}</h2>
                        <p>Posted: {node.frontmatter.date}</p>
                        <MDXRenderer>
                            {node.body}
                        </MDXRenderer>
                    </article>
                ))
            }
            </ul>
        </Layout>
    )
}   

export default BlogPage