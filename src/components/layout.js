import * as React from 'react'
import { Link, useStaticQuery, graphql } from 'gatsby'
import NavBar from './navbar'
import {
    container,
    heading,
    navLinks,
    navLinkItem,
    navLinkText,
    siteTitle,
} from './layout.module.css'

const Layout = ({ pageTitle, children }) => {
    const data = useStaticQuery(graphql`
        query {
            site {
                siteMetadata {
                    title
                }
            }
        }`)

    return (
        <div className={container}>
            <NavBar />
            <main>
                {children}
            </main>
        </div>
    )
}

export default Layout