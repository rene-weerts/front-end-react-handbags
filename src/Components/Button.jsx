import React from 'react';


function Button({buttonText, disabled}) {
    return (
        <>

            <button
                type="button"
                onClick={() => console.log(buttonText)}
                disabled={disabled === "true"}
            >{buttonText}</button>


        </>
    );
}

export default Button;









