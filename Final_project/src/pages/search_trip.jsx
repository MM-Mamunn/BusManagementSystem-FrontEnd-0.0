import { useNavigate } from "react-router-dom";
import Header from "../components/nav";
import axios from "axios";
import { useState } from "react";
import { useEffect } from "react";

function Search_trip() {
  const [drivers, setdrivers] = useState([]);
  const navigate = useNavigate();
  const handleSubmit = (e) => {
    e.preventDefault();
    const formData = new FormData(e.target);
    const data = Object.fromEntries(formData);
    axios
      .get(
        `http://127.0.0.1:8000/api/search_trip?driver_id=${data.driver_id}&limit=1000`
      )
      .then((res) => {
        // navigate("/result_search_trip")
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
      <form className="ml-80 mt-2 w-1/2" onSubmit={handleSubmit}>
        <input 
          type="text"
          placeholder="driver_id"
          id="driver_id"
          name="driver_id"
          required
        />
        <button class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
          search
        </button>
      </form>
      

      {drivers.length !== 0 && (
        <table className=" border-blue-500 rounded-sm ml-80 mt-4 ">
          <thead>
            <tr>
              <th className="p-2 bg-blue-200 ">Driver id</th>
              <th className="p-2 bg-blue-200">Name</th>
              <th className="p-2 bg-blue-200">Bus Id</th>
              <th className="p-2 bg-blue-200">date</th>
            </tr>
          </thead>
          <tbody>
            {drivers?.map((iterate, i) => (
              <tr key={i} className="hover:bg-blue-100">
                <td className="p-2 bg-green-200">{iterate?.driver_id}</td>
                <td className="p-2 bg-green-200">{iterate?.name}</td>
                <td className="p-2 bg-green-200">{iterate?.age}</td>
                <td className="p-2 bg-green-200">{iterate?.date}</td>
              </tr>
            ))}
          </tbody>
        </table>
      )}
    </>
  );
}
export default Search_trip;
