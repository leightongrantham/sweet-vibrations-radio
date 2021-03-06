module.exports = {
    siteMetadata: {
        title: `Sweet Vibrations Radio`,
        description: `Kick off your next, great Gatsby project with this default starter. This barebones starter ships with the main Gatsby configuration files you might need.`,
        author: `@gatsbyjs`,
    },
    plugins: [
        `gatsby-plugin-react-helmet`,
        `gatsby-plugin-image`,
        {
            resolve: `gatsby-source-filesystem`,
            options: {
                name: `images`,
                path: `${ __dirname }/src/images`,
            },
        },
        `gatsby-transformer-sharp`,
        `gatsby-plugin-sharp`,
        {
            resolve: `gatsby-plugin-manifest`,
            options: {
                name: `gatsby-starter-default`,
                short_name: `starter`,
                start_url: `/`,
                background_color: `#663399`,
                theme_color: `#663399`,
                display: `minimal-ui`,
                icon: `src/images/thumbnail_sweet_vibe_header_da0347adb1.jpg`, // This path is relative to the root of the site.
            },
        },
        `gatsby-plugin-gatsby-cloud`,
        // {
        //     resolve: "gatsby-source-strapi",
        //     options: {
        //         apiURL: "http://localhost:1337",
        //         contentTypes: [
        //             "initial",
        //             "header"
        //         ],
        //         queryLimit: 1000,
        //     },
        // },
        {
            resolve: `gatsby-plugin-emotion`,
            options: {
                // Accepts the following options, all of which are defined by `@emotion/babel-plugin` plugin.
                // The values for each key in this example are the defaults the plugin uses.
                sourceMap: true,
                autoLabel: "dev-only",
                labelFormat: `[local]`,
                cssPropOptimization: true,
            },
        },
        // this (optional) plugin enables Progressive Web App + Offline functionality
        // To learn more, visit: https://gatsby.dev/offline
        // `gatsby-plugin-offline`,
    ],
};
