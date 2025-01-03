/* This code sets up a way to manage a "theme" (like light or dark mode) for an application*/

import React, { createContext, useContext, useEffect, useState } from 'react';

const ThemeContext = createContext();

export const useTheme = () => useContext(ThemeContext); //useTheme can be used in any component like Hero.jsx

export const ThemeProvider = ({ children }) => { //So that this apply everywhere in our App we ThemeProvider
  const [theme, setTheme] = useState(           //and put it in our main.jsx component by wrapping the App component 
    () => localStorage.getItem('theme') || 'light'// inside it
  );

  useEffect(() => {
    document.body.setAttribute('data-theme', theme);
    localStorage.setItem('theme', theme);
  }, [theme]);

  const toggleTheme = () => {
    setTheme((prevTheme) => (prevTheme === 'light' ? 'dark' : 'light'));
  }; 

  return (
    <ThemeContext.Provider value={{ theme, toggleTheme }}>
      {children}
    </ThemeContext.Provider>
  );
};
