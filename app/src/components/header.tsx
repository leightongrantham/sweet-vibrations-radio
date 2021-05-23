import * as React from 'react';
import * as PropTypes from 'prop-types';

import NavigationBar from '../components/navbar';

const navItem1 = 'Home';
const navItem2 = 'Contact';
const navItem3 = 'Shows';

const Header = ({}) => {
    if (isIndexPage() === false) {
        return (
            <header
                style={ {
                    marginBottom: `1.45rem`,
                    position: `absolute`,
                    width: `100%`
                } }
            >
                <NavigationBar navItem1={ navItem1 } navItem2={ navItem2 } navItem3={ navItem3 }/>
            </header>
        )
    } else {
        return (
            <header
                style={ {
                    marginBottom: `1.45rem`,
                    position: `absolute`,
                    width: `100%`
                } }
            >
                <div className={ 'index__banner' }>
                    <h1 className={ 'index__banner__h1 ' }> Sweet Vibrations Radio </h1>
                    <NavigationBar navItem1={ navItem1 } navItem2={ navItem2 } navItem3={ navItem3 }/>
                </div>
            </header>
        )
    }
};

Header.propTypes = {
    siteTitle: PropTypes.string,
};

Header.defaultProps = {
    siteTitle: ``,
};

const isIndexPage = () => {
    const url = typeof window !== 'undefined' ? window.location.href : '';

    // Todo change to deployment urls
    return url !== 'http://localhost:8000/contact/';
};

export default Header;
