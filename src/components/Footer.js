import { useEffect, useState } from "react";

const Footer = () => {
  const [time, settime] = useState(new Date().toLocaleTimeString());
  useEffect(() => {
    setTimeout(() => {
      settime(new Date().toLocaleTimeString());
    }, 1000);
  }, [time]);
  return (
    <div className="flex justify-between w-full rounded-t-lg p-4 h-28 bg-yellow-500">
      <h1 className="font-bold text-lg">
        Date: {new Date().toLocaleDateString()}
      </h1>
      <h1 className="font-bold text-lg">Time: {time}</h1>
    </div>
  );
};

export default Footer;
