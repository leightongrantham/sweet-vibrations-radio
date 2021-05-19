import * as React from 'react'
import { Link } from 'gatsby'

import Layout from '../components/layout'
import Seo from '../components/seo'

import { Columns } from 'react-bulma-components';
import { Notification } from 'react-bulma-components';

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
        <Columns>
            <Columns.Column>
                <Notification color="primary">First Column</Notification>
            </Columns.Column>
            <Columns.Column>
                <Notification color="primary">Second Column</Notification>
            </Columns.Column>
            <Columns.Column>
                <Notification color="primary">Third Column</Notification>
            </Columns.Column>
        </Columns>
        <p>
            <Link to="/contact/">Contact</Link> <br/>
            <Link to="/using-typescript/">About</Link>
        </p>
    </Layout>
);

export default IndexPage
