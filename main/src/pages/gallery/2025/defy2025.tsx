import CardChip from "../../../components/CardChip";

import { Link } from "react-router-dom";

import file_attrs from "../galleryJSONs/2025/defy2025.json";

import HeaderImage from "../../../components/HeaderImage";

function Defy2025() {
  const imageList = Object.values(file_attrs);
  const shuffledImageList = [...imageList].sort(() => Math.random() - 0.5);
  return (
    <>
      <div
        id="background"
        className="fixed top-0 left-0 w-full h-full -z-10 bg-zinc-900 bg-[length:400%_400%]"
      ></div>

      <Link
        to="/"
        className="absolute text-white text-start m-4 px-4 font-mono font-bold bg-black/50 z-10"
      >
        {"<-- Back!"}
      </Link>

      {/* EDIT THIS FOR NEW PAGES */}
      <HeaderImage
        src="defy2025/unknown_00-00_93.jpg"
        authors="Yuxin, Hannah, Matthew and Rioson"
        title="Farewell 2025"
      ></HeaderImage>
      {/* EDIT THIS FOR NEW PAGES */}

      <div className="flex flex-wrap gap-2 items-centre justify-center mt-10 mx-2">
        {shuffledImageList.map((img, index) => {
          return (
            <CardChip
              key={index}
              src={img.src}
              alt=""
              author={img.author}
              downlink={img.downlink}
            ></CardChip>
          );
        })}
      </div>

      <div className="footer w-[100%] h-40 bg-zinc-900 bg-[length:400%_400%]"></div>
    </>
  );
}

export default Defy2025;
