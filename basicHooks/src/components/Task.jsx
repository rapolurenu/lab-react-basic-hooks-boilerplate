import React, { useState, useEffect, useContext } from 'react';
import { ThemeContext } from '../App';

function TaskComponent() {
  const [count, setCount] = useState(0);
  const [display, setDisplay] = useState(false);
  const darkMode = useContext(ThemeContext);

  useEffect(() => {
    if (display) {
      alert('Content has been clicked');
    }
  }, [display]);

  const themeStyle = {
    backgroundColor: darkMode ? 'gray' : 'black',
    color: darkMode ? 'black' : 'gray',
    padding: '30px',
    width: '500px',
    margin: '20px',
  };

  return (
    <div style={themeStyle}>
      <div>
        {display &&
          '"Toggle" button refers to a button that switches between two states.'}
      </div>
      <button onClick={() => setDisplay(!display)}>Toggle Content</button>
      <div>Count: {count}</div>
      <button onClick={() => setCount(count + 1)}>Like</button>
    </div>
  );
}

export default TaskComponent;
