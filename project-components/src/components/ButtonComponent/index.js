import PropTypes from 'prop-types';
import React from 'react';

const ButtonComponent = ({
    label
}) => {
    const {
        displayName
    } = ButtonComponent;

    return (
        <button
            className={displayName}
            type={'button'}
        >
            {label}
        </button>
    );
};

ButtonComponent.displayName = 'ButtonComponent';

ButtonComponent.propTypes = {
    label: PropTypes.string
};

ButtonComponent.defaultProps = {
    label: 'Default'
};

export default ButtonComponent;
