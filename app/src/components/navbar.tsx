import * as React from 'react';

import { Navbar } from 'react-bulma-components';
import { Link } from 'gatsby';
import ScrollIntoView from 'react-scroll-into-view';

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
                        <Link className={'hvr-grow'} to="/contact/">{ navItem2 }</Link>
                    </Navbar.Item>
                </Navbar.Container>
                <Navbar.Container>
                    <Navbar.Item>
                        <Link className={'hvr-grow'} to="/">{ navItem1 }</Link>
                    </Navbar.Item>
                </Navbar.Container>
                <Navbar.Container align="right">
                    <ScrollIntoView selector="#footer">
                        <Navbar.Item>
                            <Link className={'hvr-grow'} to="/">{ navItem3 }</Link>
                        </Navbar.Item>
                    </ScrollIntoView>
                </Navbar.Container>
            </Navbar.Menu>
        </Navbar>
    )
};

NavigationBar.propTypes = {};

NavigationBar.defaultProps = {};

export default NavigationBar;