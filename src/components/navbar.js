import * as React from 'react'
import { Link, useStaticQuery, graphql } from 'gatsby'
import {
    nav,
    container,
    heading,
    navLinks,
    navLinkItem,
    navLinkText,
    siteTitle,
} from './layout.module.css'

const NavBar = () => {
    return (
        <nav className={nav}>
            <ul className={navLinks}>
                <li className={navLinkItem}>
                    <Link to="/" className={navLinkText}>Daniel Hernandez</Link>
                </li>
            </ul>
            <ul className={navLinks}>
                <li className={navLinkItem}>
                    <Link to="/" className={navLinkText}>Home</Link>
                </li>
                <li className={navLinkItem}>
                    <Link to="/about" className={navLinkText}>About</Link>
                </li>
                <li className={navLinkItem} >
                    <Link to="/blog" className={navLinkText}>Blog</Link>
                </li>
            </ul>
        </nav>
    )
}

export default NavBar