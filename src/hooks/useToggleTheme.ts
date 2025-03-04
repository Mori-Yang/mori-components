import { useEffect, useState } from "react";

export const useToggleTheme = (useLocalStorage: boolean = true) => {
    let theme: string | null = "light";
    if (useLocalStorage) {
        theme = localStorage.getItem("theme");
    }

    const [isDark, setIsDark] = useState(theme === "dark");

    const toggleTheme = () => {
        if (useLocalStorage) {
            localStorage.setItem("theme", isDark ? "light" : "dark");
        }
        setIsDark(!isDark);
    };

    useEffect(() => {
        document.documentElement.classList.toggle("dark", isDark);
    }, [isDark]);

    return { isDark, toggleTheme };
};
