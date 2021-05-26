import * as React from 'react';

import { Navbar } from 'react-bulma-components';
import { Link } from 'gatsby';
import { useRef } from 'react';

const NavigationBar = ({ navItem1, navItem2, navItem3 }) => {
    const [ isActive, setIsActive ] = React.useState(false);

    return (
        <Navbar className={'animate__animated animate__fadeInDown'}>
            <Navbar.Brand>
                <Navbar.Burger
                    className={`navbar-burger burger ${ isActive ? 'is-active' : ''}`}
                    onClick={ () => { setIsActive(!isActive) }}
                />
            </Navbar.Brand>
            <Navbar.Menu className={`navbar-menu ${isActive ? 'is-active' : ''}`}>
                <Navbar.Container>
                    <Navbar.Item>
                        <Link to="/contact/">{ navItem2 }</Link>
                    </Navbar.Item>
                </Navbar.Container>
                <Navbar.Container>
                    <Navbar.Item>
                        <Link to="/">{ navItem1 }</Link>
                    </Navbar.Item>
                </Navbar.Container>
                <Navbar.Container align="right">
                    <Navbar.Item onClick={ () => ScrollDemo } >
                        <Link to="/">{ navItem3 }</Link>
                    </Navbar.Item>
                </Navbar.Container>
            </Navbar.Menu>
        </Navbar>
    )
};

NavigationBar.propTypes = {};

NavigationBar.defaultProps = {};

export default NavigationBar;

const ScrollDemo = () => {
    const myRef = useRef(null);
    const executeScroll = () => myRef.current.scrollIntoView();

    return executeScroll();
};

