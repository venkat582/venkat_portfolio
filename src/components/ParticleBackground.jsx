import { useCallback } from "react";
import Particles from "@tsparticles/react";
import { loadSlim } from "@tsparticles/slim";

function ParticleBackground() {
  const particlesInit = useCallback(async (engine) => {
    await loadSlim(engine);
  }, []);

  return (
    <Particles
      id="particles"
      init={particlesInit}
      options={{
        background: {
          color: {
            value: "#020617",
          },
        },
        fpsLimit: 60,
        particles: {
          number: {
            value: 200,
          },
          color: {
            value:"#ffffff",
          },
          links: {
            enable: true,
            color: "#ffffff",
            distance: 150,
            opacity: 0.3,
          },
          move: {
            enable: true,
            speed: 1,
          },
          opacity: {
            value: 0.5,
          },
          size: {
            value: 3,
          },
        },
      }}
      className="fixed inset-0 -z-10"
    />
  );
}

export default ParticleBackground;