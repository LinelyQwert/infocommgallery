import CardChip from "../../components/CardChip";
import Header from "../../components/Header";

import { Link } from "react-router-dom";

import file_attrs from "../../scripts/scriptResources/file_attr.json";
import HeaderImage from "../../components/HeaderImage";

function Farewell2025() {
  const imageList = Object.values(file_attrs);
  const shuffledImageList = [...imageList].sort(() => Math.random() - 0.5);
  console.log(imageList);
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
        src="/farewell2025/Copy of 3W5A0242.JPG.jpg"
        authors="Andrea, Hannah, Matthew and Rayner"
        title="Farewell 2025"
      ></HeaderImage>
      {/* EDIT THIS FOR NEW PAGES
      <Header title="Farewell 2025" subtext="10 October 2025"></Header>{" "} */}
      <div className="flex flex-wrap gap-4 items-centre justify-center mt-10 mx-10">
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
    </>
  );
}

export default Farewell2025;
