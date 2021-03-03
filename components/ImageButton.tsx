import { FC, useState } from 'react';
import { animated, useSpring } from 'react-spring';
import css from "styled-jsx/css";

const ButtonStyle = css`
    img {
        width: 6vmin;
        height: 6vmin;
        margin: 2vmin;
    }
`

interface IButton {
    href: string;
    src: string;
    alt: string;
}

const ImageButton: FC<IButton> = ({href, src, alt}) => {
    const [hovering, setHovering] = useState(false);
    const spring = useSpring({
        transform: hovering ? `scale(1.2)` : `scale(1)`
    });

    return (
        <animated.a
            style={spring}
            href={href}
            onMouseEnter={() => {setHovering(true);}}
            onMouseLeave={() => {setHovering(false)}}>
            <style jsx>{ButtonStyle}</style>
            <img src={src} alt={alt} />
        </animated.a>
    )
}

export default ImageButton;