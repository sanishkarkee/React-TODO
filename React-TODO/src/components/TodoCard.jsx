// displays all the todos in our list

import React from 'react';

const TodoCard = (props) => {
  // destrucutre ko "todos" ma already tabs anusar ko data filter bhayera aaisakeko xa
  const { todo } = props;
  console.log(todo);

  return (
    <>
      <div className='card todo-item'>
        <p>{todo.input}</p>
        <div className='todo-buttons'>
          <button disabled={todo.complete}>
            {/* (todo.complete) is a boolean value i.e returns true or false */}
            <h1>Done</h1>
          </button>
          <button>
            <h1>Delete</h1>
          </button>
        </div>
      </div>
    </>
  );
};

export default TodoCard;
