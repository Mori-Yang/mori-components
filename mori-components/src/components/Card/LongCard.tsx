interface LongCardContent {
    icon?: React.ReactNode
    title?: string
    description?: string
    link?: string
}

interface LongCardProps {
    borderClasses?: string
    children?: React.ReactNode
    content?: LongCardContent
}

export const LongCard = ({
    borderClasses,
    children,
    content,
    ...props
}: LongCardProps) => {
    return (
        <div
            id="card_wrapper"
            className={`${
                borderClasses || ''
            } rounded-lg max-w-[768px] mx-auto cursor-pointer
            shadow-lg bg-zinc-300/20 dark:bg-zinc-800/20 shadow-zinc-900/20 dark:shadow-zinc-400/20 border-1 border-zinc-400/30 dark:border-zinc-900/20
            `}
            {...props}
        >
            <div id="card_wrapper__content" className="relative px-4 pb-4 pt-6">
                {content && (
                    <>
                        <div id="card_wrapper__content__icon">
                            {content.icon}
                        </div>
                        <div
                            id="card_wrapper__content__title"
                            className="mt-4 text-sm font-semibold leading-7 text-zinc-900 dark:text-zinc-100 select-none"
                        >
                            {content.title}
                        </div>
                        <p
                            id="card_wrapper__content__description"
                            className="mt-1 text-sm text-zinc-600 dark:text-zinc-400 leading-6 select-none"
                        >
                            {content.description}
                        </p>
                    </>
                )}
                {children}
            </div>
        </div>
    );
};
