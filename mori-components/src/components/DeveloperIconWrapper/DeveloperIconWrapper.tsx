import DeveloperIcon from 'developer-icons';
import React from 'react';

interface DeveloperIconWrapperProps {
    size?: number
    classNames?: string
    name: keyof typeof DeveloperIcon
}

const DeveloperIconWrapper: React.FC<DeveloperIconWrapperProps> = ({
    size = 24,
    name,
    classNames,
    ...props
}) => {
    const Icon = DeveloperIcon[name];
    return (
        <Icon size={size} {...props} className={`${classNames} rounded-full`} />
    );
};

export default DeveloperIconWrapper;
