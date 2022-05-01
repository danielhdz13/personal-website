import * as React from 'react'
import { Link, useStaticQuery, graphql } from 'gatsby'
import Headshot from "../images/square-headshot.jpg"
import {
    introContainer,
    profilePicture,
    introTextContainer,
} from './layout.module.css'

const Introduction = () => {
    return (
        <div className={introContainer}>
            <img className={profilePicture} src={Headshot}></img>
            <div className={introTextContainer}>
                <h3>Hi! I'm Daniel.</h3>
                <p>I'm a senior studying Computer Science at Northwestern University. You can find some
                    of my life updates and ramblings on this site. Thanks for checking it out, and enjoy!
                </p>
            </div>
        </div>
    )
}

export default Introduction