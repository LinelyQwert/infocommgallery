import Card from "../../components/Card.tsx";

import Header from "../../components/Header.tsx";

import { Link } from "react-router-dom";

const Arc2025 = () => {
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
          subtext="The 2025 Photos by TJC Infocomm Club"
        ></Header>
        <div className="flex flex-wrap gap-2 items-centre justify-center mt-10 mx-4">
          <Card
            title="Grad Night 2025"
            route="/gallery/2025/gradnight2025"
            src="gradnight2025/unknown_00-00_131.jpg"
          />
          <Card
            title="DEFY 2025"
            route="/gallery/2025/defy2025"
            src="defy2025/unknown_00-00_1.jpg"
          />
          <Card
            title="Farewell 2025"
            route="/gallery/2025/farewell2025"
            src="farewell2025/andrea_09-25_63jpg.jpg"
          />
        </div>
      </div>
    </>
  );
};

export default Arc2025;
