import * as React from 'react';
import { Icon } from 'react-bulma-components';

const Socials = () => {
    return (
        <Icon
            style={ {
                margin: `2rem auto`,
                position: `fixed`,
                bottom: 0,
                textAlign: `center`,
                width: `100%`,
            } }
        >
            <a target="_blank" href={ "https://www.facebook.com/katbrownsugar/" }>
                <i className="fab fa-facebook"/>
            </a>
            <a target="_blank" href={ "https://www.instagram.com/katbrownsugar/?hl=en" }>
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