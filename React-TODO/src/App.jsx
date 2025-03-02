import React, { useState } from 'react';
import Header from './components/Header';
import Tabs from './components/Tabs';
import TodoList from './components/TodoList';
import TodoInput from './components/TodoInput';

const App = () => {
  //Initial demo ko lagi dummy data banako,paxi API ko data le replace garne ho
  // const todos = [
  //   { input: 'Hello! Add your first todo!', complete: true },
  //   { input: 'Get the groceries!', complete: false },
  //   { input: 'Learn how to web design', complete: false },
  //   { input: 'Say hi to gran gran', complete: true },
  // ];

  const [todos, setTodos] = useState([
    { input: 'Hello! Add your first todo!', complete: true },
  ]);

  // newTodo is the text of the new task the user wants to add.
  const handleAddTodo = (newTodo) => {
    // Original array ma direct change garna mildaina, so new array banayera data tesma tanera ani tyo array cahnges garnu parxa
    const newTodoList = [...todos, { input: newTodo, complete: false }];
    setTodos(newTodoList);
  };

  const handleEditTodo = () => {};

  const handleDeleteTodo = () => {};

  return (
    <>
      <Header todos={todos} />
      <Tabs todos={todos} />
      <TodoList todos={todos} />
      <TodoInput handleAddTodo={handleAddTodo} />
    </>
  );
};
export default App;
