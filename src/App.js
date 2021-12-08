import Footer from "./components/Footer";
import Header from "./components/Header";
import Main from "./components/Main";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import TestPage from "./components/TestPage";
import Error from "./components/404";
function App() {
  return (
    <Router>
      <div
        className="flex items-center bg-gray-50
    justify-between flex-col w-screen h-screen"
      >
        <Header />
        <Routes>
          <Route path="/" element={<Main />} />
          <Route path="test-page" element={<TestPage />} />
          <Route path="*" element={<Error />} />
        </Routes>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
