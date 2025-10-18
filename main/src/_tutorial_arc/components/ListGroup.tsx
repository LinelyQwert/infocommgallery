import { useState } from "react";

// { items: [], heading: string }  destructured props
interface ListGroupProps {
  items?: string[];
  heading?: string;
  onSelectItem?: (item: string) => void;
}

function ListGroup(props: ListGroupProps) {
  const items = props.items || [];
  const heading = props.heading || "List";
  const onSelectItem =
    props.onSelectItem ||
    function () {
      alert("No onSelectItem provided");
    };
  const [selectedIndex, setSelectedIndex] = useState(-1);
  // arr[0] = selectedIndex
  // arr[1] = updaterFunction
  const [click_count, setClickCount] = useState(0);
  //   items = [];
  return (
    <>
      <div className="bg-gradient-to-bl from-purple-100 via-green-200 to-red-100 p-4 rounded-lg">
        <h1 className="text-center text-xl font-bold underline">{heading}</h1>
        {/* {items.length === 0 ? (
          <p className="text-center">No Item Found</p>
        ) : null} */}
        {items.length === 0 && <p className="text-center">No Item Found</p>}
        <ul className="">
          {items.map((item, index) => (
            <li
              className={
                selectedIndex === index
                  ? "text-center active bg-blue-500 text-white rounded-md p-2 cursor-pointer my-1"
                  : "text-center p-2 cursor-pointer my-1 hover:bg-gray-200 rounded-md"
              }
              key={item}
              onClick={() => {
                setSelectedIndex(index);
                setClickCount(click_count + 1);
                onSelectItem(item);
              }}
            >
              {item}
            </li>
          ))}
        </ul>
        <p className="text-center">{click_count}</p>
      </div>
    </>
  );
}
export default ListGroup;
