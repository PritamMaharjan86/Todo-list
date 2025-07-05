import React from 'react'

const Input = ({ onChange, value, type, placeholder, className }) => {



    return (
        <>
                <input
                    className={className}
                    placeholder={placeholder}
                    value={value}
                    onChange={onChange}
                    type={type}
                />

        </>
    )
}

export default Input;