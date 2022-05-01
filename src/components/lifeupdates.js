import * as React from 'react'
import { useStaticQuery, graphql } from 'gatsby'
import TimeLineYear from './timeLineYear'
import {
    lifeUpdatesContainer,
} from './layout.module.css'

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
        <div className={lifeUpdatesContainer}>
            <h3>LIFE UPDATES</h3>
            <TimeLineYear data={data.query2}/>
            <TimeLineYear data={data.query1}/>
        </div>
    )
}

export default LifeUpdates