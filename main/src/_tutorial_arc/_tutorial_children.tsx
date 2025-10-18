// import { useState } from 'react'
// import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'
// import './App.css'

import ErrorAlert from "./components/ErrorAlert.tsx";
import Button from "./components/button.tsx";
import { useState } from "react";

function App() {
  const [showError, setShowError] = useState(false);
  return (
    <>
      <div
        className={`transition-opacity duration-500 delay-150 ${
          showError ? "opacity-100" : "opacity-0"
        }`}
      >
        <ErrorAlert
          onClose={() => {
            setShowError(false);
          }}
        >
          <strong className="font-bold">Holy smokes!</strong>

          <span className="block sm:inline px-2">
            Something seriously bad happened.
          </span>
        </ErrorAlert>
      </div>
      <div className="flex justify-center items-center h-screen">
        <Button
          onClick={() => {
            setShowError(!showError);
          }}
          color="border-gray-950 bg-red-300 hover:bg-red-400"
        >
          <p className="text-center font-mono text-gray-950">Click Me</p>
        </Button>
      </div>
    </>
  );
}

export default App;
