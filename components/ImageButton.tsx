import { FC, useState } from 'react';
import { animated, useSpring } from 'react-spring';
import css from "styled-jsx/css";

const ButtonStyle = css`
    img {
        width: 6vmin;
        height: 6vmin;
        margin: 2vmin;
        cursor: pointer;
    }
`

const ImageButton: FC<any> = (args) => {
    const [hovering, setHovering] = useState(false);
    const spring = useSpring({
        transform: hovering ? `scale(1.2)` : `scale(1)`
    });

    return (
        <animated.a
                style={spring}
                onMouseEnter={() => {setHovering(true)}}
                onMouseLeave={() => {setHovering(false)}}
                {...args}>
            <style jsx>{ButtonStyle}</style>
            <img src={args?.src} />
        </animated.a>
    )
}

export default ImageButton;