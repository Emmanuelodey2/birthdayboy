import Image from "next/image";
import PolaroidVideo from "./PolaroidVideo";
type Section = {
  header?: string;
  image?: string;
  video? : string;
  text: string;
};

type BirthdayLetterProps = {
  name?: string;
  side?: string;
  sections: Section[];
};
const BirthdayLetter = ({
  name = "Happy Birthday!",
  side = "🫶🏽Dumebi🫶🏽",
  sections=[]
}: BirthdayLetterProps) => {
  return (
    <div
      className="
      relative
      bg-[#fffdf7]
      rounded-2xl
      shadow-2xl
  
      overflow-y-auto
      overscroll-contain
      scroll-smooth
  
      md:w-[80vh]
    w-[45vh]
      h-[60vh]
      md:mx-auto
      p-5
      sm:p-8
    "
    >
      {/* BACKGROUND */}
      <div className="absolute inset-0 opacity-10 pointer-events-none">
        <Image
          src="/assets/blue4.png"
          alt="Birthday cake background"
          fill
          className="object-cover"
        />
      </div>

      {/* CONTENT */}
      <div className="relative z-100">
        {/* HEADER */}
        <div className="mb-8 text-center">
          <h1 className="text-2xl sm:text-4xl font-bold text-[#775537]">
            {name} 🎂
          </h1>

          <p className="text-gray-500 mt-2 text-sm sm:text-base">
            A few memories and words for you ✨
          </p>
        </div>

        {/* SECTIONS */}
        <div className="flex flex-col gap-10">
          {sections.map((section, index) => (
            <div
              key={index}
              className={`
                flex
                flex-col
                ${index % 2 === 0
                  ? "md:flex-row"
                  : "md:flex-row-reverse"
                }
                items-center
                gap-6
              `}
            >
              {/* IMAGE */}
              {section.image &&
                <div className="relative shrink-0">
                  <div className="bg-white p-3 pb-6 shadow-xl rotate-[-4deg] rounded-sm">
                    <div className="relative w-[220px] h-[220px] sm:w-[260px] sm:h-[260px]">
                      <Image
                        src={section.image}
                        alt={`${name} memory ${index + 1}`}
                        fill
                        className="object-cover rounded-sm"
                      />
                    </div>

                    <p className="text-center text-xs text-gray-500 mt-3">
                      Memory {index + 1} 💛
                    </p>
                  </div>

                  {/* STAR */}
                  <div className="absolute -top-2 -right-2 text-yellow-400 text-2xl">
                    ⭐
                  </div>
                  <div className="absolute bottom-0 left-0 w-14 sm:w-24 z-20 opacity-90">
                    <Image
                      src="/assets/teddybear.png"
                      alt="Teddy bear decoration"
                      width={120}
                      height={120}
                      className="object-contain"
                    />
                  </div>
                </div>
              }
              {section.video &&
              <PolaroidVideo src={section.video} />}

              {/* TEXT */}
              <div className="flex-1">
                <h1 className="w-full  text-center font-semibold ">
                  {section?.header}
                </h1>
                <p
                  className="
                    text-gray-700
                    text-sm
                    sm:text-base
                    leading-7
                    bg-white/70
                    backdrop-blur-sm
                    p-5
                    rounded-2xl
                    shadow-md
                  "
                >

                  {section.text}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* FOOTER */}
        <div className="mt-12 text-center sm:text-right">
          <p className="text-gray-600 text-sm sm:text-base">
            ~~~~ {side}
          </p>
        </div>
      </div>

      {/* TEDDY */}

    </div>
  );
};

export default BirthdayLetter;