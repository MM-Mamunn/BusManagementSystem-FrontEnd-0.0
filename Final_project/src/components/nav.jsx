import { Link } from "react-router-dom";
import busImage from '../pages/image/bus2.png';
export default function Header() {
  return (
    <>
      <nav class="bg-blue-500 p-4">
        <div class="flex items-center justify-between">
          <div class="flex space-x-6">            
        <img className="w-24 h-8" src={busImage} alt="Bus" />
            <a href="/home" class="text-white hover:text-blue-200">
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
            <a href="/coming_soon" class="text-white hover:text-blue-200">
              Maintanance
            </a>
            <a href="/coming_soon" class="text-white hover:text-blue-200">
              Coming Soon
            </a>
            <a href="/about_us" class="text-white hover:text-blue-200">
              About Us
            </a>
          </div>
          <a href="#" class="bg-indigo-950 p-2  ml-5 text-white hover:text-blue-200 rounded">
             Bus Management
            </a>
        </div>
      </nav>
    </>
  );
}
