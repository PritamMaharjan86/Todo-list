import './App.css';
import Input from './components/input';
import Button from './components/button';
import React, { useState } from 'react';
import { MdDeleteForever } from "react-icons/md";
import { TiTickOutline } from "react-icons/ti";
import { MdEdit } from "react-icons/md";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

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

  const handleDelete = (id) => {
    setTodos(todos.filter((todo) => todo.id !== id));
    toast.warning('Todo deleted!');
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!input.trim()) {
      toast.error('Please enter a todo item.');
      return;
    }

    const newTodo = {
      id: Date.now(),
      content: input.trim(),
      completed: false,
    };

    setTodos([...todos, newTodo]);
    setInput('');
    toast.success('Todo added!');
  };

  const handleComplete = (id) => {
    setTodos(todos.map((todo) =>
      todo.id === id ? { ...todo, completed: !todo.completed } : todo
    ));
    toast.success('Todo updated!');
  };

  const handleEdit = () => {

  }



  return (
    <div className="text-lg text-center font-TNanti flex justify-center items-center ">
      <div className="border-2 border-black p-10 h-full rounded-lg shadow-2xl bg-slate-100">
        <h1 className="text-2xl font-bold mb-4">Todo List</h1>

        <form onSubmit={handleSubmit} className="mb-4">
          <Input
            value={input}
            onChange={handleChange}
            type="text"
          />

          <Button
            label="Post"
            type="submit"
            onClick={handleSubmit}
          />
        </form>

        <h3 className="text-xl font-semibold mb-2">Todos</h3>
        <ul className="list-disc list-inside text-left">
          {todos.map((todo) => (
            <li
              key={todo.id}
              className={`flex justify-between items-center p-2 border rounded-lg mb-2 ${todo.completed ? 'bg-green-200 line-through' : 'bg-white'
                }`}
            >
              <span>{todo.content}</span>
              <div className="flex space-x-2 ">
                <button
                  onClick={() => handleComplete(todo.id)}
                  className="text-green-500 hover:text-green-700"
                  aria-label="Mark as completed"
                >
                  <TiTickOutline />
                </button>

                <button
                  onClick={() => handleEdit(todo.id)}
                  className="text-blue-500 hover:text-blue-700"
                  aria-label="Mark as completed"
                >
                  <MdEdit />
                </button>

                <button
                  onClick={() => handleDelete(todo.id)}
                  className="text-red-500 hover:text-red-700"
                  aria-label="Delete todo"
                >
                  <MdDeleteForever />
                </button>
              </div>
            </li>
          ))}
        </ul>

        <ToastContainer />
      </div>
    </div>
  );
}

export default App;
