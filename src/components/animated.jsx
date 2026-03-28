import { useState } from "react";
import herostill from "../images/hero1.png";
import herohover from "../images/hero.png";

export default function Animated() {
  const [isHovered, setIsHovered] = useState(false);

  const containerStyle = {
    position: "relative",
    width: "100%",
    maxWidth: 440,
    aspectRatio: "9/16",
    overflow: "hidden",
    // This creates a smooth fade at the bottom to stop the "floaty" look
    maskImage: "linear-gradient(to top, transparent 0%, black 20%)",
    WebkitMaskImage: "linear-gradient(to top, transparent 0%, black 20%)",
  };

  const imageStyle = {
    width: "100%",
    height: "100%",
    objectFit: "cover",
    objectPosition: "top center",
    filter: isHovered ? "grayscale(0%)" : "grayscale(15%)",
    transform: isHovered ? "scale(1.05)" : "scale(1)",
    transition:
      "filter 0.6s ease, transform 0.6s cubic-bezier(0.16, 1, 0.3, 1)",
    paddingTop: "1rem",
    // Note: Removed padding here so the image fills the container for a better fade
  };

  return (
    <div
      className="reveal"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      style={containerStyle}
    >
      <img
        src={isHovered ? herohover : herostill}
        alt="Muskan - Brand Strategist"
        style={imageStyle}
      />
    </div>
  );
}
