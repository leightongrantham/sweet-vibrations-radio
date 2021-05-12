import * as React from 'react'
import { Link } from 'gatsby'

import Layout from '../components/layout'
import Seo from '../components/seo'

const IndexPage = () => (
    <Layout>
        <Seo title="Home"/>
        <iframe src="https://mixlr.com/users/8273514/embed"
                width="100%"
                height="180px"
                scrolling="no"
                frameBorder="no"
                marginHeight="0"
                marginWidth="0">
        </iframe>
        <p>
            <Link to="/contact/">Contact</Link> <br/>
            <Link to="/using-typescript/">About</Link>
        </p>
    </Layout>
);

export default IndexPage