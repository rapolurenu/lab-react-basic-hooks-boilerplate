import React, { useState } from 'react';
import './App.css';
import ThemeDisplay from './components/UseContext';
import TaskComponent from './components/Task';

export const ThemeContext = React.createContext();

function App() {
  const [darkMode, setDarkMode] = useState(true);

  const toggleTheme = () => {
    setDarkMode((prevMode) => !prevMode);
  };

  return (
    <ThemeContext.Provider value={darkMode}>
      <button onClick={toggleTheme}>Toggle Theme</button>
      <ThemeDisplay />
      <TaskComponent />
    </ThemeContext.Provider>
  );
}

export default App;
