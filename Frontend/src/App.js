import './App.css';
import Input from './components/input';
import Button from './components/button';
import React, { useState } from 'react';

function App() {

  const [input, setInput] = useState('');


  const handleChange = (e) => {
    e.preventDefault();
    setInput(e.target.value.trimStart().toUpperCase(0))

  }


  const handleSubmit = (e) => {
    setInput('');
    console.log('working', input)

  }



  return (
    <div className="text-lg text-center mx-auto w-1/2max-w-md p-10 font-TNanti ">
      <div className='border-2 border-black p-5 w-96 h-full rounded-lg shadow-2xl bg-slate-100'>
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
