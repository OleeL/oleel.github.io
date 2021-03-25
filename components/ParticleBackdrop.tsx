import Particles from "react-particles-js"
import css from "styled-jsx/css";

const style = {
    width: '100%',
    height: '100%',
    top: 0,
    left: 0,
    position: 'absolute',
    alignItems: 'center',
    justifyContent: 'center'
};

const ParticleBackdrop = () =>
        <Particles
            className="backdrop"
            style={style}
            params={{
                "particles": {
                    "number": {
                        "value": 60,
                        "density": {
                            "enable": true,
                            "value_area": 1500
                        }
                    },
                    "line_linked": {
                        "enable": true,
                        "opacity": 0.09
                    },
                    "move": {
                        "direction": "right",
                        "speed": 0.6
                    },
                    "size": {
                        "value": 1
                    },
                    "opacity": {
                        "anim": {
                            "enable": true,
                            "speed": 1,
                            "opacity_min": 0.05
                        }
                    }
                },
                "interactivity": {
                    "events": {
                        "onclick": {
                            "enable": true,
                            "mode": "push"
                        }
                    },
                    "modes": {
                        "push": {
                            "particles_nb": 1
                        }
                    }
                },
                "retina_detect": true
            }} />

export default ParticleBackdrop;