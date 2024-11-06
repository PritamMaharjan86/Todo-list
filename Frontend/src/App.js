import './App.css';
import Input from './components/input';
import Button from './components/button';
import React, {useState} from 'react';

function App() {

  const [input, setInput] = useState('');


  const handleChange = (e) => {
    setInput(e.target.value)

  }


  const handleSubmit = (e) => {
    console.log(input)

  }


  return (
    <div className="text-lg text-center mx-auto w-1/4 p-10 font-TNanti">
      <div className='border-2 border-black p-5 w-96 h-full rounded-lg shadow-2xl bg-slate-100'>
        <h1>Todo List</h1>

        <Input
          handleChange={handleChange}
          value={input}
          
        />

        <Button
          label="Post"
          onClick={handleSubmit}

        />

        <h3>lists</h3>
        {input}

      </div>
    </div>
  );
}

export default App;
