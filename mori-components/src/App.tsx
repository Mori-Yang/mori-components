import { BlogCard } from './components/Card/BlogCard';
import { LongCard } from './components/Card/LongCard';
import DeveloperIconWrapper from './components/DeveloperIconWrapper/DeveloperIconWrapper';
import { TransitionScrollWrapper } from './components/ScrollWrapper/TransitionScrollWrapper';
import { useToggleTheme } from './hooks/useToggleTheme';

const App = () => {
    const { isDark, toggleTheme } = useToggleTheme();
    return (
        <div className="bg-teal-400 w-full">
            <TransitionScrollWrapper>
                <button
                    type="button"
                    onClick={toggleTheme}
                    className="rounded-full bg-amber-200 pl-4 pr-4 cursor-pointer"
                >
                    {isDark ? 'dark' : 'light'}
                </button>
                <LongCard
                    content={{
                        icon: <DeveloperIconWrapper name="TailwindCSS" />,
                        title: 'Title',
                        description: 'lorem',
                    }}
                />
                <BlogCard
                    previewSrc="https://picsum.photos/800/600"
                    tagIcons={['Zod', 'React']}
                />
                <BlogCard tagList={['前端', '后端']} />
            </TransitionScrollWrapper>
        </div>
    );
};

export default App;
