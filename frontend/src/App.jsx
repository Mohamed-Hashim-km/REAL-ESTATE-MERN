import { Route, Routes } from "react-router-dom";
import Login from "./registrations/Login";
import Sign from "./registrations/Sign";
import Homepage from "./screens/Homepage";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";

const App = () => {
  return (
    <>
    <Navbar/>
      <Routes>
        <Route path="/" element={<Homepage />} />
        <Route path="/*" element={<Homepage />} />
        <Route path="/login" element={<Login />} />
        <Route path="/sign" element={<Sign />} />
      </Routes>
      <Footer/>
    </>
  );
};

export default App;
