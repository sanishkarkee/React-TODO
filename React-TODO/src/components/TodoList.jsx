//Used to disaplt TODO list

import React from 'react';
import TodoCard from './TodoCard';

const TodoList = (props) => {
  const { todos } = props;

  // Tab ko basis ma number of content show garna
  const tab = 'All';
  const filterTodosList =
    tab === 'All'
      ? todos
      : tab === 'Completed'
      ? todos.filter((val) => val.complete)
      : todos.filter((val) => !val.complete);

  return (
    <>
      {/* It is dependent on which tab is opened. Eg: if 'completed' bhayeko 2ta task xa bhane ,
      yaha 2ta task matra show hunu parxa,sabai show hunu hudaina. so <Tab/> ra <todoList/> component communicate garnu parxa */}
      {filterTodosList.map((todo, todoIndex) => {
        return <TodoCard key={todoIndex} todo={todo} />;
      })}
    </>
  );
};

export default TodoList;
