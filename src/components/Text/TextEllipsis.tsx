interface TextEllipsisProps {
    maxLine: number
    text?: string
    id?: string
    className?: string
}
const TextEllipsis: React.FC<TextEllipsisProps> = ({ maxLine, text, id, className, ...props }) => {
    return (
        <div
            id={id}
            className={`${className} overflow-hidden text-ellipsis`}
            style={{
                WebkitLineClamp: maxLine,
                WebkitBoxOrient: 'vertical',
                display: '-webkit-box',
            }}
            {...props}
        >
            {text}
        </div>
    );
};

export default TextEllipsis;
