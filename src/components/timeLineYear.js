import * as React from 'react'
import { Link, useStaticQuery, graphql } from 'gatsby'
import { MDXRenderer } from 'gatsby-plugin-mdx'

const TimeLineYear = ({data}) => {
    console.log(data)
    const year_tag = data.nodes[0].frontmatter.tag
    console.log(year_tag)
    const year = year_tag.substring(year_tag.length - 4)
    return (
        <div>
            <h3>{year}</h3>
            {
                data.nodes.map((node) => (
                    <div key={node.id}>
                        <h3>{node.frontmatter.title}</h3>
                        <p>
                            <MDXRenderer>
                                {node.body}
                            </MDXRenderer>
                        </p>
                    </div>
                ))
            }
        </div>
    )
}

export default TimeLineYear