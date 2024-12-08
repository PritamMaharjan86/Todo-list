import React from 'react'

const Input = ({ onChange, value, type }) => {



    return (
        <div>
            <div className=''>
                <input
                    className='border-2 border-black mt-10 p-1 rounded-lg font-TNanti '
                    placeholder='Todo'
                    value={value}
                    onChange={onChange}
                    type={type}
                />

            </div>
        </div>
    )
}

export default Input;