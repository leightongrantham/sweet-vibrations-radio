import * as React from 'react';
import { Icon } from 'react-bulma-components';

const Socials = () => {
    return (
        <Icon
            className={'animate__animated animate__fadeInUp'}
            style={ {
                margin: `2rem auto`,
                position: `fixed`,
                bottom: 0,
                textAlign: `center`,
                width: `100%`,
                fontSize: `1rem`,
            } }
        >
            <a target="_blank" href={ "https://www.facebook.com/katbrownsugar/" }>
                <i className="fab fa-facebook"/>
            </a>
            <a target="_blank" href={ "https://www.instagram.com/sweetvibrationsradio/" }>
                <i className="fab fa-instagram"/>
            </a>
            <a target="_blank" href={ "https://twitter.com/katbrownsugar?lang=en" }>
                <i className="fab fa-twitter"/>
            </a>
            <a target="_blank" href={ "https://soundcloud.com/katbrownsugar" }>
                <i className="fab fa-soundcloud"/>
            </a>
            <a target="_blank" href={ "https://open.spotify.com/artist/7tLCeRXlvjRK6wlYvNceK0?si=ednNrc05QBKURZuqNc1J4Q&nd=1" }>
                <i className="fab fa-spotify"/>
            </a>
        </Icon>
    )
};


Socials.propTypes = {};

Socials.defaultProps = {};

export default Socials;