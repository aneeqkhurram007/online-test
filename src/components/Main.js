import TestButton from "./TestButton";

const Main = () => {
  return (
    <div
      className="flex p-2 flex-col bg-white z-50 h-60 border-2 shadow-2xl border-black
    w-11/12 rounded-lg"
    >
      <section className="text-justify h-1/3">
        <p>
          This sample quiz is designed to show you examples of the different
          question types you will come across in the 11 PlusDIY online
          programme.
        </p>
      </section>
      <section className="mt-5 h-full ">
        <form className="flex w-full h-full ">
          <div className="w-1/3 mt-4 space-x-2">
            <label className="bg-yellow-300 p-1 font-bold rounded-md">
              Your name:{" "}
            </label>
            <input
              className="p-1 rounded-md border border-black"
              type="text"
              placeholder="John Doe"
            />
          </div>
          <div className="w-4/6 flex flex-col space-y-2">
            {Array(4)
              .fill(
                <TestButton
                  text={`Take Maths quiz`}
                  url={`https://google.com`}
                />
              )
              .map((i) => i)}
          </div>
        </form>
      </section>
    </div>
  );
};

export default Main;
