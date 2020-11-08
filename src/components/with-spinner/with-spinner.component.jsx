import React from 'react'

import { SpinnerContainer, SpinnerOverlay } from './wtih-spinner.styles';

const WithSipnner = (WrappedComponent) => {
    const Spinner = ({isLoading, ...otherProps}) => {
        return isLoading ? 
            <SpinnerOverlay>
                <SpinnerContainer />
            </SpinnerOverlay>
            : 
            <WrappedComponent {...otherProps} />
    }

    return Spinner;
}

export default WithSipnner;