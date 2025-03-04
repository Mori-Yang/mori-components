import { LongCard } from "./components/Card/LongCard";
import DeveloperIconWrapper from "./components/DeveloperIconWrapper/DeveloperIconWrapper";
import { useToggleTheme } from "./hooks/useToggleTheme";

const App = () => {
    const { isDark, toggleTheme } = useToggleTheme();
    return (
        <div className="bg-zinc-200 dark:bg-zinc-700 w-full h-screen">
            <button
                type="button"
                onClick={toggleTheme}
                className="rounded-full bg-amber-200 pl-4 pr-4 cursor-pointer"
            >
                {isDark ? "dark" : "light"}
            </button>
            <LongCard
                content={{
                    icon: <DeveloperIconWrapper name="TailwindCSS" />,
                    title: "Title",
                    description: "lorem",
                }}
            />
        </div>
    );
};

export default App;
