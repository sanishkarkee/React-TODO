// Where we input the information and button that adds

import React, { useState } from 'react';

const TodoInput = (props) => {
  const { handleAddTodo } = props;
  const [inputValue, setInputValue] = useState('');
  console.log(inputValue);

  return (
    <>
      <div className='input-container'>
        <input
          placeholder='Add task'
          value={inputValue}
          onChange={(e) => {
            setInputValue(e.target.value);
          }}
        />
        <button
          onClick={() => {
            //check if the input value is empty, empty xa bhane yo code "setInputValue(e.target.value);" execute nai hudaina
            //" !inputValue " ra "e.target.value === '' " lekhnu same ho
            if (!inputValue) {
              return;
            }
            handleAddTodo(inputValue);
            setInputValue('');
          }}
        >
          <i className='fa-solid fa-plus'></i>
        </button>
      </div>
    </>
  );
};

export default TodoInput;
