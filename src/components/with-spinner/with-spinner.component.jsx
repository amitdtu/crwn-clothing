import React from 'react'

import { SpinnerContainer, SpinnerOverlay } from './wtih-spinner.styles';

const WithSipnner = (WrappedComponent) => {
    const Spinner = ({isFetching, ...otherProps}) => {
        return isFetching ? 
            <SpinnerOverlay>
                <SpinnerContainer />
            </SpinnerOverlay>
            : 
            <WrappedComponent {...otherProps} />
    }

    return Spinner;
}

export default WithSipnner;