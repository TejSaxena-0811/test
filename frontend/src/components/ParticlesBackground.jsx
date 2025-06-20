import React from 'react';
import Particles from 'react-tsparticles';
import { loadFull } from 'tsparticles';

const ParticlesBackground = () => {
  const particlesInit = async (main) => {
    await loadFull(main);
  };

  return (
    <Particles
      id="tsparticles"
      init={particlesInit}
      options={{
        fullScreen: { enable: false },
        background: {
          color: "transparent",
        },
        fpsLimit: 60,
        particles: {
          number: { value: 50 },
          color: { value: "#ffffff" },
          shape: { type: "circle" },
          opacity: { value: 0.3 },
          size: { value: 3 },
          move: {
            enable: true,
            speed: 1,
            direction: "none",
            outModes: "out",
          },
        },
      }}
    />
  );
};

export default ParticlesBackground;
