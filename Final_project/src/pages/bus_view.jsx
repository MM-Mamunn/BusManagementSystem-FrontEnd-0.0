import axios from "axios";
// import "./CSS/driver_view.css";
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
   
      <table class=" border-blue-500 rounded-sm" >
        <thead>
          <tr >
          <th class="p-2 bg-blue-200 ">Bus ID</th>
            <th class="p-2 bg-blue-200">Category</th>
            <th class="p-2 bg-blue-200">license_no</th>
            <th class="p-2 bg-blue-200">Assign</th>
          </tr>
        </thead>
        <tbody>
          {bus?.map((iterate) => (
            <tr key={iterate?.bus_id} class="hover:bg-blue-100">
              
              <td class="p-2 bg-green-200">{iterate?.bus_id}</td>  
              <td class="p-2 bg-green-200">{iterate?.category}</td>
              <td class="p-2 bg-green-200">{iterate?.license_no}</td>
              <td class="p-2 bg-green-200">{iterate?.assign}</td>
            </tr>
          ))}
        </tbody>
      </table>

    </>
  );
}

export default Bus_view;
