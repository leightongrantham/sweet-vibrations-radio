import * as React from "react";

import Layout from '../components/layout';
import Seo from "../components/seo";
import Socials from '../components/socials';
import SoundcloudPlayer from '../components/soundcloud-player';

const ShowsPage = () => (
    <Layout>
        <Seo title="Shows"/>
        <SoundcloudPlayer/>
        <Socials/>
    </Layout>
);

export default ShowsPage;