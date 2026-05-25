
type PolaroidVideoProps = {
  src: string;
  caption?: string;
};

const PolaroidVideo = ({ src, caption = "Memory 🎥" }: PolaroidVideoProps) => {
  return (
    <div className="bg-white p-3 pb-6 shadow-xl rotate-[-4deg] rounded-sm">
      
      {/* VIDEO CONTAINER */}
      <div className="relative w-[220px] h-[220px] sm:w-[260px] sm:h-[260px] overflow-hidden rounded-sm bg-black">
        <video
          src={src}
          controls
          className="w-full h-full object-cover"
        />
      </div>

      {/* CAPTION */}
      <p className="text-center text-xs text-gray-500 mt-3">
        {caption}
      </p>

    </div>
  );
};

export default PolaroidVideo;
