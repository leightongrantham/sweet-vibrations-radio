import * as React from 'react';

import { Navbar } from 'react-bulma-components';
import { Link } from 'gatsby';

const Nav = ({ navItem1, navItem2, navItem3 }) => {
    return (
        <Navbar>
            <Navbar.Brand>
                <Navbar.Burger />
            </Navbar.Brand>
            <Navbar.Menu>
                <Navbar.Container>
                    <Navbar.Item>
                        <Navbar.Link>
                            <Link to="/">{ navItem1 }</Link>
                        </Navbar.Link>
                        <Navbar.Dropdown>
                            <Navbar.Item href="#">
                                Subitem 1
                            </Navbar.Item>
                        </Navbar.Dropdown>
                    </Navbar.Item>
                    <Navbar.Item>
                        <Link to="/contact/">{ navItem2 }</Link>
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

Nav.propTypes = {};

Nav.defaultProps = {};

export default Nav;
