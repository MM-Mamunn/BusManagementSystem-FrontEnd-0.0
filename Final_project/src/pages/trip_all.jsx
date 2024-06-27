import axios from "axios";
import Header from '../components/nav'
import "./CSS/driver_view.css";
import { useState } from "react";
import { useEffect } from "react";
import Tripheader from '../components/trip_nav';
function Trip_all() {
  const [trips, setdrivers] = useState([]);
  useEffect(() => {
    axios
      .get("http://127.0.0.1:8000/api/trip_all?limit=1000")
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
     <Header/>
     <Tripheader/>
      <table class=" border-blue-500 rounded-sm ml-80 my-4">
        <thead>
          <tr>
            <th class="p-2 bg-blue-200 ">Driver id</th>
            <th class="p-2 bg-blue-200 ">Driver Name</th>
            <th class="p-2 bg-blue-200">Bus id</th>
            <th class="p-2 bg-blue-200">Date</th>
            <th class="p-2 bg-blue-200">Route</th>
          </tr>
        </thead>
        <tbody>
          {trips?.map((iterate) => (
            <tr key={iterate?.bus_id} class="hover:bg-blue-100">
              <td class="p-2 bg-green-200">{iterate?.driver_id}</td>
              <td class="p-2 bg-green-200">{iterate?.name}</td>
              <td class="p-2 bg-green-200">{iterate?.bus_id}</td>
              <td class="p-2 bg-green-200">{iterate?.date}</td>
              <td class="p-2 bg-green-200">{iterate?.route_name}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </>
  );
}

export default Trip_all;
