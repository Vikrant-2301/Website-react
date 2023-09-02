import { Route, Routes } from "react-router-dom";
import "./App.css";
import Main from "./components/Main/Main";
import Flipbook from "./components/Flipbook/Flipbook";

const App = () => {
  return (
    <>
      <Routes>
        <Route path="/" element={<Main />} />
        <Route path="/flipbook" element={<Flipbook />} />
      </Routes>
    </>
  );
};

export default App;
