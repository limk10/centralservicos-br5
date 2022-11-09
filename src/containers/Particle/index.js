import React from "react";
import Particles from "react-tsparticles";

const Particle1 = {
  src: "assets/image/particles/particle-1.png",
};
const Particle2 = {
  src: "assets/image/particles/particle-2.png",
};
const Particle3 = {
  src: "assets/image/particles/particle-3.png",
};
const Particle4 = {
  src: "assets/image/particles/particle-4.png",
};
const Particle5 = {
  src: "assets/image/particles/particle-5.png",
};
const Particle6 = {
  src: "assets/image/particles/particle-6.png",
};
const Particle7 = {
  src: "assets/image/particles/particle-7.png",
};

const ParticlesComponent = () => {
  return (
    <>
      <Particles
        className="particle"
        params={{
          particles: {
            number: {
              value: 7,
              density: { enable: true, value_area: 800 },
            },

            shape: {
              type: ["images"],
              image: [
                {
                  src: `${Particle1?.src}`,
                  width: 25,
                  height: 25,
                },
                {
                  src: `${Particle2?.src}`,
                  width: 18,
                  height: 18,
                },
                {
                  src: `${Particle3?.src}`,
                  width: 32,
                  height: 32,
                },
                {
                  src: `${Particle4?.src}`,
                  width: 41,
                  height: 41,
                },
                {
                  src: `${Particle5}`,
                  width: 22,
                  height: 22,
                },
                {
                  src: `${Particle6}`,
                  width: 22,
                  height: 22,
                },
                {
                  src: `${Particle7}`,
                  width: 22,
                  height: 22,
                },
              ],
            },
            opacity: {
              value: 0.17626369048095938,
              random: true,
              anim: { enable: false, speed: 1, opacity_min: 0.1, sync: false },
            },
            size: {
              value: 10,
              random: false,
            },
            line_linked: {
              enable: false,
            },
            move: {
              enable: true,
              speed: 1.5,
              direction: "none",
              random: false,
              straight: false,
              bounce: true,
              attract: { enable: true, rotateX: 100, rotateY: 400 },
            },
          },
          retina_detect: true,
        }}
      />
    </>
  );
};
export default ParticlesComponent;
