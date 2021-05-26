/**
 * Layout component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.com/docs/use-static-query/
 */

import * as React from 'react'
import * as PropTypes from 'prop-types'
import { graphql, useStaticQuery } from 'gatsby'

import Header from "./header"
import './layout.css'

const Layout = ({children}) => {
    // const data = useStaticQuery(graphql`
    //      query {
    //        allStrapiInitial {
    //              edges {
    //                node {
    //                  strapiId
    //                  title
    //                  item1
    //                  item2
    //                }
    //              }
    //       }
    // }`);
    //
    // const title = data.allStrapiInitial.edges[0].node.title;

    return (
        <>
            <Header/>
            <main>
                { children }
            </main>
        </>
    )
};

Layout.propTypes = {
    children: PropTypes.node.isRequired,
};

export default Layout
