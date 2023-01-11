import "./App.css";
import Navbar from "./components/Navbar";
import { Route, Routes } from "react-router-dom";
import Home from "./components/Home";
import CS207 from "./components/CS207"
import CS206 from "./components/CS206"
import CS208 from "./components/CS208"
import CS209 from "./components/CS209";
import MH206 from "./components/MH206"
import Footer from "./components/Footer";


function App() {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/CS-206" element={<CS206/>} />
        <Route path="/CS-207" element={<CS207 />} />
        <Route path="/CS-208" element={<CS208 />} />
        <Route path="/CS-209" element={<CS209 />}/>
        <Route path = "/MH-206" element={<MH206 />}/>
      </Routes>
      <Footer/>
    </>
  );
}

export default App;
