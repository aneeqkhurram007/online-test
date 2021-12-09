import { useEffect } from "react";
import useStateValue from "../utils/StateValue";

const TestPage = () => {
  const [{ timer }, dispatch] = useStateValue();
  useEffect(() => {
    setTimeout(() => {
      dispatch({
        type: "TimerUpdate",
        payload: timer < 30 ? timer + 1 : 0,
      });
    }, 1000);
  }, [timer, dispatch]);
  return (
    <div className="flex w-11/12 shadow-lg h-4/6 rounded-lg">
      <section className="w-1/6 border bg-yellow-200 border-black h-full rounded-l-lg ">
        <div
          className="flex flex-col w-full
        border-b-2 border-yellow-400
        text-center mt-4"
        >
          <h2 className="font-semibold">Remaining Time</h2>
          <h3>00:00:{timer}</h3>
        </div>
        <div className="grid grid-cols-3 p-2">
          {Array(30)
            .fill(0)
            .map((i, index) => (
              <div className=" rounded-lg border border-black bg-white text-center">
                {index}
              </div>
            ))}
        </div>
        <div className="w-full flex flex-row justify-between text-xs">
          <div className="flex flex-col">
            <p>Current</p>
            <div className="w-4 h-4 rounded-lg ml-4 bg-yellow-600"></div>
          </div>
          <div className="flex flex-col">
            <p>Answered</p>
            <div className="w-4 h-4 rounded-lg ml-4 bg-green-600"></div>
          </div>
          <div className="flex flex-col">
            <p>Unanswered</p>
            <div className="w-4 h-4 rounded-lg ml-4 bg-red-600"></div>
          </div>
        </div>
      </section>
      <section className="flex-1 border border-black h-full rounded-r-lg "></section>
    </div>
  );
};

export default TestPage;
