import * as React from 'react'

import Layout from '../components/layout'
import Seo from '../components/seo'
import Socials from '../components/socials';
import SoundcloudPlayer from '../components/soundcloud-player';

const IndexPage = () => (
    <Layout>
        <Seo title="Home"/>
        <div style={ { display: `flex`, width: `100%`, justifyContent: `center` }}>
            <iframe style={ { position: `absolute`, marginTop: `50vh`, width: `65%` } } src="https://mixlr.com/users/8273514/embed"
                    width="100%"
                    height="180px"
                    scrolling="no"
                    frameBorder="no"
                    marginHeight="0"
                    marginWidth="0">
            </iframe>
        </div>
        <div style={ { display: `flex`, width: `100%`, height: `100vh`, justifyContent: `center`, top: `92vh`, position: `relative` }}>
            <h3 className={ 'shows__h1' }> Shows </h3>
            <p style={ { fontSize: `1.5rem`, marginTop: `25vh` } } className={ 'shows__h1' }> NEW DRIVETIME SHOWS WEDS - FRI 4PM-7 BST </p>
            <SoundcloudPlayer/>
        </div>
        <Socials/>
        <footer
            style={ {
                marginTop: `2rem`,
                margin: `0 auto`,
                position: `fixed`,
                bottom: 0,
                textAlign: `center`,
                width: `100%`,
            } }
        >
            { new Date().getFullYear() }, Built by }
            <a target='_blank' href='https://www.linkedin.com/in/leightongrantham/'>Leighton Grantham</a>
        </footer>
    </Layout>
);

export default IndexPage