import * as React from 'react';

import { Navbar } from 'react-bulma-components';
import { Link } from 'gatsby';

const NavigationBar = ({ navItem1, navItem2, navItem3 }) => {
    return (
        <Navbar className={'animate__animated animate__fadeInDown'}>
            <Navbar.Brand>
                <Navbar.Burger />
            </Navbar.Brand>
            <Navbar.Menu>
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
                    <Navbar.Item>
                        <Link to="/shows/">{ navItem3 }</Link>
                    </Navbar.Item>
                </Navbar.Container>
            </Navbar.Menu>
        </Navbar>
    )
};

NavigationBar.propTypes = {};

NavigationBar.defaultProps = {};

export default NavigationBar;
