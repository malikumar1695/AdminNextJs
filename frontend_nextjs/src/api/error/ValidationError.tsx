import React from 'react';

interface Props {
    errorMessage?: string
}
const ValidationError = ({ errorMessage }: Props) => {

    return (
        <>
            {errorMessage &&
                <span className="text-danger">{errorMessage}</span>
            }
        </>
    )
}

export default ValidationError;