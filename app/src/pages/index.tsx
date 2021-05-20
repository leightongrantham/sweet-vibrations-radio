import * as React from 'react'

import Layout from '../components/layout'
import Seo from '../components/seo'
import Socials from '../components/socials';

const IndexPage = () => (
    <Layout>
        <Seo title="Home"/>
        <div style={ { display: `flex`, width: `100%`, justifyContent: `center` }}>
            <iframe style={ {position: `absolute`, marginTop: `50vh`, width: `65%`} } src="https://mixlr.com/users/8273514/embed"
                    width="100%"
                    height="180px"
                    scrolling="no"
                    frameBorder="no"
                    marginHeight="0"
                    marginWidth="0">
            </iframe>
        </div>
        <Socials/>
    </Layout>
);

export default IndexPage
