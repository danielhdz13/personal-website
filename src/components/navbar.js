import * as React from 'react'
import { Link, useStaticQuery, graphql } from 'gatsby'
import {
    nav,
    container,
    heading,
    navLinks,
    navLinkItem,
    navLinkTitleItem,
    navLinkText,
    siteTitle,
    activeNavLink,
    navBarTitle,
} from './layout.module.css'

const NavBar = () => {
    return (
        <nav className={nav}>
            <ul className={navLinks}>
                <li className={navLinkTitleItem}>
                    <Link 
                        to="/" 
                        className={navBarTitle}>
                            Daniel Hernandez
                    </Link>
                </li>
            </ul>
            <ul className={navLinks}>
                <li className={navLinkItem}>
                    <Link 
                        to="/" 
                        className={navLinkText}
                        activeClassName={activeNavLink}>
                            Home
                    </Link>
                </li>
                <li className={navLinkItem}>
                    <Link 
                        to="/about" 
                        className={navLinkText}
                        activeClassName={activeNavLink}
                        >
                            About
                    </Link>
                </li>
                <li className={navLinkItem} >
                    <Link 
                        to="/blog" 
                        className={navLinkText}
                        activeClassName={activeNavLink}>
                            Blog
                    </Link>
                </li>
            </ul>
        </nav>
    )
}

export default NavBar