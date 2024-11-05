import React from 'react'

const Button = ({ label }) => {

    const handleButton = () => {
        console.log('Button is working');
    }


    return (
        <div>
            <button
                className='border-2 border-black rounded-md p-1 mt-5 text-sm '
                onClick={handleButton}

            >{label}</button>

        </div>
    )
}

export default Button
