import * as React from "react";

import TwoSectionLayout from '../components/two-section-layout';
import Seo from '../components/seo';
import Layout from '../components/layout';

const ContactPage = () => (
    <Layout>
        <Seo title="Contact"/>

        <TwoSectionLayout
            titleHeading={ 'Contact' }
            bodyText={ 'All bookings please contact Alexander.goy@icloud.com' }/>

    </Layout>
);

export default ContactPage;