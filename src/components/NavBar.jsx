import { CiShoppingCart } from "react-icons/ci";


const NavBar = () => {
  return (
    <div className="flex  justify-between items-center px-3 md:flex md:justify-between md:px-8 py-4 shadow bg-white  rounded-lg">
      {/* Logo */}

      

      <div>
        <h1 className="bg-linear-to-b from-[rgba(79,57,246,1)] to-[rgba(149,20,250,1)] text-2xl font-bold  cursor-pointer text-transparent bg-clip-text">
          DigiTools
        </h1>
      </div>

      {/* Menu */}
      <nav className="hidden md:flex justify-center items-center">
        <ul className="flex gap-6 items-center text-gray-600 font-medium">
          <li className="hover:text-primary cursor-pointer transition">
            Product
          </li>
          <li className="hover:text-primary cursor-pointer transition">
            Features
          </li>
          <li className="hover:text-primary cursor-pointer transition">
            Pricing
          </li>
          <li className="hover:text-primary cursor-pointer transition">
            Testimonials
          </li>
          <li className="hover:text-primary cursor-pointer transition">FAQ</li>
        </ul>
      </nav>

      {/* Right Side */}
      <div className="flex gap-3 md:gap-5 items-center">
        <CiShoppingCart
 className="hidden md:text-xl cursor-pointer hover:text-primary transition" />

        <h2 className="text-sm font-medium cursor-pointer hover:text-primary">
          Login
        </h2>

        <button className="bg-linear-to-b from-[rgba(79,57,246,1)] to-[rgba(149,20,250,1)] btn btn-primary rounded-full px-5">
          Get Started
        </button>
      </div>
      </div>
      
    
  );
};

export default NavBar;