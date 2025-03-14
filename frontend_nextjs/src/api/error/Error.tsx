import React from 'react';

interface Props {
    errorMessage: string
}
const Error = ({ errorMessage }: Props) => {

    return (
        <>
            {errorMessage &&
                <div className="alert alert-danger text-center" role="alert">
                    {/* This is a danger alert—check it out! */}
                    {errorMessage}
                </div>
            }
        </>
    )
}

export default Error;