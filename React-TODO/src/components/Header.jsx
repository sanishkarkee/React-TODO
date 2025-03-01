import React from 'react';
import TodoCard from './TodoCard';

const Header = (props) => {
  // destructure gareko - data hamro object xa array bhitra so tala object destructuring gareko ho
  const { todos } = props;
  const todosLength = todos.length;

  // 1 ta matra task xa bhane tala message ma "task" dekhauna, 1 or more xa bhane "tasks" dekhauna
  const isTaskPlural = todos.length != 1;
  const taskOrTasks = isTaskPlural ? 'tasks' : 'task';

  return (
    <>
      <header>
        <h1 className='text-gradient'>
          You have {todosLength} open {taskOrTasks}.
        </h1>
      </header>
    </>
  );
};

export default Header;
