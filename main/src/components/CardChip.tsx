import { useState } from "react";

interface CardChipProps {
  alt: string;
  author: string;
  downlink: string;
  src: string;
}

function CardChip(props: CardChipProps) {
  const alt = props.alt || "";
  const author = props.author || "Unknown";
  const downlink = props.downlink || "about:blank";
  const src = props.src || "";
  const [clicked, setClicked] = useState(false);
  return (
    <>
      <div className="relative inline-block group">
        <img
          src={src}
          alt={alt}
          onClick={() => setClicked(true)}
          className="object-contain w-auto min-h-[200px] h-[24vw] max-h-[320px] rounded-lg shadow-lg border-2 border-white
          cursor-pointer"
        />
        <div className="flex justify-center">
          <h1 className="absolute  w-[99%] bg-black/40 -translate-y-[104%] text-white text-start px-4 py-2 font-mono font-bold sm:text-xs  opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-lg">
            {author === "Unknown" ? (
              <>Taken by Infocomm</>
            ) : (
              <>Taken by {author}</>
            )}
            <a
              href={downlink}
              className=" right-0 -translate-y-1/4 opacity-0 group-hover:opacity-100 transition-opacity duration-300 max-w-10 absolute"
            >
              <img src="/download.png" className="w-5-h-5" />
            </a>
          </h1>
        </div>
      </div>
      {/* overlay */}
      {clicked && (
        <>
          <div
            className="fixed inset-0 bg-black/80 backdrop-blur-sm z-50 flex items-center justify-center"
            onClick={() => setClicked(false)}
          >
            {/* clicking outside closes img too */}
            <button
              className="absolute top-4 right-4 text-white hover:text-gray-300"
              onClick={() => setClicked(false)}
            >
              X
            </button>
            <img
              src={src}
              alt={alt}
              className="max-w-[90vw] max-h-[85vh] rounded-lg shadow-2xl object-contain border border-white/20 transition-transform duration-300"
              onClick={(e) => e.stopPropagation()} // prevent closing when clicking image
            />
          </div>
        </>
      )}
    </>
  );
}

export default CardChip;
