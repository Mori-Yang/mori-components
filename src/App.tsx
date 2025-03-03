import ProjectCard from "./components/ProjectCard";
import ScrollWrapper from "./components/ScrollWrapper";

const App = () => {
    return (
        <>
            <ScrollWrapper>
                <ProjectCard />
                <ProjectCard />
                <ProjectCard />
                <ProjectCard />
                <ProjectCard />
                <ProjectCard />
            </ScrollWrapper>
        </>
    );
};

export default App;
