import React from 'react'

const Button = () => {

    const handleButton =() =>
    {
        console.log('Button is working');
    }


  return (
    <div>
        <button
        className='border-2 border-black rounded-md p-1 mt-5 text-sm '
        onClick={handleButton}
        >Push</button>
      
    </div>
  )
}

export default Button
