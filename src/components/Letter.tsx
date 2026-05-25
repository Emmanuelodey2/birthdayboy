"use client"
import React, { useState } from 'react'
import BirthdayLetter from './notes';

type Section = {
    header?: string;
    image?: string;
    text: string;
  };
  
  type BirthdayLetterProps = {
    name?: string;
    side?: string;
    sections: Section[];
  };

const Letter =({ name, side,sections }: BirthdayLetterProps) => {
    const [isFlapOpen, setIsFlapOpen] = useState(false);
    const [isLetterOut, setIsLetterOut] = useState(false);

    return (
        <div className="relative flex justify-center items-center ">

            <div
                onClick={() => {
                    if (!isFlapOpen) setIsFlapOpen(true);
                }}
                className="relative cursor-pointer w-64 h-40"
                style={{ perspective: "1000px" }}
            >

                {/* BACK OF ENVELOPE */}
                <div
                    className={`${isFlapOpen ? "-translate-y-6" : ""} transition-transform duration-700 absolute bottom-0 w-full h-[75%] bg-yellow-500 rounded-md`}
                    style={{ zIndex: 1 }}
                />

                {/* LETTER MASK */}
                <div
                    className={`absolute left-1/2 -translate-x-1/2 translate-y-4 w-60 
  transition-all duration-500
  ${  isLetterOut? "h-fit w-fit ":  isFlapOpen
                            ? "h-[70px] overflow-hidden"   // 👀 peek amount (tweak this)
                            : "h-0 overflow-hidden"
                        }`}
                    style={{ zIndex: isLetterOut ? 2100 : 4 }}
                >

                    {/* ACTUAL LETTER */}
                    <div
                        onClick={(e) => {
                            e.stopPropagation();
                            if (isFlapOpen) {
                                setIsLetterOut(prev => !prev);
                            }
                            if (isLetterOut && isFlapOpen)  {
                                setIsFlapOpen(false);
                            }
                        }}
                        className={`w-full h-full rounded-lg shadow-xl
    transition-all duration-700 ease-[cubic-bezier(.68,-0.55,.27,1.55)]
    
    ${!isFlapOpen
                                ? "translate-y-[100px]"              // 🔒 deep inside
                                : isLetterOut
                                    ? "translate-y-[-220px] md-rotate-2"    // 📤 fully out
                                    : "translate-y-[-10px] cursor-pointer hover:-translate-y-6" // 👀 peek
                            }
    `}
                    >
                        <BirthdayLetter name={name} 
    side={side}
    sections={sections} />
                    </div>

                </div>

            {/* INNER LIP (this is the secret sauce) */}
            {/* <div
                    className="absolute bottom-[70%] border w-full h-[10px] bg-white"
                    style={{ zIndex: 5 }}
                /> */}

            {/* FRONT FACE */}
            <div
                className="absolute bottom-0 w-full border h-[75%] bg-yellow-400 rounded-md overflow-hidden shadow-lg"
                style={{ zIndex: isFlapOpen ? 10 : 6 }}
            />

            {/* FLAP */}
            <div
                onClick={() => {
                    if (isFlapOpen) setIsFlapOpen(false);
                }}
                className={`${isFlapOpen ? "-translate-y-6" : ""} absolute top-10 left-0 w-full h-1/2 bg-yellow-300 origin-top transition-transform duration-700`}
                style={{
                    clipPath: "polygon(0 0, 100% 0, 50% 100%)",
                    transform: isFlapOpen ? "rotateX(180deg)" : "rotateX(0deg)",
                    transformStyle: "preserve-3d",
                    zIndex: isFlapOpen ? 6 : 10,
                }}
            />
        </div>
        </div >
    )
}

export default Letter
