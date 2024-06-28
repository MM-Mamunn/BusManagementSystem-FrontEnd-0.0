import { useNavigate } from "react-router-dom";
import Header from "../components/nav";
import axios from "axios";
import { useState } from "react";
import { useEffect } from "react";
// import Tripheader from '../components/trip_nav';

function Bus_delete() {
  const [drivers, setdrivers] = useState([]);
  const navigate = useNavigate();
  const handleSubmit = (e) => {
    e.preventDefault();
    const formData = new FormData(e.target);
    const data = Object.fromEntries(formData);
    axios
      .get(
        `http://127.0.0.1:8000/api/bus_delete?bus_id=${data.bus_id}&limit=1000`
      )
      .then((res) => {
        navigate("/success");
      })
      .catch((error) => {
        navigate("/failed");
      });
  };
  return (
    <>
      <Header />
      {/* <Tripheader/> */}
      <form  className=" mt-2 w-1/2" onSubmit={handleSubmit}>
        <input 
          type="text"
          placeholder="Bus Id"
          id="bus_id"
          name="bus_id"
          required
        />
        <button class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
          Delete
        </button>
      </form>
      
    </>
  );
}
export default Bus_delete;
