import './App.css';
import Input from './components/input';
import Button from './components/button';
import React, { useState } from 'react';

function App() {

  const [input, setInput] = useState('');

  function capitalize(string) {
    return string.charAt(0).toUpperCase() + string.slice(1);

  }


  const handleChange = (e) => {
    e.preventDefault();
    setInput(capitalize(e.target.value.trimStart()))

  }


  const handleSubmit = async(e) => {
    setInput('');

    try {
      const url = 'http://localhost:3001/Todo/list';
      const response = await fetch(url,{
        method: "POST",
        headers:{
          "Content-Type": "application/json"
        }
      })

      const result = await response.json();
      
      console.log("result is ", result)



    } catch (error){
      console.log('Error', error)

    }


  }



  return (
    <div className="text-lg text-center font-TNanti flex justify-center items-center ">
      <div className='border-2 border-black p-10 h-full rounded-lg shadow-2xl bg-slate-100'>
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
