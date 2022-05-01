import * as React from 'react';
import Layout from '../components/layout'
//import { StaticImage } from 'gatsby-plugin-image'
import './index.css';
import Introduction from '../components/introduction'
import LifeUpdates from '../components/lifeupdates'


const IndexPage = () => {
    return (
        <Layout pageTitle="Home Page">
            <Introduction />
            <LifeUpdates />
        </Layout>
    )
}

export default IndexPage;


