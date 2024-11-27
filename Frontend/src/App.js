import './App.css';
import Input from './components/input';
import Button from './components/button';
import React, { useState } from 'react';

function App() {
  const [input, setInput] = useState('');
  const [todos, setTodos] = useState([]);


  const capitalize = (string) => {
    return string.charAt(0).toUpperCase() + string.slice(1);
  };


  const handleChange = (e) => {
    e.preventDefault();
    setInput(capitalize(e.target.value.trimStart()));
  };

  const handleDelete = (e) => {
    e.target.classList.add("strikethrough");
    console.log("working")
    // const copy = [...reminder];
    // copy.splice(id, 1);
    // setReminder(copy);
  };



  const handleSubmit = (e) => {
    e.preventDefault();

    if (!input.trim()) {
      alert('Please enter a todo item.');
      return;
    }



    const newTodo = {
      id: Date.now(),
      content: input.trim(),
      completed: false,
    };

    setTodos([...todos, newTodo]);
    setInput('');
  };



  return (
    <div className="text-lg text-center font-TNanti flex justify-center items-center ">
      <div className="border-2 border-black p-10 h-full rounded-lg shadow-2xl bg-slate-100">
        <h1 className="text-2xl font-bold mb-4">Todo List</h1>

        <form onSubmit={handleSubmit} className="mb-4">
          <Input
            onChange={handleChange}
            value={input}
            type="text"
            placeholder="Enter a todo item"
          />

          <Button
            label="Post"
            type="submit"
            onClick={handleSubmit}
          />
        </form>

        <h3 className="text-xl font-semibold mb-2">List of Todos:</h3>
        <ul className="list-disc list-inside text-left">
          {todos.map((todo) => (
            <div
            key={todo.id}
              onClick={(e) => handleDelete(e, todo.id)}
            >
            </div>
          ))}
        </ul>

      </div>
    </div>

  );
}

export default App;
