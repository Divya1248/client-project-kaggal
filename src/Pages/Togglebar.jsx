import React, { useState } from "react";
import Home from "./Home";
import { RiCompass3Line } from "react-icons/ri";
import { GiTrophyCup } from "react-icons/gi";
import { RiTableLine } from "react-icons/ri";
import { BsCode } from "react-icons/bs";
import { GiHamburgerMenu } from "react-icons/gi";
import { AiOutlinePlus } from "react-icons/ai";
import { BsChatRightText } from "react-icons/bs";
import { FcGraduationCap } from "react-icons/fc";
import { BsChevronDown } from "react-icons/bs";
import LeftMenu from "./LeftMenu";
import IconsToggle from "./IconsToggle";

const Togglebar = (props) => {
    let { toggleButton ,state} = props;
  
 
  return (
    <>
      {state === false ? (
        <div className="basis-1/5 flex flex-col  border-r-4">
          <div className="fixed ">
            <div className="w-[80%] mx-aut flex justify-center pl-5 pt-5 ">
              <span className="p-2 mx-auto">
                <GiHamburgerMenu className="w-6 h-6" onClick={toggleButton} />
              </span>
              <div className="w-full h-full flex justify-start mt-[-28px]">
                <img src="logo.svg" alt="" className="w-20 h-24" />
              </div>
            </div>
            <div className="w-11/12 mx-auto mt-[-20px]" >
              <button className="bg-white drop-shadow-lg w-[158px] h-16 rounded-full flex justify-center items-center">
                <span className="">
                  <AiOutlinePlus className="w-8 h-8 fill-blue-400" />
                </span>
                <span className="p-4 text-xl ">Create</span>
              </button>
            </div>
            <LeftMenu />
          </div>
        </div>
      ) : (
        <div className="px-[1px] py-4 border-r-4">
          <span className="p-2 m-auto">
            <GiHamburgerMenu
              className="w-6 h-6 relative left-[22px]"
              onClick={toggleButton}
            />
          </span>
          <IconsToggle toggleButton={toggleButton}  />
        </div>
      )}
    </>
  );
};

export default Togglebar;
