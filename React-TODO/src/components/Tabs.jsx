import React from 'react';

const Tabs = (props) => {
  const { todos } = props;

  //3 Ota button xa so
  const tabs = ['All', 'Open', 'Completed'];

  return (
    <nav className='tab-container'>
      {/* seperately 3 ta button banaunu bhanda map garera banauna is best */}
      {tabs.map((tab, tabIndex) => {
        // parent props ko todos data chai complete xa/xaina ko aadhar ma "<span></span>" bhitra no of task show garna
        const numOfTasks =
          tab === 'All'
            ? todos.length
            : tab === 'Open'
            ? todos.filter((val) => !val.complete).length //va/.complete = gives true/false, yesle complete=false bhayeko value haru new  array ma store garxa
            : todos.filter((val) => val.complete).length;

        return (
          <button key={tabIndex} className='tab-button'>
            <h4>
              {tab} <span>({numOfTasks})</span>
            </h4>
          </button>
        );
      })}
    </nav>
  );
};

export default Tabs;
