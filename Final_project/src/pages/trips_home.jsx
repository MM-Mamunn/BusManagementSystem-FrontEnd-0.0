
import Header from '../components/nav'


function Trip_home() {
  return (
    <>
     <Header/>
     <ul className="list-disc ml-20 mt-5">
  <li className="bg-blue-500 text-white px-4 py-2 rounded m-5  "><a href="/search_trip" >Search Trip</a></li>
  <li className="bg-green-500 text-white px-4 py-2 rounded m-5 "><a href="/trip_all" >Show All Trip</a></li>
  <li  className="bg-yellow-500 text-white px-4 py-2 rounded m-5 "><a href="">Option 3</a></li>
  <li className="bg-red-500 text-white px-4 py-2 rounded m-5 "><a href="" >Option 4</a></li>
  <li className="bg-purple-500 text-white px-4 py-2 rounded m-5 "><a href="" >Option 5</a></li>
</ul>
    </>
  );
}

export default Trip_home;
