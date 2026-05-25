"use client";

import { useMemo } from "react";

const ButterLights =() => {
    const lights = useMemo(() => {
        return Array.from({ length: 50 }).map((_, i) => ({
          id: i,
          size:20,
          left: Math.random() * 100,
          top: Math.random() * 100,
          duration: 800,
          delay: Math.random() * 5,
        }));
      }, []);
    
      return (
        <div className="absolute inset-0 overflow-hidden  pointer-events-none">
          {lights.map((light) => (
            <span
              key={light.id}
              className="absolute rounded-full"
              style={{
                width: `${light.size}px`,
                height: `${light.size}px`,
                left: `${light.left}%`,
                top: `${light.top}%`,
                animation: `twinkle ${light.duration}s ease-in-out infinite`,
                animationDelay: `${light.delay}s`,
                background: `
                  radial-gradient(circle,
                    rgb(255, 245, 157) 0%,   /* bright butter core */
                    rgba(255, 224, 102, 0.9) 30%,
                    rgba(255, 200, 50, 0.6) 55%,
                    rgba(255, 200, 50, 0.2) 70%,
                    transparent 80%
                  )
                `,
                filter: "blur(6px)",
              }}
            />
          ))}
    
          <style jsx>{`
            @keyframes twinkle {
              0% {
                transform: scale(1);
                opacity: 0.6;
              }
              50% {
                transform: scale(1.4);
                opacity: 1;
              }
              100% {
                transform: scale(1);
                opacity: 0.6;
              }
            }
          `}</style>
        </div>
      );
    }
export default ButterLights