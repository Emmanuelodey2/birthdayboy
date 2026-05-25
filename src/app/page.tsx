

"use client";

import { useState } from "react";
import Letter from "@/components/Letter";
import { text } from "node:stream/consumers";
import lettersData from "@/components/data";
export default function Home() {
  const [enteredPin, setEnteredPin] = useState("");
  const [isUnlocked, setIsUnlocked] = useState(false);
  const correctPin = "2505"; // CHANGE THIS
  



  const handleNumberClick = (num: string) => {
    if (enteredPin.length >= 4) return;

    const newPin = enteredPin + num;
    setEnteredPin(newPin);

    if (newPin.length === 4) {
      setTimeout(() => {
        if (newPin === correctPin) {
          setIsUnlocked(true);
        } else {
          setEnteredPin("");
        }
      }, 300);
    }
  };

  const handleDelete = () => {
    setEnteredPin((prev) => prev.slice(0, -1));
  };

  // LOCK SCREEN
  if (!isUnlocked) {
    return (
      <div className="w-screen h-screen overflow-hidden bg-[#0f172a] relative flex items-center justify-center">

        {/* BACKGROUND GLOW */}
        <div className="absolute inset-0">
          <div className="absolute w-[500px] h-[500px] bg-pink-500/20 blur-3xl rounded-full top-[-100px] left-[-100px]" />
          <div className="absolute w-[400px] h-[400px] bg-blue-500/20 blur-3xl rounded-full bottom-[-100px] right-[-100px]" />
        </div>

        {/* CARD */}
        <div
          className="
            relative z-10
            w-[92%]
            max-w-[400px]
            rounded-[32px]
            bg-white/10
            backdrop-blur-xl
            border border-white/20
            shadow-2xl
            p-6 sm:p-8
          "
        >

          {/* TITLE */}
          <div className="text-center">
            <p className="text-white/60 tracking-[0.4em] uppercase text-[10px] sm:text-xs">
              Private Access
            </p>

            <h1 className="text-white font-bold text-3xl sm:text-4xl mt-3">
              20 Letters 💌
            </h1>

            <p className="text-white/70 text-sm sm:text-base mt-3 leading-relaxed">
              Enter the secret pin to unlock Etoms's birthday letters.
            </p>
          </div>

          {/* PIN DOTS */}
          <div className="flex justify-center gap-4 mt-8 mb-8">
            {[0, 1, 2, 3].map((i) => (
              <div
                key={i}
                className={`
                  w-4 h-4 rounded-full transition-all duration-300
                  ${
                    enteredPin[i]
                      ? "bg-white scale-110"
                      : "bg-white/20"
                  }
                `}
              />
            ))}
          </div>

          {/* DIAL PAD */}
          <div className="grid grid-cols-3 gap-4">

            {[1,2,3,4,5,6,7,8,9].map((num) => (
              <button
                key={num}
                onClick={() => handleNumberClick(num.toString())}
                className="
                  h-16 rounded-2xl
                  bg-white/10
                  border border-white/10
                  text-white text-xl font-semibold
                  active:scale-95
                  transition-all duration-200
                  hover:bg-white/20
                "
              >
                {num}
              </button>
            ))}

            {/* EMPTY */}
            <div />

            {/* 0 */}
            <button
              onClick={() => handleNumberClick("0")}
              className="
                h-16 rounded-2xl
                bg-white/10
                border border-white/10
                text-white text-xl font-semibold
                active:scale-95
                transition-all duration-200
                hover:bg-white/20
              "
            >
              0
            </button>

            {/* DELETE */}
            <button
              onClick={handleDelete}
              className="
                h-16 rounded-2xl
                bg-red-500/20
                border border-red-300/20
                text-white text-sm font-medium
                active:scale-95
                transition-all duration-200
              "
            >
              Delete
            </button>

          </div>

          {/* HINT */}
          <p className="text-center text-white/40 text-xs mt-6">
            Only the right person gets in ✨
          </p>

        </div>
      </div>
    );
  }

  // MAIN WEBSITE
  return (
    <div className="w-screen h-screen bg-blue-500 overflow-hidden relative">

      {/* HEADER */}
      <div className="absolute top-0 left-0 w-full z-50 flex flex-col items-center pt-6 sm:pt-8 md:pt-10 pointer-events-none">

        <p
          className="
            text-white/70
            tracking-[0.4em]
            uppercase
            text-[10px]
            sm:text-xs
            md:text-sm
          "
        >
          a special collection
        </p>

        <h1
          className="
            text-white
            text-center
            font-bold
            leading-tight
            drop-shadow-2xl
            text-3xl
            sm:text-5xl
            md:text-6xl
            lg:text-7xl
          "
        >
          20 Letters
        </h1>

        <p
          className="
            text-white/90
            text-center
            mt-2
            font-light
            text-sm
            sm:text-lg
            md:text-xl
          "
        >
          on your 20th birthday ✨
        </p>
      </div>

      {/* HORIZONTAL LETTERS */}
      <div
        className="
          w-screen
          h-screen
          overflow-x-auto
          overflow-y-hidden
          no-scrollbar
          snap-x
          snap-mandatory
          touch-pan-x
          flex
          items-center
        "
      >

        {/* LEFT SPACER */}
        <div className="flex-shrink-0 w-[calc(50vw-128px)]" />

        {/* LETTER ROW */}
        <div className="flex gap-24 min-w-max items-center relative z-10 pt-24 sm:pt-28 md:pt-32">

          {lettersData.map((i, index) => (
            <div
              key={index}
              className="
                relative
                hover:z-[999]
                z-[100]
                hover:scale-105
                transition-transform duration-500
                snap-center
              "
            >

              <Letter
                name={i.name}
                side={i.side}
                sections={i.sections}
              />

              {/* NUMBER */}
              <div className="absolute -bottom-12 left-1/2 z-0 -translate-x-1/2">

                <p
                  className="
                    text-white/20
                    font-bold
                    tracking-widest
                    text-sm
                    sm:text-base
                    md:text-lg
                    
                  "
                >
                 Letter {index + 1} 
{/* <span>
  {i.side}
  </span>                 */}
                </p>

              </div>

            </div>
          ))}

        </div>

        {/* RIGHT SPACER */}
        <div className="flex-shrink-0 w-[calc(50vw-128px)]" />

      </div>
    </div>
  );
}
