import { Link } from "react-router-dom";
const TestButton = ({ text, url }) => {
  return (
    <Link
      to={url}
      className="cursor-pointer
  border border-yellow-500 w-full text-center rounded-lg bg-yellow-300
  text-black
  "
    >
      {text}
    </Link>
  );
};

export default TestButton;
