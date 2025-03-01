// Where we input the information and button that adds

import React from 'react';

const TodoInput = () => {
  return (
    <>
      <div className='input-container'>
        <input type='text' placeholder='Add task' />
        <button>
          <i className='fa-solid fa-plus'></i>
        </button>
      </div>
    </>
  );
};

export default TodoInput;
