import Card from "../../components/Card.tsx";

import Header from "../../components/Header.tsx";

import { Link } from "react-router-dom";

const Arc2024 = () => {
  return (
    <>
      <div
        id="background"
        className="fixed top-0 left-0 w-full h-full -z-10 bg-zinc-900 bg-[length:400%_400%]"
      >
        <Link
          to="/"
          className="absolute text-white text-start m-4 px-4 font-mono font-bold bg-zinc-900 z-10"
        >
          {"<-- Back!"}
        </Link>

        {/* copy and paste this year's homepage into here i guess */}

        <Header
          title="Temasek JC"
          subtext="The 2024 Photos by TJC Infocomm Club"
        ></Header>
        <div className="flex flex-wrap gap-2 items-centre justify-center mt-10 mx-4">
          <Card
            title="Farewell 2024"
            route="/gallery/farewell2025"
            src="farewell2025/andrea_09-25_63jpg.jpg"
          />
          <Card
            title="DEFY 2024"
            route="/gallery/defy2025"
            src="defy2025/unknown_00-00_1.jpg"
          />
        </div>
      </div>
    </>
  );
};

export default Arc2024;
