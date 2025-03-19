import { useEffect } from 'react';

export const useHoverRotate = <T extends HTMLElement>(
    targetRef: React.RefObject<T | null>,
) => {
    useEffect(() => {
        const target = targetRef && targetRef.current;
        if (target) {
            const handleMouseMove = (e: MouseEvent) => {
                const rect = target.getBoundingClientRect();
                const centerX = rect.left + rect.width / 2;
                const centerY = rect.top + rect.height / 2;

                const offsetX = (e.clientX - centerX) / rect.width;
                const offsetY = (e.clientY - centerY) / rect.height;

                const rotateX = offsetY * 30; // 最大旋转角度30度
                const rotateY = -offsetX * 30;

                target.style.transform = `perspective(1000px) rotateX(${rotateX}deg) rotateY(${rotateY}deg)`;
            };

            const handleMouseLeave = () => {
                target.style.transform
                    = 'perspective(1000px) rotateX(0deg) rotateY(0deg)';
            };

            target.addEventListener('mousemove', handleMouseMove);
            target.addEventListener('mouseleave', handleMouseLeave);

            return () => {
                target.removeEventListener('mousemove', handleMouseMove);
                target.removeEventListener('mouseleave', handleMouseLeave);
            };
        }
    }, [targetRef]);
};
