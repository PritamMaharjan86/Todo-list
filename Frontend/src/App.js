import './App.css';
import Input from './components/input';
import Button from './components/button';
import React, { useState } from 'react';

function App() {

  const [input, setInput] = useState('');

  function capitalize(string) 
  {
    return string.charAt(0).toUpperCase() + string.slice(1);

  }


  const handleChange = (e) => {
    e.preventDefault();
    setInput(capitalize(e.target.value.trimStart()))

  }


  const handleSubmit = (e) => {
    setInput('');
    console.log('working', input)

  }



  return (
    <div className="text-lg text-center font-TNanti flex justify-center items-center">
      <div className='border-2 border-black p-8 w-1/6 h-full rounded-lg shadow-2xl bg-slate-100'>
        <h1>Todo List</h1>

        <Input
          onChange={handleChange}
          value={input}
          type='text'

        />

        <Button
          label="Post"
          onClick={handleSubmit}

        />

        <h3>lists</h3>
      


      </div>
    </div>
  );
}

export default App;
