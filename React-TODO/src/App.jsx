import React from 'react';
import Header from './components/Header';
import Tabs from './components/Tabs';
import TodoList from './components/TodoList';
import TodoInput from './components/TodoInput';

const App = () => {
  return (
    <>
      <Header />
      <Tabs />
      <TodoList />
      <TodoInput />
    </>
  ); 
};
export default App;
