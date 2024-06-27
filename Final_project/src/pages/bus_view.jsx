import axios from "axios";
import Header from "../components/nav";
import "./CSS/driver_view.css";
import { useState } from "react";
import { useEffect } from "react";

function Bus_view() {
  const [bus, setdrivers] = useState([]);
  useEffect(() => {
    axios
      .get("http://127.0.0.1:8000/api/bus_view?limit=1000")
      .then((res) => {
        setdrivers(res?.data?.data?.users);
        console.log(res);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);
  return (
    <>
   
   <Header />
      <table className=" border-blue-500 rounded-sm  ml-80 mt-4" >
        <thead>
          <tr >
          <th className="p-2 bg-blue-200 ">Bus ID</th>
            <th className="p-2 bg-blue-200">Category</th>
            <th className="p-2 bg-blue-200">license_no</th>
            <th className="p-2 bg-blue-200">Assign</th>
          </tr>
        </thead>
        <tbody>
          {bus?.map((iterate) => (
            <tr key={iterate?.bus_id} className="hover:bg-blue-100">
              
              <td className="p-2 bg-green-200">{iterate?.bus_id}</td>  
              <td className="p-2 bg-green-200">{iterate?.category}</td>
              <td className="p-2 bg-green-200">{iterate?.license_no}</td>
              <td className="p-2 bg-green-200">{iterate?.assign}</td>
            </tr>
          ))}
        </tbody>
      </table>

    </>
  );
}

export default Bus_view;
