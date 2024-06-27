import { Link } from "react-router-dom";

export default function Tripheader() {
  return (
    <>
      <nav class="bg-red-500 p-4">
        <div class="flex items-center justify-between">
          <div class="flex space-x-6">     
            <a href="/trips_home" class="text-white hover:text-blue-200">
              Home
            </a>
            <a href="/trips_home" class="text-white hover:text-blue-200">
              Trip Home
            </a>
            <a href="/drivers_home" class="text-white hover:text-blue-200">
              Drivers Home
            </a>
            <a href="/bus_home" class="text-white hover:text-blue-200">
              Bus Home
            </a>
            <a href="#" class="text-white hover:text-blue-200">
              Contact
            </a>
          </div>
          <a href="#" class="bg-indigo-950 p-2  ml-5 text-white hover:text-blue-200 rounded">
             Trips Home
            </a>
        </div>
      </nav>
    </>
  );
}
