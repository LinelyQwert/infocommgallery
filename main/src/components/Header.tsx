import Bar from "./Bar.tsx";

interface HeaderProps {
  title: string;
  subtext: string;
}

function Header(props: HeaderProps) {
  const title = props.title || "";
  const subtext = props.subtext || "";
  return (
    <>
      <div className="">
        <Bar
          colour="bg-zinc-900"
          height="h-20"
          classes="mt-5 flex justify-center flex-col items-center"
        >
          <div className="text-white text-3xl text-center font-mono">
            {title}
          </div>
          <br />
          <div className="text-gray-400 text-sm text-center font-mono">
            {subtext}
          </div>
        </Bar>
      </div>
    </>
  );
}

export default Header;
