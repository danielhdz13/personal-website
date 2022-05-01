import * as React from 'react'
import { Link, useStaticQuery, graphql } from 'gatsby'
import TimeLineYear from './timeLineYear'

const LifeUpdates = () => {
    const data = useStaticQuery(graphql`
        query MyQuery {
            query1: allMdx(
                filter: {frontmatter: {tag: {eq: "timeline-2021"}}}
                sort: {fields: frontmatter___date, order: DESC}
                ) {
                nodes {
                    body
                    id
                    frontmatter {
                        tag
                        title
                    }
                }
            }
            query2: allMdx(
                filter: {frontmatter: {tag: {eq: "timeline-2022"}}}
                sort: {fields: frontmatter___date, order: DESC}
                ) {
                nodes {
                    body
                    id
                    frontmatter {
                        tag
                        title
                    }
                }
            }
        }
    `)
    console.log(data)
    return (
        <div>
            <h3>Life Updates</h3>
            <TimeLineYear data={data.query2}/>
            <TimeLineYear data={data.query1}/>
        </div>
    )
}

const query = graphql`
    query MyQuery {
        query1: allMdx(
            filter: {frontmatter: {tag: {eq: "timeline-2021"}}}
            sort: {fields: frontmatter___date, order: DESC}
            ) {
            nodes {
                body
                id
                frontmatter {
                    tag
                    title
                }
            }
        }
        query2: allMdx(
            filter: {frontmatter: {tag: {eq: "timeline-2022"}}}
            sort: {fields: frontmatter___date, order: DESC}
            ) {
            nodes {
                body
                id
                frontmatter {
                    tag
                    title
                }
            }
        }
    }
`

export default LifeUpdates