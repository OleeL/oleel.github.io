import { FC } from "react";
import { useSpring, animated } from "react-spring";

const Spring = { xy: [0, 0], config: { mass: 30, tension: 1000, friction: 200 } };

const tiltAmount = 100;

const calc = (x: number, y: number) => 
    [-(y-(window.innerHeight / 2)) / tiltAmount, (x-(window.innerWidth / 2)) / tiltAmount, 1.1]

const rotate = (x,y): string => 
    `perspective(600px) rotateX(${x}deg) rotateY(${y}deg)`
    
interface IInteractive { className?: string }

export const TiltingDiv: FC<IInteractive> = ({children, className}) => {
    const [spring, set] = useSpring(() => Spring);

    return (
        <animated.div
            className={className}
            //@ts-ignore
            style={{transform: spring.xy.interpolate(rotate) }}
            onMouseMove={({ clientX: x, clientY: y }) => set({ xy: calc(x, y) })}
            onMouseLeave={() => set({ xy: [0, 0] })}>
                {children}
        </animated.div>
    )
}

export default TiltingDiv;