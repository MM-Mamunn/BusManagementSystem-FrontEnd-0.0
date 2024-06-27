import axios from "axios";
import Header from "../components/nav";
import "./CSS/driver_view.css";
import { useState } from "react";
import { useEffect } from "react";

function Driver_view() {
  const [drivers, setdrivers] = useState([]);
  useEffect(() => {
    axios
      .get("http://127.0.0.1:8000/api/driver_view?limit=1000")
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
     
      <table class=" border-blue-500 rounded-sm ml-80 mt-4">
        <thead>
          <tr>
            <td colspan="3"> <a className="bg-green-500 text-white px-1 py-1 mx-36 rounded  ml-20 " href="/driver_view" >All Drivers</a></td>
          </tr>
          <tr>          
            <th class="p-2 bg-blue-200 ">Driver id</th>
            <th class="p-2 bg-blue-200">Name</th>
            <th class="p-2 bg-blue-200">Age</th>
            <th class="p-2 bg-blue-200">License No</th>
          </tr>
        </thead>
        <tbody>
          {drivers?.map((iterate) => (
            <tr key={iterate?.license_no} class="hover:bg-blue-100">
              <td class="p-2 bg-green-200">{iterate?.driver_id}</td>
              <td class="p-2 bg-green-200">{iterate?.name}</td>
              <td class="p-2 bg-green-200">{iterate?.age}</td>
              <td class="p-2 bg-green-200">{iterate?.license_no}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </>
  );
}

export default Driver_view;
