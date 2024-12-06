import { useEffect, useRef } from 'react';
import Typed from 'typed.js';

interface TypedTextProps {
    strings: string[];
    className?: string;
}

const TypedText = ({ strings, className = '' }: TypedTextProps) => {
    const el = useRef(null);
    const typed = useRef<Typed | null>(null);

    useEffect(() => {
        const options = {
            strings: strings,
            typeSpeed: 50,
            backSpeed: 50,
            loop: true,
            cursorChar: '|',
        };

        if (el.current) {
            typed.current = new Typed(el.current, options);
        }

        return () => {
            if (typed.current) {
                typed.current.destroy();
            }
        };
    }, [strings]);

    return <span ref={el} className={className}></span>;
};

export default TypedText;
