import CardChip from "../../../components/CardChip";

import { Link } from "react-router-dom";

import file_attrs from "../galleryJSONs/2026/ccafair2026.json";  // EDIT THIS FOR NEW PAGES

import HeaderImage from "../../../components/HeaderImage";

function Ccafair2026() { // EDIT THIS FOR NEW PAGES
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
        src="ccafair2026/rioson_11-25_7.jpg" 
        authors="Chloe, Jerriel and Rioson"
        title="CCA Fair 2026"
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
              images={shuffledImageList}
              currentIndex={index}
            ></CardChip>
          );
        })}
      </div>

      <div className="footer w-[100%] h-40 bg-zinc-900 bg-[length:400%_400%] text-white flex-col flex items-center justify-center font-mono">
          <p className="text-lg">© TJCINFOCOMM</p>
          
          <p className="text-sm"><br></br>powered by hopes and dreams</p>
        </div>
    </>
  );
}

export default Ccafair2026; // EDIT THIS FOR NEW PAGES
