import React, { useEffect, useRef, useState } from "react";
import { useWindowResize } from "../../hooks/useWindowResize";

interface TransitionScrollWrapperProps {
    children: React.ReactNode;
    horizontal?: boolean;
    startGap?: boolean;
    scrollDelta?: number;
    cubicBezier?: string;
    transitionDuration?: number;
}

export const TransitionScrollWrapper = ({
    children,
    horizontal = false,
    startGap = true,
    cubicBezier = "ease",
    transitionDuration = 0.3,
    ...props
}: TransitionScrollWrapperProps) => {
    const wrapperRef = useRef<HTMLDivElement>(null);
    const viewContainerRef = useRef<HTMLDivElement>(null);
    const [scrollPosition, setScrollPosition] = useState(0);
    useWindowResize(resize, [wrapperRef, viewContainerRef]);

    useEffect(() => {
        function scroll() {
            if (horizontal) {
                setScrollPosition(window.scrollX);
            } else {
                setScrollPosition(window.scrollY);
            }
        }

        window.addEventListener("scroll", scroll);
        return () => {
            window.removeEventListener("scroll", scroll);
        };
    }, [wrapperRef, viewContainerRef]);

    function resize() {
        if (viewContainerRef.current && wrapperRef.current) {
            if (horizontal) {
                // 不需要重置，因为横向布局scrollWrapper不是fixed，宽度会自动撑起viewContainer
            } else {
                // 需要重置，因为纵向布局scrollWrapper是fixed，脱离文档流
                // 撑起的目的是让浏览器能够出现滚动条
                viewContainerRef.current.parentElement!.style.height =
                    wrapperRef.current!.getBoundingClientRect().height + "px";
            }
        }
    }

    return (
        <div
            id="view_container"
            className={`flex w-full h-full ${
                horizontal
                    ? "justify-start items-center left-0"
                    : "justify-center items-start top-0"
            }`}
            ref={viewContainerRef}
            {...props}
        >
            <div
                id="scroll_wrapper"
                className={`flex flex-nowrap w-full items-center ${
                    horizontal ? "" : "fixed"
                } ${
                    horizontal
                        ? "flex-row overflow-x-auto"
                        : "flex-col overflow-y-auto"
                } ${horizontal ? "space-x-8" : "space-y-8"} ${
                    startGap ? (horizontal ? "pl-4" : "pt-4") : ""
                } shrink-0 
            `}
                style={{
                    msOverflowStyle: "none",
                    scrollbarWidth: "none",
                    transform: `${
                        horizontal
                            ? `translateX(${-scrollPosition}px)`
                            : `translateY(${-scrollPosition}px)`
                    }`,
                    transition: `transform ${transitionDuration}s ${cubicBezier}`,
                }}
                ref={wrapperRef}
            >
                {React.Children.map(children, (child, index) => {
                    return (
                        <div
                            id={`scroll_wrapper__item_${index}`}
                            key={`scroll_wrapper__item_${index}`}
                            className="flex-none w-full"
                        >
                            {child}
                        </div>
                    );
                })}
            </div>
        </div>
    );
};
