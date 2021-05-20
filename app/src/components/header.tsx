import * as React from 'react';
import * as PropTypes from 'prop-types';

import Nav from '../components/navbar';

const navItem1 = 'Home';
const navItem2 = 'Contact';
const navItem3 = 'Shows';

const Header = ({}) => {
    return (
        <header
            style={ {
                marginBottom: `1.45rem`,
                position: `absolute`,
                width: `100%`
            } }
        >
            <div { ...isIndexPage() } className={ 'index__banner' }>
                <h1 className={ 'index__banner__h1 '}> Sweet Vibrations Radio </h1>
                <Nav navItem1={ navItem1 } navItem2={ navItem2 } navItem3={ navItem3 }/>
            </div>
        </header>
    )
};

Header.propTypes = {
    siteTitle: PropTypes.string,
};

Header.defaultProps = {
    siteTitle: ``,
};

const isIndexPage = () => {
    // const route = window.location.href;
    //
    // if(route !== 'http://localhost:8000/') {
    //     return false;
    // }
};

export default Header;
