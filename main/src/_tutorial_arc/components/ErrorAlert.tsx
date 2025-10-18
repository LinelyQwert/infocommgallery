import type { ReactNode } from "react";

interface ErrorAlertProps {
  children: ReactNode; // pass as array of JSX elements
  position?: string; // top bottom right etc
  onClose: () => void; // function to close the error alert
}

function ErrorAlert(props: ErrorAlertProps) {
  const children = props.children || <></>;
  const position = props.position || "bottom-4 right-1/2 translate-x-1/2";
  const onClose = props.onClose || function () {};
  //   const text = (
  //     <>
  //       <strong className="font-bold">Holy smokes!</strong>
  //       <span className="block sm:inline px-2">
  //         Something seriously bad happened.
  //       </span>
  //     </>
  //   );

  return (
    <>
      <div
        className={`fixed ${position} w-120 min-h-12.5 bg-red-100 border border-red-400 text-red-700 px-4 py-3 rounded`}
        role="ErrorAlert"
      >
        {children}
        <span
          className="absolute top-0 bottom-0 right-0 px-4 py-3 cursor-pointer"
          onClick={onClose}
        >
          <svg
            className="fill-current h-6 w-6 text-red-500"
            role="button"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 20 20"
          >
            <title>Close</title>
            <path d="M14.348 14.849a1.2 1.2 0 0 1-1.697 0L10 11.819l-2.651 3.029a1.2 1.2 0 1 1-1.697-1.697l2.758-3.15-2.759-3.152a1.2 1.2 0 1 1 1.697-1.697L10 8.183l2.651-3.031a1.2 1.2 0 1 1 1.697 1.697l-2.758 3.152 2.758 3.15a1.2 1.2 0 0 1 0 1.698z" />
          </svg>
        </span>
      </div>
    </>
  );
}

export default ErrorAlert;

// Usage Example
{
  /* <ErrorAlert
  onClose={() => {
    setShowError(false);
  }}
>
  <strong className="font-bold">Holy smokes!</strong>

  <span className="block sm:inline px-2">
    Something seriously bad happened.
  </span>
</ErrorAlert>; */
}
