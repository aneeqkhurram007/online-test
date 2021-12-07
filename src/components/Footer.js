import { useEffect, useState } from "react";

const Footer = () => {
  const [time, settime] = useState(Date.now());
  useEffect(() => {
    settime(Date.now());
  });
  return (
    <div className="flex justify-between w-full rounded-t-lg p-4 h-28 bg-red-500">
      <h1 className="font-bold text-lg">
        Date: {new Date().toLocaleDateString()}
      </h1>
      <h1>Time: {time}</h1>
    </div>
  );
};

export default Footer;
