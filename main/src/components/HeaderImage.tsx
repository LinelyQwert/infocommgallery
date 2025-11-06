interface HeaderImageProps {
  src: string;
  authors: string;
  title: string;
}

function HeaderImage(props: HeaderImageProps) {
  const src = props.src;
  const authors = props.authors; // photographers on duty "PERSON A, PERSON B, PERSON C"
  const title = props.title;
  return (
    <>
      <div className="text-white w-full flex justify-center relative">
        <img src={src} className="max-h-[40vh] object-cover w-[90%]"></img>
        <h1
          className="text-white bg-gradient-to-b from-white/0
         to-black/80 absolute w-[90%] text-4xl text-left bottom-0 px-4 py-15 font-mono"
        >
          {title}
        </h1>
        <h1 className="text-white absolute w-[90%] md:text-lg sm:text-md text-left bottom-0 px-6 py-2 font-mono">
          Photos by: {authors}
        </h1>
        {/* <h1>
          Share!
        </h1> */}
      </div>
    </>
  );
}

export default HeaderImage;
