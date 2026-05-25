import { useMemo } from "react";
import Image from "next/image";

const confettiColors = [
  "/assets/confetti1.png",
  "/assets/confetti2.png",
  "/assets/confetti3.png",
  "/assets/confetti4.png",
  "/assets/confetti5.png",
];

const Confetti = () => {
  const confetti = useMemo(() => {
    let items: any[] = [];

    confettiColors.forEach((src, i) => {
      for (let j = 0; j < 10; j++) { // 👈 this is your loop (5 times each)
        items.push({
          id: `${i}-${j}`,
          src,
          top: Math.random() * 90,
          left: Math.random() * 90,
          rotate: Math.random() * 360,
          size: 20 + Math.random() * 30,
        });
      }
    });

    return items;
  }, []);

  return (
    <>
      {confetti.map((item) => (
        <Image
          key={item.id}
          src={item.src}
          alt=""
          width={50}
          height={50}
          className="absolute pointer-events-none"
          style={{
            top: `${item.top}%`,
            left: `${item.left}%`,
            width: `20px`,
            height: `30px`,
            transform: `rotate(${item.rotate}deg)`,
          }}
        />
      ))}
    </>
  );
};

export default Confetti;