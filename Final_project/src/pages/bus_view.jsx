import axios from "axios";
import Header from "../components/nav";
// import "./CSS/bus_view.css";
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
   
   <Header />
   <div className="flex justify-center items-center min-h-screen bg-gradient-to-br from-green-300 via-teal-300 to-gray-700 relative"> 
   <div className="bg-white rounded-lg shadow-xl overflow-hidden w-4/5 max-w-lg mx-auto"> 
   <table className="mb-2 min-w-full bg-gray-800 text-black"> 
   <caption className="text-2xl font-bold p-4 text-center bg-gray-50 text-gray-900 border-b border-gray-300 animate-pulse">Bus View</caption> 
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
      </div>
      </div>
    {/* <div className="table-container"> 
        <table className="table"> 
            <caption className="caption">Bus View</caption> 
            <thead> 
                <tr> 
                    <th>Bus ID</th> 
                    <th>Category</th> 
                    <th>License_No</th> 
                    <th>Assign</th> 
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
    </div>  */}
    </>
  );
}

export default Bus_view;
