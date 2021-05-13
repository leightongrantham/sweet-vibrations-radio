import * as React from 'react';
import * as PropTypes from 'prop-types';

const TwoSectionLayout = ({ titleHeading, bodyText }) => (
    <div className={ 'two-page-layout--container' }
         style={ { display: `flex`, height: `100vh` } }>
        <div className={ 'two-page-layout--left'}
             style={ {
                 background: `url("https://picsum.photos/1080/750") no-repeat`,
                 backgroundSize: `cover`,
                 width: `50%`,
                 height: `100%`
             } }>
            <h1></h1>
        </div>
        <div className={ 'two-page-layout--right'}
             style={ {
                 display: `flex`,
                 justifyContent: `center`,
                 width: `50%`,
                 marginTop: `250px`
             } }>
            <h1 style={{ position: 'absolute' }}> { titleHeading }</h1>
            <p style={{
                position: 'absolute',
                marginTop: `100px` }}> { bodyText }
            </p>
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
