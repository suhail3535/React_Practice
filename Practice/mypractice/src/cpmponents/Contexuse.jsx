import React, { useContext } from "react";
import { ThemeContext } from "./Contex";

const Header = () => {
    const { theme, toggleTheme } = useContext(ThemeContext);

    return (
        <div
            style={{
                backgroundColor:theme === "dark" ? "black" : "white",
                color: theme === "dark" ? "white" : "black"
            }}>
            <h1>My App:{theme}</h1>
            <button onClick={toggleTheme}>Toggle Theme</button>
        </div>
    );
};
export default Header;