import { Link } from "react-router-dom";

export default function Header() {
  return (
    <>
      <nav class="bg-blue-500 p-4">
        <div class="flex items-center justify-between">
          <div class="flex space-x-4">
            <a href="/home" class="text-white hover:text-blue-200">
              Home
            </a>
            <a href="/driver_view" class="text-white hover:text-blue-200">
              Drivers
            </a>
            <a href="/drivers_home" class="text-white hover:text-blue-200">
              Drivers_home
            </a>
            <a href="#" class="text-white hover:text-blue-200">
              Portfolio
            </a>
            <a href="#" class="text-white hover:text-blue-200">
              Contact
            </a>
          </div>
        </div>
      </nav>
    </>
  );
}
