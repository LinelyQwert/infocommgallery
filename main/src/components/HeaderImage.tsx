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
        <div className="bg-gradient-to-b from-0% to-black/20 flex justify-center items-center w-full">
          <img src={src} className="max-h-[40vh] object-cover w-[100%] -z-10"></img>
        </div>
        
        <div className="absolute bottom-0 w-[90%] px-4 py-4 space-y-2">
          {/* Title */}
          <h1 className="text-white text-4xl md:text-4xl text-left font-mono">
            {title}
          </h1>
          
          {/* Authors */}
          <h1 className="text-white text-xs md:text-lg text-left font-mono">
            Photos by: {authors}
          </h1>
        </div>
      </div>
    </>
  );
}

export default HeaderImage;
