import { useNavigate } from 'react-router-dom';
import Header from '../components/nav'
import axios from "axios";

function Driver_insert() {
    const navigate = useNavigate()
    const handleSubmit = (e) => {
    e.preventDefault();
    const formData = new FormData(e.target);
    const data = Object.fromEntries(formData);
    axios
      .post("http://127.0.0.1:8000/api/driver_insert", data)
      .then((res) => {
        navigate("/success")
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
        <input type="text" placeholder="name" name="name" required />
        <input
          type="number"
          placeholder="age"
          name="age"
          min="18"
          max="120"
          required
        />
        <input
          type="text"
          placeholder="license_no"
          name="license_no"
          required
        />

        <button type="submit">Submit</button>
      </form>
    </>
  );
}
export default Driver_insert;
