import Header from '../components/nav'
import "./CSS/drivers_home.css";
import Footer from '../components/footer'

function Bus_home() {
  return (
    <>
     <Header/>
     <ul id = "lists" className="list-none list-disc ml-20 mt-5">
  <li className="bg-blue-500 text-white px-4 py-2 rounded m-5  "><a href="/bus_view" >All Buss(s)</a></li>
  <li className="bg-green-500 text-white px-4 py-2 rounded m-5 "><a href="/total_distance" >Count Totall distance</a></li>
  <li  className="bg-yellow-500 text-white px-4 py-2 rounded m-5 "><a href="/bus_delete">Delete Bus</a></li>
  <li className="bg-red-500 text-white px-4 py-2 rounded m-5 "><a href="" >Option 4</a></li>
  <li className="bg-purple-500 text-white px-4 py-2 rounded m-5 "><a href="" >Option 5</a></li>
</ul>

<footer style ={{position: "fixed" , top:"87vh", width:"100vw"}}>
      <Footer/>
      </footer>
    </>
  );
}

export default Bus_home;