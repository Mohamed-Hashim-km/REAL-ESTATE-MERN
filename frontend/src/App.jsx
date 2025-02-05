import { Route, Routes } from "react-router-dom";
import Login from "./registrations/Login";
import Sign from "./registrations/Sign";
import Homepage from "./screens/Homepage";

const App = () => {
  return (
    <>
      <Routes>
        <Route path="/home" element={<Homepage />} />
        <Route path="/*" element={<Homepage />} />
        <Route path="/login" element={<Login />} />
        <Route path="/" element={<Sign />} />
      </Routes>
    </>
  );
};

export default App;
