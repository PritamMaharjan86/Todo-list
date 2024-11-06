import React from 'react'

const Input = ({ handleChange, input }) => {



    return (
        <div>
            <div className=''>
                <input
                    className='border-2 border-black mt-10 p-1 rounded-lg font-TNanti '
                    placeholder='What'
                    value={input}
                    onChange={handleChange}
                    type='text'
                />

            </div>
        </div>
    )
}

export default Input;