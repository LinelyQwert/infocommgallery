import type { ReactNode } from "react";

interface BarProps {
  colour: string;
  height: string;
  children: ReactNode;
  classes: string;
}

function Bar(props: BarProps) {
  const colour = props.colour || "bg-gray-950";
  const height = props.height || "h-20";
  const children = props.children || <></>;
  const classes = props.classes || "";
  return (
    <>
      <div className={`w-full ${height} ${colour} ${classes}`}>{children}</div>
    </>
  );
}

export default Bar;
