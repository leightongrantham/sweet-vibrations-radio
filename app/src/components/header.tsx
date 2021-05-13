import * as React from 'react';
import * as PropTypes from 'prop-types';
import { Link } from 'gatsby';

const Header = ({ siteTitle }) => (
    <header
        style={ {
            background: `white`,
            marginBottom: `1.45rem`,
        } }
    >
        {/*<div*/}
        {/*    style={ {*/}
        {/*        margin: `0 auto`,*/}
        {/*        maxWidth: 960,*/}
        {/*        padding: `1.45rem 1.0875rem`,*/}
        {/*    } }*/}
        {/*>*/}
        {/*    <h1 style={ { margin: 0 } }>*/}
        {/*        <Link*/}
        {/*            to="/"*/}
        {/*            style={ {*/}
        {/*                color: `black`,*/}
        {/*                textDecoration: `none`,*/}
        {/*            } }*/}
        {/*        >*/}
        {/*        </Link>*/}
        {/*    </h1>*/}
        {/*</div>*/}
    </header>
);

Header.propTypes = {
    siteTitle: PropTypes.string,
};

Header.defaultProps = {
    siteTitle: ``,
};

export default Header;
