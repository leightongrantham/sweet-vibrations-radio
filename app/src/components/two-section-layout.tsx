import * as React from 'react';
import * as PropTypes from 'prop-types';
import Socials from './socials';

const TwoSectionLayout = ({titleHeading, bodyText}) => (
    <div className={ 'two-page-layout--container animate__animated animate__fadeIn' }
         style={ {display: `flex`, height: `100vh`} }>
        <div className={ 'two-page-layout--left' }
             style={ {
                 backgroundSize: `cover`,
                 width: `50%`,
                 height: `100%`
             } }>
        </div>
        <div className={ 'two-page-layout--right' }
             style={ {
                 display: `flex`,
                 justifyContent: `center`,
                 alignItems: `center`,
                 width: `50%`,
                 letterSpacing: `1px`,
                 fontSize: `1.5rem`
             } }>
            <h1 style={ { position: 'absolute' } }> { titleHeading }</h1>
            <p style={ {
                position: 'absolute',
                marginTop: `140px`,
                textAlign: `center`,
                letterSpacing: `2px`,
                fontSize: `2vw;`
            } }> { bodyText }
            </p>

            <Socials/>
        </div>
    </div>
);

TwoSectionLayout.propTypes = {
    titleHeading: PropTypes.string,
    bodyText: PropTypes.string,
};

TwoSectionLayout.defaultProps = {
    titleHeading: ``,
    bodyText: ``,
};

export default TwoSectionLayout;
