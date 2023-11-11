import { useState, useMemo } from "react";
import { ReactFC } from "app/interfaces";
import { LOCAL_STORAGE_THEME_KEY, Theme, ThemeContext } from "../lib/ThemeContext";

export const ThemeProvider: ReactFC = ({ children }) => {
    const defaultTheme = localStorage.getItem(LOCAL_STORAGE_THEME_KEY) as Theme ?? Theme.LIGHT;
    const [theme, setTheme] = useState(defaultTheme);

    const defaultProps = useMemo(() => ({
        theme,
        setTheme,
    }), [theme, setTheme])

    return (
        <ThemeContext.Provider value={defaultProps}>
            {children}
        </ThemeContext.Provider>
    )
}