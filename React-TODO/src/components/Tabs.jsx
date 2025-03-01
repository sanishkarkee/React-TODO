import React from 'react';

const Tabs = () => {
  const tabs = ['All', 'Open', 'Completed'];

  return (
    <nav>
      {/* seperately 3 ta button banaunu bhanda map garera banauna is best */}
      {tabs.map((tab, tabIndex) => {
        return (
          <button key={tabIndex}>
            <h4>{tab}</h4>
          </button>
        );
      })}
    </nav>
  );
};

export default Tabs;
