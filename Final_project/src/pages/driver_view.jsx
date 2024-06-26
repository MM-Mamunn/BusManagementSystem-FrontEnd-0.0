import axios from "axios";
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
      <table class="border border-collapse border-blue-500">
        <thead>
          <tr>
            <th class="p-2 bg-blue-200">Name</th>
            <th class="p-2 bg-blue-200">License No</th>
          </tr>
        </thead>
        <tbody>
          {drivers?.map((iterate) => (
            <tr key={iterate?.license_no} class="hover:bg-blue-100">
              <td class="p-2">{iterate?.name}</td>
              <td class="p-2">{iterate?.license_no}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </>
  );
}

export default Driver_view;
