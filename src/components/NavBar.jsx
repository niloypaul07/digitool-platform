import { CiShoppingCart } from "react-icons/ci";

const NavBar = ({ carts }) => {
  return (
    <div className="flex justify-between items-center px-3 sm:px-4 md:px-8 py-3 sm:py-4 shadow bg-white rounded-lg">
      
      {/* Logo */}
      <h1 className="bg-gradient-to-b from-[rgba(79,57,246,1)] to-[rgba(149,20,250,1)] 
        text-lg sm:text-xl md:text-2xl font-bold cursor-pointer text-transparent bg-clip-text">
        DigiTools
      </h1>

      {/* Menu (hidden on mobile) */}
      <nav className="hidden md:flex">
        <ul className="flex gap-6 items-center text-gray-600 font-medium">
          <li className="hover:text-primary cursor-pointer">Product</li>
          <li className="hover:text-primary cursor-pointer">Features</li>
          <li className="hover:text-primary cursor-pointer">Pricing</li>
          <li className="hover:text-primary cursor-pointer">Testimonials</li>
          <li className="hover:text-primary cursor-pointer">FAQ</li>
        </ul>
      </nav>

     
      <div className="flex items-center gap-2 sm:gap-3 md:gap-5">
        
       
        <div className="relative cursor-pointer flex items-center justify-center">
          <CiShoppingCart className="text-base sm:text-lg md:text-2xl hover:text-primary transition" />

          {carts?.length > 0 && (
            <span className="
              absolute 
              -top-2 -right-2 
              sm:-top-2 sm:-right-2 
              md:-top-3 md:-right-3
              min-w-4 h-4
              sm:min-w-4.5 sm:h-4.5 
              md:min-w-5 md:h-5
              flex items-center justify-center
              bg-red-500 text-white 
              text-[9px] sm:text-[10px] md:text-xs 
              font-bold px-1 rounded-full
            ">
              {carts.length > 99 ? "99+" : carts.length}
            </span>
          )}
        </div>

       
        <h2 className="hidden sm:block text-xs sm:text-sm md:text-base font-medium cursor-pointer hover:text-primary">
          Login
        </h2>

       
        <button className="bg-linear-to-b from-[rgba(79,57,246,1)] to-[rgba(149,20,250,1)] 
          text-white text-[10px] sm:text-sm md:text-base 
          px-2.5 sm:px-4 md:px-5 py-1 sm:py-2 
          rounded-full whitespace-nowrap">
          Get Started
        </button>

      </div>
    </div>
  );
};

export default NavBar;