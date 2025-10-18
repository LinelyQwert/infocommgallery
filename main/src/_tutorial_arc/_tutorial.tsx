// import { useState } from 'react'
// import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'
// import './App.css'
import Message from "./components/message.tsx";
import ListGroup from "./components/ListGroup.tsx";

function App() {
  var items = ["New York", "San Francisco", "Tokyo", "London", "Berlin"];
  var heading = "Cities";
  const handleSelectItem = (item: string) => {
    console.log("Selected item:", item);
  };

  return (
    <>
      <Message />
      <ListGroup
        items={items}
        heading={heading}
        onSelectItem={handleSelectItem}
      />
      <div className="text-3xl font-bold underline">hello there</div>
    </>
  );
}

export default App;
