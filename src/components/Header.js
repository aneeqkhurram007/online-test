import NavButton from "./NavButton";

const Header = () => {
  return (
    <div className="w-full flex justify-between p-4 bg-yellow-400 text-2xl font-bold text-center">
      <h1>Test Online</h1>
      <div className="space-x-2">
        {Array(3)
          .fill(<NavButton />)
          .map((i) => i)}
      </div>
    </div>
  );
};

export default Header;
