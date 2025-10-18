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
            className={`w-[36vw] max-w-[480px] h-[24vw] max-h-[320px] object-cover rounded-lg shadow-lg border-2 border-white`}
          />
          <iframe src={src} />
        </div>
        <h1 className="text-white text-start mx-4 font-mono font-bold mt-2">
          {title}
        </h1>
      </Link>
    </div>
  );
}

export default Card;
