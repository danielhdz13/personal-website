import * as React from 'react'
import { Link, useStaticQuery, graphql } from 'gatsby'
import { MDXRenderer } from 'gatsby-plugin-mdx'
import {
    yearContainer,
    timeLineEvent,
} from './layout.module.css'

const TimeLineYear = ({data}) => {
    console.log(data)
    const year_tag = data.nodes[0].frontmatter.tag
    console.log(year_tag)
    const year = year_tag.substring(year_tag.length - 4)
    return (
        <div className={yearContainer}>
            <h3>{year}</h3>
            {
                data.nodes.map((node) => (
                    <div key={node.id} className={timeLineEvent}>
                        <h4>{node.frontmatter.title}</h4>
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