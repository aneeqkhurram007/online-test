import Footer from "./components/Footer";
import Header from "./components/Header";
import Main from "./components/Main";

function App() {
  return (
    <div className="flex items-center justify-between flex-col w-screen h-screen">
      <Header />
      <Main />
      <Footer />
    </div>
  );
}

export default App;
