const Main = () => {
  return (
    <div className="flex p-2 flex-col border border-black w-11/12 rounded-lg">
      <section className="text-justify">
        <p>Paragraph tag</p>
      </section>
      <section className="mt-5">
        <form className="">
          <div>
            <label>Your name: </label>
            <input type="text" placeholder="John Doe" />
          </div>
          <div></div>
        </form>
      </section>
    </div>
  );
};

export default Main;
