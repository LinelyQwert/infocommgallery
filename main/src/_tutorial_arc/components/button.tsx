import type { ReactNode } from "react";
import { useState } from "react";

interface ButtonProps {
  children: ReactNode;
  onClick: () => void;
  color: string; // border bg hover colors
}

function Button(props: ButtonProps) {
  const text = props.children || <></>;
  const onClick = props.onClick || function () {};
  const color = props.color || "border-blue-500 bg-blue-300 hover:bg-blue-700";

  const [clicked, setClicked] = useState(false);

  return (
    <>
      <div
        className={`border-2 max-w-50 w-auto font-bold py-2 px-4 rounded cursor-pointer ${color}`}
        onClick={() => {
          setClicked(!clicked), onClick();
        }}
      >
        {text}
      </div>
      {/* {clicked === true ? <p>Clicked!</p> : <p>Not Clicked</p>} */}
    </>
  );
}

export default Button;
