// First, create a new Context object
import React, { createContext, useState } from "react";
import style from "./pro.module.css";
export const ThemeContext = createContext();

// Then, create a provider component that will wrap around the components that need access to the shared data
const ThemeProvider = ({ children }) => {
    const [theme, setTheme] = useState("light");

    const toggleTheme = () => {
        setTheme(theme === "light" ? "dark" : "light");
    };

    // Pass the shared data through the Context Provider
    return (
        <ThemeContext.Provider value={{ theme, toggleTheme }}>
            {children}
        </ThemeContext.Provider>
    );
};
export default ThemeProvider;
// Finally, consume the shared data within the child components using the useContext hook
