import { Link } from "react-router-dom";

interface CardProps {
  title: string;
  route: string;
  src: string;
}

function Card(props: CardProps) {
  const title = props.title || "Title";
  const route = props.route || "/";
  const src = props.src || "";
  return (
    <div>
      <Link to={route}>
        <div>
          <img
            src={src}
            alt={title}
            className={`w-[90vw] max-w-[480px] h-[60vw] max-h-[320px] object-cover shadow-lg hover:scale-105 transition-all border-2 border-black/80`}
          />
        </div>
        <h1 className="text-white text-start mx-4 font-mono font-bold mt-2 md:text-2xl sm:text-xl">
          {title}
        </h1>
      </Link>
    </div>
  );
}

export default Card;
