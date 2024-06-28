import { useNavigate } from "react-router-dom";
import Header from "../components/nav";
import axios from "axios";
import "./CSS/main.css";
import { useState } from "react";
import { useEffect } from "react";
// import Tripheader from '../components/trip_nav';

function Bus_distane() {
  const [drivers, setdrivers] = useState([]);
  const navigate = useNavigate();
  const handleSubmit = (e) => {
    e.preventDefault();
    const formData = new FormData(e.target);
    const data = Object.fromEntries(formData);
    axios
      .get(
        `http://127.0.0.1:8000/api/total_distance?limit=1000`
      )
      .then((res) => {
        // navigate("/bus_distane")
        console.log(res);
        setdrivers([]);
        setdrivers(res.data.data.users);
      })
      .catch((error) => {
        navigate("/failed");
      });
  };
  return (
    <>
      <Header />
      {/* <Tripheader/> */}
      <form style={{marginLeft:"30vw" , width:"40vw"}} id= "bus_distane_box" className="mt-4 w-1/2" onSubmit={handleSubmit}>
      <label for="too">From</label>
        <input 
          type="Date"
          placeholder="From "
          id="fromm"
          name="fromm"
          required
        />
        <label for="too">To</label>
        <input 
          type="Date"
          placeholder="To"
          id="too"
          name="too"
          required
        />
        <button class="mt-4 block bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
          Totall distances
        </button>
      </form>
      

      {drivers.length !== 0 && (
        <table style={{width: "20vw",marginLeft:"30vw" , width:"26vw" }} className=" border-blue-500 rounded-sm ml-80 mt-4 ">
          <thead>
            <tr>
              <th className="p-2 bg-blue-200 ">Bus id</th>
              <th className=" bg-blue-200">Totall distance (KM)</th>
            </tr>
          </thead>
          <tbody>
            {drivers?.map((iterate, i) => (
              <tr key={i} className="hover:bg-blue-100">
                <td style ={{textAlign: "center"}} className="p-2 bg-green-200">{iterate?.bus_id}</td>
                <td style ={{textAlign: "center"}} className="p-2 bg-green-200">{iterate?.total_dis}</td>
              </tr>
            ))}
          </tbody>
        </table>
      )}
    </>
  );
}
export default Bus_distane;
