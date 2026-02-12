import Card from "../components/Card.tsx";

import Header from "../components/Header.tsx";

function Home() {
  // to do: test gallery chips, make a home icon to go back to home page, use js map func to create cards automatically
  return (
    <>
      <div
        id="background"
        className="absolute top-0 left-0 w-full h-fill min-h-[100vh] -z-10 bg-zinc-900 bg-[length:400%_400%] pb-10"
      >
        <Header
          title="Temasek JC"
          subtext="Photos by TJC Infocomm Club"
        ></Header>
        <div className="flex flex-wrap gap-2 items-centre justify-center mt-10 mx-4">
          {/* <Card
            title="Grad Night 2025"
            route="/gallery/2025/gradnight2025"
            src="gradnight2025/unknown_00-00_131.jpg"
          /> */}
          <Card
            title="OHANA Day 5"
            route="/gallery/2026/ohana2026day5"
            src="ohana2026day5/rayner_11-25_8.jpg"
          />
          <Card
            title="OHANA Day 4"
            route="/gallery/2026/ohana2026day4"
            src="ohana2026day4/hannah_08-25_247.jpg"
          />
          <Card
            title="CCA Fair 2026"
            route="/gallery/2026/ccafair2026"
            src="ccafair2026/chloe_04-25_14.jpg"
          />
          <Card
            title="OHANA Day 3"
            route="/gallery/2026/ohana2026day3"
            src="ohana2026day3/enqi_18-25_86.jpg"
          />
          <Card
            title="OHANA Day 2"
            route="/gallery/2026/ohana2026day2"
            src="ohana2026day2/matthew_04-25_52.jpg"
          />
          <Card
            title="OHANA Day 1"
            route="/gallery/2026/ohana2026day1"
            src="ohana2026day1/enqi_18-25_10.jpg"
          />
        </div>

        {/* Remember to add the archive year path to App.tsx */}

        <div className="mt-20 mb-10 mx-40 underline  text-white lg:text-2xl md:text-xl font-mono items-center justify-center flex">
          Past Archives
        </div>
        <div className="mb-40 mx-40 text-white lg:text-2xl md:text-xl font-mono items-center justify-center flex">
          <Card title="Events of 2025" route="/arc/2025" src="gradnight2025/unknown_00-00_131.jpg" />
        </div>
        <div className="footer w-[100%] h-40 bg-zinc-900 bg-[length:400%_400%] text-white flex-col flex items-center justify-center font-mono">
          <p className="text-lg">© TJCINFOCOMM</p>
          
          <p className="text-sm"><br></br>powered by hopes and dreams</p>
        </div>
      </div>
    </>
  );
}

export default Home;
