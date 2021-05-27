import * as React from 'react';
import * as PropTypes from 'prop-types';

import NavigationBar from '../components/navbar';

const navItem1 = 'Home';
const navItem2 = 'Contact';
const navItem3 = 'Shows';

const Header = () => {
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
                <div className={ 'index__banner animate__animated animate__fadeIn' }>
                    <h1 className={ 'index__banner__h1 animate__animated animate__pulse' }>
                        Sweet Vibrations Radio
                    </h1>
                    <p style={ { fontSize: `2rem`, top: `40vh` } }
                       className={ 'index__banner__h1 index__banner__p animate__animated animate__pulse ' }>
                        Playing the best in Alt Rnb | Neo-soul | Hip-hop | Beats
                    </p>
                    <div className={ 'nav__container' }>
                        <NavigationBar navItem1={ navItem1 } navItem2={ navItem2 } navItem3={ navItem3 }/>
                    </div>
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
    // return url !== 'http://localhost:8000/contact/';

    return url !== 'https://sweetvibrationsradio.netlify.app/contact/';
};

export default Header;
