import baseTextureImg from "./worldbathy.jpg";
import heightTextImg from "./worldbathy.jpg";
import environmentImg from "./starfield.jpg";
// import textureImg from "@/assets/images/pisa.jpg";

export default {
  backgroundColor: "#2d3a4b",
  globe: {
    baseTexture: baseTextureImg,
    heightTexture: heightTextImg,
    displacementScale: 0.04,
    shading: "realistic",
    environment: environmentImg,
    realisticMaterial: {
      roughness: 0.9
    },
    postEffect: {
      enable: true
    },
    light: {
      main: {
        intensity: 5,
        shadow: true
      },
      ambientCubemap: {
        // texture: textureImg,
        diffuseIntensity: 0.2
      }
    }
  }
};
