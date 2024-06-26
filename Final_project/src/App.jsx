import axios from "axios";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./App.css";
import Home from "./pages/home";
import Details from "./pages/details";
import Driver_insert from "./pages/driver_insert";
import Success from "./pages/success";
import Driver_view from "./pages/driver_view";
import Bus_view from "./pages/bus_view";
import Failed from "./pages/failed";
//import  './driver_insert.jsx';
function App() {
  return (
    <>
      <div>
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Home/>} />
            <Route path="/home" element={<Home/>} />
            <Route path="/details" element={<Details/>} />
            <Route path="/driver_insert" element={<Driver_insert/>} />
            <Route path="/success" element={<Success/>} />
            <Route path="/driver_view" element={<Driver_view/>} />
            <Route path="/failed" element={<Failed/>} />
            <Route path="/bus_view" element={<Bus_view/>} />
          </Routes>
        </BrowserRouter>
      </div>
    </>
  );
}
export default App;
