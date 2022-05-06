import React from "react";
import { RiCompass3Line } from "react-icons/ri";
import { GiTrophyCup } from "react-icons/gi";
import { RiTableLine } from "react-icons/ri";
import { BsCode } from "react-icons/bs";
import { BsChatRightText } from "react-icons/bs";
import { FcGraduationCap } from "react-icons/fc";
import { BsChevronDown } from "react-icons/bs";

const IconsToggle = props => {
  let { toggleButton } = props;
  return (
    <div>
      <ul onMouseOver={toggleButton}>
        <li className="w-11/12 flex items-center ">
          <span className="px-3 py-1">
            <RiCompass3Line className="w-6 h-8 fill-gray-500 relative left-[9px]" />
          </span>
        </li>
        <li className="w-11/12 flex items-center ">
          <span className="px-5 py-2">
            <GiTrophyCup className="w-6 h-8 fill-gray-500" />
          </span>
        </li>
        <li className="w-full flex items-center bg-slate-200 ">
          <span className="px-5 py-2">
            <RiTableLine className="w-6 h-8 f+ill-gray-500" />
          </span>
        </li>
        <li className="w-11/12 flex items-center ">
          <span className="px-5 py-2">
            <BsCode className="w-6 h-8 fill-gray-500" />
          </span>
        </li>
        <li className="w-11/12 flex items-center ">
          <span className="px-5 py-2">
            <BsChatRightText className="w-6 h-8 fill-gray-500" />
          </span>
        </li>
        <li className="w-11/12 flex items-center ">
          <span className="px-5 py-2">
            <FcGraduationCap className="w-6 h-8 fill-gray-500" />
          </span>
        </li>
        <li className="w-11/12 flex items-center ">
          <span className="px-5 py-2">
            <BsChevronDown className="w-6 h-8 fill-gray-500" />
          </span>
        </li>
      </ul>
    </div>
  );
};

export default IconsToggle;
