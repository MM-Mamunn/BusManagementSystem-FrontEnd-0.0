import "./CSS/drivers_home.css";
import Header from '../components/nav';
import Driverheader from '../components/driver_nav';


function Driver_home() {
  return (
    <>
     <Header/>
     <Driverheader/>
     <ul id = "lists" className="list-none list-disc ml-20 mt-5">
  <li className="bg-blue-500 text-white px-4 py-2 rounded m-5  "><a href="/driver_insert" >Insert Driver</a></li>
  <li  className="bg-green-500 text-white px-4 py-2 rounded m-5 "><a href="/driver_view" >Show All Driver</a></li>
  <li  className="bg-yellow-500 text-white px-4 py-2 rounded m-5 "><a href="">Option 3</a></li>
  <li className="bg-red-500 text-white px-4 py-2 rounded m-5 "><a href="" >Option 4</a></li>
  <li  className="bg-purple-500 text-white px-4 py-2 rounded m-5 "><a href="" >Option 5</a></li>
</ul>
    </>
  );
}

export default Driver_home;
