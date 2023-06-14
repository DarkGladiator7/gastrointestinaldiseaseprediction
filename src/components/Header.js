import React from "react";
import { cartImg, logo, userLogo } from "../assests";
import { Link } from "react-router-dom";


const Header = () => {
  
  return (
    <div className="w-full h-20 bg-white rounded-full   border-b-[1px] border-b-gray-800 font-titleFont sticky top-0 z-50">
      <div className="max-w-screen-xl h-full mx-auto flex items-center justify-between">
        <Link to="/">
          <div className=" cursor-pointer">
            <img className="w-60" src={logo} alt="logo" />
          </div>
        </Link>
        <div className="flex items-center gap-8">
          <ul className="flex items-center gap-8">
            <Link to="/">
              <li className="text-base font-bold hover:text-orange-900 hover:underline underline-offset-2 decoration-[1px] cursor-pointer duration-300 ">
                Home
              </li>
            </Link>

            <li className="text-base font-bold hover:text-orange-900 hover:underline underline-offset-2 decoration-[1px] cursor-pointer duration-300 ">
              HealthCare
            </li>
            <li className="text-base font-bold hover:text-orange-900 hover:underline underline-offset-2 decoration-[1px] cursor-pointer duration-300 ">
              Explore
            </li>
            <li className="text-base font-bold hover:text-orange-900 hover:underline underline-offset-2 decoration-[1px] cursor-pointer duration-300 ">
              Blog
            </li>
          </ul>
          {/* <Link to="/">
            <div className="relative">
              <img className=" w-8 h-8" src={cartImg} alt="cart" />
              
            </div>
          </Link> */}
          <Link to="/">
            <img
              className="w-8 h-8 rounded-full"
              src={userLogo}
              alt="userLogo"
            />
          </Link>
          {/* {userInfo && <p>{userInfo.name}</p>} */}
        </div>
      </div>
    </div>
  );
};

export default Header;
