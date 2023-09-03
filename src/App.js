import { Route, Routes } from "react-router-dom";
import "./App.css";
import Main from "./components/Main/Main";
import ShoppingComplex from "./components/Flipbook/ShoppingComplex";
import Landscaping from "./components/Flipbook/Landscaping";

const App = () => {
  return (
    <>
      <Routes>
        <Route path="/" element={<Main />} />
        <Route path="/ShoppingComplex" element={<ShoppingComplex />} />
        <Route path="/Landscaping" element={<Landscaping />} />
      </Routes>
    </>
  );
};

export default App;
