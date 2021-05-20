import * as React from 'react';
import * as PropTypes from 'prop-types';

import Nav from '../components/navbar';

const navItem1 = 'Home';
const navItem2 = 'Contact';
const navItem3 = 'Shows';

const Header = ({}) => (
    <header
        style={ {
            marginBottom: `1.45rem`,
            position: `absolute`,
            width: `100%`
        } }
    >
        <Nav navItem1={ navItem1 } navItem2={ navItem2 } navItem3={ navItem3 } />
    </header>
);

Header.propTypes = {
    siteTitle: PropTypes.string,
};

Header.defaultProps = {
    siteTitle: ``,
};

export default Header;
