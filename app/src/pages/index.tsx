import * as React from 'react'

import Layout from '../components/layout'
import Seo from '../components/seo'
import Socials from '../components/socials';

import { Columns } from 'react-bulma-components';
import { Notification } from 'react-bulma-components';

const IndexPage = () => (
    <Layout>
        <div className={ 'index__container' }>
            <Seo title="Home"/>
            {/*<iframe src="https://mixlr.com/users/8273514/embed"*/ }
            {/*        width="100%"*/ }
            {/*        height="180px"*/ }
            {/*        scrolling="no"*/ }
            {/*        frameBorder="no"*/ }
            {/*        marginHeight="0"*/ }
            {/*        marginWidth="0">*/ }
            {/*</iframe>*/ }
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

            <Socials/>
        </div>
    </Layout>
);

export default IndexPage
