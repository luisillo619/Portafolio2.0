"use client";
import styles from "./backgroundCircles.module.css";

const circleProps = [
  {
    size: [
      { width: "w-[26vw]", height: "h-[26vw]" },
      { width: "md:w-[20vw]", height: "md:h-[20vw]" },
    ],
    color: "border-[#333]",
    opacity: 1,
    animation: styles.custom_ping,
    maxSize: { maxW: "60%", maxH: "60%" }, // Ajustar según sea necesario
  },
  {
    size: [
      { width: "w-[40vw]", height: "h-[40vw]" },
      { width: "md:w-[25vw]", height: "md:h-[25vw]" },
    ],
    color: "border-[#333]",
    opacity: 1,
    maxSize: { maxW: "80%", maxH: "80%" }, // Ajustar según sea necesario
  },
  {
    size: [
      { width: "w-[60vw]", height: "h-[60vw]" },
      { width: "md:w-[35vw]", height: "md:h-[35vw]" },
    ],
    color: "border-[#F7AB0A]",
    opacity: 0.5,
    animation: styles.pulse,
    maxSize: { maxW: "100%", maxH: "100%" }, // Ajustar según sea necesario
  },
];

export default function BackgroundCircles() {
  return (
    <div className="flex justify-center items-center h-full w-full">
      {circleProps.map((circle, i) => (
        <div
          key={i}
          className={`absolute rounded-full border ${circle.color} 
                      ${circle.size[0].width} ${circle.size[0].height} 
                      ${circle.size[1].width} ${circle.size[1].height} 
                    `}
          style={{
            animation: `${
              circle.animation || ""
            } 1s cubic-bezier(0, 0, 0.2, 1) infinite`,
            opacity: circle.opacity,
            maxWidth: circle.maxSize.maxW,
            maxHeight: circle.maxSize.maxH,
          }}
        />
      ))}
    </div>
  );
}
