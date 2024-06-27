import { useNavigate } from 'react-router-dom';
import Header from '../components/nav'
import axios from "axios";

function  Search_trip() {
    const navigate = useNavigate()
    const handleSubmit = (e) => {
    e.preventDefault();
    const formData = new FormData(e.target);
    const data = Object.fromEntries(formData);
    axios
      .post("http://127.0.0.1:8000/api/search_trip", data)
      .then((res) => {
        navigate("/result_search_trip")
        // console.log(res);
      })
      .catch((error) => {
        navigate("/failed")
      });
  };
  return (
    <>
     <Header/>
      <h1>Driver Information Form</h1>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="driver_id"
          id="driver_id"
          name="driver_id"
          required
        />
        <button type="submit">Submit</button>
      </form>
    </>
  );
}
export default Search_trip;
