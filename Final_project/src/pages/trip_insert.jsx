import { useNavigate } from "react-router-dom";
import Header from "../components/nav";
import Tripheader from "../components/trip_nav";
import axios from "axios";
import Footer from '../components/footer'

function Trip_insert() {
  const navigate = useNavigate();
  const handleSubmit = (e) => {
    e.preventDefault();
    const formData = new FormData(e.target);
    const data = Object.fromEntries(formData);
    axios
      .post("http://127.0.0.1:8000/api/trip_insert", data)
      .then((res) => {
        navigate("/success");
        // console.log(res);
      })
      .catch((error) => {
        navigate("/failed");
      });
  };
  return (
    <>
     <Header/>
    <div style ={{position:"sticky", top: "0", left: "0"}}>
     <Tripheader/>
     </div>
      <form onSubmit={handleSubmit} className="mt-10">
        <a className="bg-green-500 text-white px-1 py-1 mx-2 rounded  my-2  " href="/driver_insert" >Insert Driver</a>
        <input
          type="text"
          placeholder="Driver Id"
          id="driver_id"
          name="driver_id"
          required
        />
        <input type="text" placeholder="Bus Id" name="bus_id" required />
        <input
          type="date"
          placeholder="Date"
          name="date"
          className="mb-4 h-10"
          required
        />
        <input
          type="text"
          placeholder="Route"
          name="route_name"
          required
        />
        <button class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-1 px-6 mx-1 rounded">
          Insert
        </button>
      </form><footer style ={{position: "fixed" , top:"87vh", width:"100vw"}}>
      <Footer/>
      </footer>
    </>
  );
}
export default Trip_insert;
