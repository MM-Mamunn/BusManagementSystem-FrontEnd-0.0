
import Header from '../components/nav'


function Bus_home() {
  return (
    <>
     <Header/>
     <ul className="list-disc ml-20 mt-5">
  <li className="bg-blue-500 text-white px-4 py-2 rounded m-5  "><a href="/bus_view" >All Buss(s)</a></li>
  <li className="bg-green-500 text-white px-4 py-2 rounded m-5 "><a href="#" >ouiqw</a></li>
  <li  className="bg-yellow-500 text-white px-4 py-2 rounded m-5 "><a href="">Option 3</a></li>
  <li className="bg-red-500 text-white px-4 py-2 rounded m-5 "><a href="" >Option 4</a></li>
  <li className="bg-purple-500 text-white px-4 py-2 rounded m-5 "><a href="" >Option 5</a></li>
</ul>
    </>
  );
}

export default Bus_home;
