const TestButton = ({ text, url }) => {
  return (
    <a
      href={url}
      className="cursor-pointer
  border border-yellow-500 w-full text-center rounded-lg bg-yellow-300
  text-black
  "
    >
      {text}
    </a>
  );
};

export default TestButton;
