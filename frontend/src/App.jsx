import { Route, Routes } from "react-router-dom";
import Login from "./registrations/Login";
import Sign from "./registrations/Sign";

const App = () => {
  return (
    <>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/ss" element={<Sign />} />
      </Routes>
    </>
  );
};

export default App;
