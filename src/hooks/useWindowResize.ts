import { useEffect } from "react";

export const useWindowResize = (resizeFn: () => void, deps: unknown[]) => {
    useEffect(() => {
        window.addEventListener("resize", resizeFn);
        window.addEventListener("load", resizeFn);
        return () => {
            window.removeEventListener("resize", resizeFn);
            window.removeEventListener("load", resizeFn);
        };
    }, deps);
};
