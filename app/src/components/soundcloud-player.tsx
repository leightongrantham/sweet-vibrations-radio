import * as React from 'react';

const SoundcloudPlayer = () => (
    <div style={ {
        display: `flex`,
        position: `relative`,
        top: `110px`,
        alignItems: `center`,
        justifyContent: `center`,
        width: `100%`,
        height: `100vh`
    } }>
        <iframe style={ { position: `absolute`, width: `65%`, height: `50%` } }
                width="434"
                height="500"
                scrolling="no"
                frameBorder="no"
                src="https://w.soundcloud.com/player/?visual=false&amp;url=https%3A%2F%2Fapi.soundcloud.com%2Fplaylists%2F1058761825&amp;show_artwork=true&amp;auto_play=false&amp;show_playcount=true&amp;show_comments=true&amp;color=%23ff5500&amp;height=613&amp;width=434"
                className="embed-code-player__frame">
        </iframe>
    </div>
);

export default SoundcloudPlayer;