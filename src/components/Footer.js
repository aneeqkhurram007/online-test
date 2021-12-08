import { useEffect } from "react";
import useStateValue from "../utils/StateValue";

const Footer = () => {
  const [{ localTime, localDate }, dispatch] = useStateValue();
  useEffect(() => {
    setTimeout(() => {
      dispatch({
        type: "LocalTimeUpdate",
        payload: new Date().toLocaleTimeString(),
      });
    }, 1000);
  }, [localTime, dispatch]);
  return (
    <div
      className="flex justify-between w-full rounded-t-lg p-4
    h-14 bg-yellow-500"
    >
      <h1 className="font-bold text-lg">
        Date: <span className="text-gray-800 font-semibold">{localDate}</span>
      </h1>

      <h1 className="font-bold text-lg">
        Time: <span className="text-gray-800 font-semibold">{localTime}</span>
      </h1>
    </div>
  );
};

export default Footer;
