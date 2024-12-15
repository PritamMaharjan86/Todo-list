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

  const handleEdit = (id) => {
    setTodos(todos.map((todo) =>
      todo.id === id ? { ...todo, isEditing: !todo.isEditing } : todo
    ));
  };






  return (
    <div className="font-TNanti text-xl min-h-screen flex items-center justify-center bg-black overflow-hidden relative">

      <div className="absolute inset-0 z-0 bg-black opacity-90"></div>

      <div className="relative w-full max-w-md p-8 bg-black text-white rounded-lg shadow-lg z-10">
        <h1 className="text-4xl font-semibold text-center mb-6 ">Todo List</h1>


        <form onSubmit={handleSubmit} className="flex mb-6">
          <Input
            value={input}
            onChange={handleChange}
            type="text"
            placeholder="Add a new task..."
            className=" flex-grow p-3 border border-gray-700 rounded-md text-white bg-transparent focus:outline-none focus:ring-2 focus:ring-indigo-500"
          />

        </form>


        <ul className="space-y-4">
          {todos.map((todo) => (
            <li
              key={todo.id}
              className={`flex justify-between items-center p-4 border border-gray-700 rounded-md ${todo.completed ? 'bg-gray-800 line-through text-gray-400' : 'bg-black'
                } transition-all`}
            >

              {todo.isEditing ? (
                <input
                  type="text"
                  value={todo.content}
                  onChange={(e) =>
                    setTodos(
                      todos.map((t) =>
                        t.id === todo.id ? { ...t, content: e.target.value } : t
                      )
                    )
                  }
                  className="flex-grow p-2 border border-gray-700 rounded-md text-white bg-transparent focus:outline-none focus:ring-2 focus:ring-indigo-500"
                />
              ) : (
                <span className="text-white">{todo.content}</span>
              )}


              <div className="flex space-x-3">
                <button
                  onClick={() => handleComplete(todo.id)}
                  className="text-green-500 hover:text-green-600"
                  aria-label="Mark as completed"
                >
                  <TiTickOutline />
                </button>
                <button
                  onClick={() => handleEdit(todo.id)}
                  className="text-blue-500 hover:text-blue-600"
                  aria-label={todo.isEditing ? 'Save changes' : 'Edit todo'}
                >
                  <MdEdit />
                </button>
                <button
                  onClick={() => handleDelete(todo.id)}
                  className="text-red-500 hover:text-red-600"
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
