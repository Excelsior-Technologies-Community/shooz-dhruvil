import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import Header from "./Components/Header";
import Navbar from "./Components/Navbar";
import LandingPage from "./Components/LandingPage";
import Collection from "./Components/Collection";

function App() {
  return (
    <>
      <BrowserRouter>
        <Header />
        <Navbar />
        <Routes>
          <Route path="/" element={<LandingPage />} />
          <Route path="/collections" element={<Collection />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
