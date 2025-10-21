import Bar from "../components/Bar.tsx";

import Card from "../components/Card.tsx";

import CardChip from "../components/CardChip.tsx";

import Header from "../components/Header.tsx";

function Home() {
  // to do: test gallery chips, make a home icon to go back to home page, use js map func to create cards automatically
  return (
    <>
      <div
        id="background"
        className="fixed top-0 left-0 w-full h-full -z-10 bg-zinc-900 bg-[length:400%_400%]"
      >
        <Header
          title="Temasek JC"
          subtext="Photos by TJC Infocomm Club"
        ></Header>
        <div className="flex flex-wrap gap-4 items-centre justify-center mt-10 mx-10">
          <Card
            title="Farewell 2025"
            route="/gallery/farewell2025"
            src="https://lh3.googleusercontent.com/d/1wBdwDWbTkREFAtLtghTKtU2BwqAZEMIF=w1000"
          />
          <Card
            title="Staff Day 2025"
            route="/gallery/staffday2025"
            src="https://lh3.googleusercontent.com/d/1DDeqAj-J_kBQTwTjPImG5g6CPtWBTP8v=w1000"
          />
          <CardChip
            author=""
            alt=""
            src="https://lh3.googleusercontent.com/d/1wBdwDWbTkREFAtLtghTKtU2BwqAZEMIF=w1000"
            downlink=""
          />
        </div>
      </div>
    </>
  );
}

export default Home;
