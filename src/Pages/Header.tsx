import logo from "../assets/download.png";
import { ShoppingCart } from "lucide-react";
import { Link } from "react-router-dom";
import { useEffect, useState } from "react";

const Header = () => {
  const [isActive, setActive] = useState(false);
  useEffect(() =>{
    window.addEventListener('scroll', () =>{
      window.scrollY > 50 ? setActive(true) : setActive(false);
    })
  })
  return (
    <header className={`${isActive? 'border-b-2' : ''} fixed top-0 left-0 w-full z-50`}>
      <section className={`${isActive? 'py-3 md:py-1' : 'py-5'} container mx-auto bg-white transition-all`}>
        <div className="w-full mx-auto xl:w-[80%] lg:w-[90%] px-4 flex justify-between items-center ">
          <Link to="/">
            <img src={logo} alt="" className="w-20 md:w-28 cursor-pointer" />
          </Link>
          <button className="relative">
            <div className="absolute top-0 right-0 size-5 bg-red-500  translate-x-3 -translate-y-3   rounded-full flex justify-center items-center text-sm">
              0
            </div>
            <ShoppingCart className="size-6 md:size-8" />
          </button>
        </div>
      </section>
    </header>
  );
};

export default Header;
