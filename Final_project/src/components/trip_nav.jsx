import { Link } from "react-router-dom";

import tripImage from '../pages/image/trip.png';
export default function Tripheader() {
  return (
    <>
      <nav class="bg-red-500 ">
        <div class="flex items-center justify-between">
          <div class="flex space-x-6">         

          <img className="w-16 h-12" src={tripImage} alt="Bus" />
            <a  style={{padding: "10px"}} href="/trip_all" class="text-white hover:text-blue-200">
              Show Trip
            </a>
            <a style={{padding: "10px"}} href="/search_trip" class="text-white hover:text-blue-200">
              Search Trip
            </a>
            <a style={{padding: "10px"}} href="/count_trip" class="text-white hover:text-blue-200">
              Count Trips
            </a>
            <a style={{padding: "10px"}} href="/trip_insert" class="text-white hover:text-blue-200">
              Insert New trip
            </a>
            <a style={{padding: "10px"}} href="#" class="text-white hover:text-blue-200">
              Cancel Trip
            </a>
          </div>
          <a href ="/trips_home" style={{padding: "10px",width:"130px"}} class="bg-indigo-950 p-2  text-white hover:text-blue-200 rounded">
             Trips Home
            </a>
        </div>
      </nav>
    </>
  );
}
