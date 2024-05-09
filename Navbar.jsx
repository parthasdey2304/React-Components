import { Link } from "react-router-dom";
import { useState } from "react";

function Navbar({ logo = "LOGO", links = [], active = null, user_val = false, user_img = null }) {
  const [isLoggedIn, setIsLoggedIn] = useState(user_val);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(prevState => !prevState);
  };

  return (
    <div name="Navbar" className="w-full fixed z-50 top-0 bg-transparent backdrop-blur-xl flex justify-between items-center p-4">
        <div className="md:px-4">
            <Link to="/" className="text-white text-4xl md:text-5xl font-semibold font-['Jersey']">{ logo }</Link>
        </div>

        <div className="md:hidden">
            <button data-tooltip-target="tooltip-default" type="button" className="ri-menu-line text-white font-bold text-3xl hover:bg-white/30 duration-300 hover:duration-300 p-1 rounded" onClick={toggleMenu}></button>
        </div>

        <div className={`md:hidden fixed top-0 left-0 w-full bg-gray-900 backdrop-blur-xl z-50 transition-all ${isMenuOpen ? 'h-screen' : 'h-0'} overflow-hidden`}>
            <ul className="flex flex-col items-center justify-center h-full">
                {links.map((link, index) => (
                    <li key={index} className={`text-white text-xl font-normal px-4 py-2 hover:bg-white/30 duration-300 hover:duration-300 rounded font-['Poppins'] cursor-pointer ${active === link ? 'bg-white/30' : ''}`}>
                        <Link to={`/${link.toLowerCase()}`} onClick={toggleMenu}>{link}</Link>
                    </li>
                ))}
                <li className="text-white text-3xl cursor-pointer pt-4 hover:bg-white hover:text-black duration-300 hover:duration-300" onClick={toggleMenu}>×</li>
            </ul>
        </div>

        <div className='hidden md:block'>
            <ul className="flex space-x-1 justify-center">
                {links.map((link, index) => (
                    <li key={index} className={`text-xl font-normal px-4 py-1 hover:bg-white/30 duration-300 hover:duration-300 rounded font-['Poppins'] cursor-pointer ${active === link ? 'bg-white/30 text-white' : 'text-white'}`}>
                        <Link to={`/${link.toLowerCase()}`}>{link}</Link>
                    </li>
                ))}
            </ul>
        </div>

        {/* <div className='hidden md:block'>
            {isLoggedIn ? (
                <div className="flex items-center space-x-4 md:pt-2 md:pr-4">
                    <div className="w-[40px] h-[40px] rounded-full overflow-hidden bg-white cursor-pointer">
                        <img src={user_img} alt="" className="w-full h-full object-cover rounded-full" />
                    </div>
                </div>
            ) : (
                <div className='flex space-x-4 md:pt-2 md:pr-4'>
                    <button data-modal-target="authentication-modal" data-modal-toggle="authentication-modal" className="text-white text-xl font-normal px-4 py-2 hover:bg-white/30 duration-300 hover:duration-300 rounded font-['Poppins']" type="button">Login</button>
                    <Link to="/register" className="text-black text-xl font-semibold px-4 pt-2.5 pb-1 -mt-1 bg-white duration-300 hover:duration-300 rounded font-['Poppins'] hover:bg-blue-600 hover:text-white">Register</Link>
                </div>
            )}
        </div> */}
    </div>
  );
}

export default Navbar;
