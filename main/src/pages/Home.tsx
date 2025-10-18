import Bar from "../components/Bar.tsx";

import Card from "../components/Card.tsx";

function Home() {
  // to do: test gallery chips, make a home icon to go back to home page, google api to link photos
  return (
    <>
      <div
        id="background"
        className="fixed top-0 left-0 w-full h-full -z-10 bg-zinc-900 bg-[length:400%_400%]"
      >
        <div className="">
          <Bar
            colour="bg-zinc-900"
            height="h-20"
            classes="mt-5 flex justify-center flex-col items-center"
          >
            <div className="text-white text-3xl text-center font-mono">
              Temasek JC
            </div>
            <br />
            <div className="text-gray-400 text-sm text-center font-mono">
              Photos by TJC Infocomm Club
            </div>
          </Bar>
        </div>
        <div className="flex flex-wrap gap-4 items-centre justify-center mt-10 mx-10">
          <Card
            title=""
            route=""
            src="https://lh3.googleusercontent.com/d/1wBdwDWbTkREFAtLtghTKtU2BwqAZEMIF=w1000"
          />
          <Card
            title=""
            route=""
            src="https://lh3.googleusercontent.com/d/1DDeqAj-J_kBQTwTjPImG5g6CPtWBTP8v=w1000"
          />
        </div>
      </div>
    </>
  );
}

export default Home;
