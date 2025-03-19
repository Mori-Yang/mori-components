import DeveloperIcon from 'developer-icons';
import { ReactNode, useRef } from 'react';
import { useHoverRotate } from '../../hooks/useHoverRotate';
import DeveloperIconWrapper from '../DeveloperIconWrapper/DeveloperIconWrapper';
import TextEllipsis from '../Text/TextEllipsis';

interface BlogCardProps {
    previewSrc?: string
    tagIcons?: (keyof typeof DeveloperIcon)[]
    tagList?: string[]
    toBlog?: (e: React.MouseEvent) => void
    title?: string | ReactNode
    decs?: string
    time?: string | ReactNode
}
/**
 * 预览图比例4：3。
 */
export const BlogCard: React.FC<BlogCardProps> = ({
    previewSrc,
    toBlog = () => {},
    tagIcons,
    tagList,
    title,
    decs,
    time,
}) => {
    const previewRef = useRef<HTMLDivElement>(null);
    useHoverRotate(previewRef);

    return (
        <div
            id="blog_card_wrapper"
            className="relative max-w-[768px] h-[360px] mx-auto
            shadow-lg bg-zinc-300/20 dark:bg-zinc-800/20 shadow-zinc-900/20 dark:shadow-zinc-400/20 border-1 border-zinc-400/30 dark:border-zinc-900/20 p-8 rounded-2xl
            max-md:h-[560px] max-md:mt-[40px] max-md:max-w-[640px]"
        >
            <div
                ref={previewRef}
                id="blog_card_wrapper__img"
                className="w-[400px] aspect-4/3 shrink-0
                bg-zinc-300/20 dark:bg-zinc-800/20 shadow-lg shadow-zinc-900/20 dark:shadow-zinc-400/20 rounded-2xl overflow-hidden
                absolute left-[-10%]
                max-md:top-[-10%] max-md:left-1/2 max-md:-translate-x-1/2 max-md:w-[340px]"
            >
                {previewSrc
                    ? (
                        <img
                            src={previewSrc}
                            className="object-cover"
                            alt="blog preview"
                        />
                    )
                    : (
                        <div
                            id="blog_card_wrapper__img__placeholder"
                            className="bg-zinc-300 h-full w-full flex justify-center items-center"
                        >
                            Not Found
                        </div>
                    )}
            </div>
            <div
                id="blog_card_wrapper__content"
                className="absolute right-8 w-[340px] max-md:bottom-8 max-md:left-1/2 max-md:-translate-x-1/2"
            >
                <span className="text-zinc-500 font-medium">{time}</span>
                <p className="text-4xl font-semibold underline underline-offset-8 mb-8 mt-4">
                    {title}
                </p>
                <TextEllipsis
                    id="blog_card_wrapper__content__desc"
                    className="font-light h-[96px]"
                    maxLine={4}
                    text={decs}
                />
                <div
                    id="blog_card_wrapper__content__tags"
                    className="flex space-x-2 absolute right-4"
                >
                    {tagIcons?.map((tag, index) => {
                        return (
                            <span key={index}>
                                <DeveloperIconWrapper name={tag} />
                            </span>
                        );
                    })}
                    {tagList?.map((tag, index) => {
                        return (
                            <span key={index} className="text-xs">
                                {tag}
                            </span>
                        );
                    })}
                </div>
                <div
                    id="blog_card_wrapper__content__read_me"
                    onClick={toBlog}
                    className="mt-8 cursor-pointer hover:bg-green-300 bg-green-400 dark:bg-green-500 inline-block rounded-full px-4 py-2"
                >
                    Read Me
                </div>
            </div>
        </div>
    );
};
