import Card from "../components/Card.tsx";

import Header from "../components/Header.tsx";

function Home() {
  // to do: test gallery chips, make a home icon to go back to home page, use js map func to create cards automatically
  return (
    <>
      <div
        id="background"
        className="absolute top-0 left-0 w-full h-fill -z-10 bg-zinc-900 bg-[length:400%_400%] pb-10"
      >
        <Header
          title="Temasek JC"
          subtext="Photos by TJC Infocomm Club"
        ></Header>
        <div className="flex flex-wrap gap-2 items-centre justify-center mt-10 mx-4">
          <Card
            title="Grad Night 2025"
            route="/gallery/2025/gradnight2025"
            src="gradnight2025/unknown_00-00_73.jpg"
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

        {/* Remember to add the archive year path to App.tsx */}

        {/* <div className="mt-20 mb-10 mx-40 underline  text-white lg:text-2xl md:text-xl font-mono items-center justify-center flex">
          Past Archives
        </div>
        <div className="mb-40 mx-40 text-white lg:text-2xl md:text-xl font-mono items-center justify-center flex">
          <Card title="Events of 2024" route="/arc/2024" src="" />
        </div>
        <div className=" footer w-[100%] h-40 bg-zinc-900 bg-[length:400%_400%]"></div> */}
      </div>
    </>
  );
}

export default Home;
