import { useState, useEffect } from "react";

interface ImageData {
  src: string;
  author: string;
  downlink: string;
  alt?: string;
}

interface CardChipProps {
  alt: string;
  author: string;
  downlink: string;
  src: string;
  images?: ImageData[];
  currentIndex?: number;
  onNavigate?: (index: number) => void;
}

function CardChip(props: CardChipProps) {
  const alt = props.alt || "";
  const author = props.author || "Unknown";
  const downlink = props.downlink || "about:blank";
  const src = props.src || "";
  const [clicked, setClicked] = useState(false);
  const [displayIndex, setDisplayIndex] = useState(props.currentIndex || 0);

  const hasNavigation = props.images && props.images.length > 1;
  const currentImage = hasNavigation ? props.images![displayIndex] : null;

  useEffect(() => {
    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        setClicked(false);
      }
      if (!clicked || !hasNavigation) return;

      if (event.key === "ArrowRight") {
        setDisplayIndex((prev) => (prev + 1) % props.images!.length);
      }
      if (event.key === "ArrowLeft") {
        setDisplayIndex((prev) =>
          prev === 0 ? props.images!.length - 1 : prev - 1
        );
      }
    };

    if (clicked) {
      window.addEventListener("keydown", handleKeyDown);
    }

    // cleanup when overlay closes
    return () => {
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [clicked, hasNavigation, props.images]);

  const handlePrevious = () => {
    setDisplayIndex((prev) =>
      prev === 0 ? props.images!.length - 1 : prev - 1
    );
  };

  const handleNext = () => {
    setDisplayIndex((prev) => (prev + 1) % props.images!.length);
  };

  const displaySrc = currentImage ? currentImage.src : src;
  const displayAuthor = currentImage ? currentImage.author : author;
  const displayDownlink = currentImage ? currentImage.downlink : downlink;

  return (
    <>
      <div className="relative inline-block group">
        <img
          src={src}
          alt={alt}
          onClick={() => setClicked(true)}
          className="object-contain w-auto min-h-50 h-[24vw] max-h-80 shadow-lg
          cursor-pointer"
        />
        <div className="flex justify-center">
          <h1 className="absolute  w-full bg-black/40 -translate-y-full text-white text-start px-4 py-2 font-mono font-bold text-xs opacity-0 group-hover:opacity-100 transition-opacity duration-300">
            {displayAuthor.includes("Unknown") ? (
              <>Taken by Infocomm!</>
            ) : (
              <>Taken by {displayAuthor}</>
            )}
            <a
              href={displayDownlink}
              className=" right-0 -translate-y-1/4 opacity-0 group-hover:opacity-100 transition-opacity duration-300 max-w-10 absolute"
            >
              <img src="download.png" className="w-3-h-3 p-2" />
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
            {/* Close button */}
            <button
              className="absolute top-4 right-4 text-white hover:text-gray-300 text-2xl font-bold z-50"
              onClick={() => setClicked(false)}
            >
              ✕
            </button>

            <div className="relative flex flex-col items-center">
              <img
                src={displaySrc}
                alt={displayAuthor}
                className="relative max-w-[90vw] max-h-[80vh] rounded-lg shadow-2xl object-contain border border-white/20 transition-transform duration-300"
                onClick={(e) => e.stopPropagation()}
              />

              {/* Image counter */}
              {hasNavigation && (
                <div className="absolute bottom-4 left-1/2 -translate-x-1/2 text-white bg-black/75 px-4 py-2 rounded-lg text-sm font-mono">
                  {displayIndex + 1} / {props.images!.length}
                </div>
              )}

              <a
                href={displayDownlink}
                className="max-w-10 absolute top-0 left-0 m-4"
                onClick={(e) => e.stopPropagation()}
              >
                <img
                  src="download.png"
                  className="w-3-h-3 p-2 bg-black/75 rounded-lg hover:bg-black transition-colors"
                />
              </a>
              <div>
                <h1 className="absolute -translate-x-1/2 bg-black/75 text-white text-center px-4 py-2 font-mono font-bold text-sm">
                  {displayAuthor.includes("Unknown") ? (
                    <>Taken by Infocomm!</>
                  ) : (<>Taken by {displayAuthor}</>
                  )}
                </h1>
              </div>
            </div>
            {/* Left Arrow */}
            {hasNavigation && (
              <button
                onClick={(e) => {
                  e.stopPropagation();
                  handlePrevious();
                }}
                className="absolute left-[7%] text-white text-2xl hover:text-gray-300 hover:scale-110 transition-all p-2 bg-black/50 rounded-lg"
                aria-label="Previous image"
              >
                ❮
              </button>
            )}
            {/* Right Arrow */}
            {hasNavigation && (
              <button
                onClick={(e) => {
                  e.stopPropagation();
                  handleNext();
                }}
                className="absolute right-[7%] text-white text-2xl hover:text-gray-300 hover:scale-110 transition-all p-2 bg-black/50 rounded-lg"
                aria-label="Next image"
              >
                ❯
              </button>
            )}
          </div>
        </>
      )}
    </>
  );
}

export default CardChip;
