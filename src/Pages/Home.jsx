import React, { useRef, useState } from "react";
import { GiHamburgerMenu } from "react-icons/gi";
import { AiOutlinePlus } from "react-icons/ai";
import { FiSearch } from "react-icons/fi";
import LeftMenu from "./LeftMenu";
import Slide1 from "./Slide1";
import Slide2 from "./Slides/Slide2";
import Slide3 from "./Slides/Slide3";
import Slide4 from "./Slides/Slide4";
import Slide5 from "./Slides/Slide5";
import DATA from "../data.json";
import Togglebar from "./Togglebar";

const Home = () => {
  let [state, setState] = useState(false);

  let toggleButton = () => {
    setState(!state);
    console.log(state);
  };

  let [data, setData] = useState(DATA);
  let [search, setSearch] = useState("");

  // let jsonData = state.filter(val => {
  //   if (search === "") {
  //     return val;
  //   } else if (val.title.toLowerCase().includes(search.toLocaleLowerCase())) {
  //     return val;
  //   }
  // });

  return (
    <>
      <section className="mx-auto w-[100%]">
        <article className="flex ">
          {/* <div className="basis-1/5 flex flex-col  h-screen border-r-2 border-gray-300  ">
            <div className="fixed ">
              <div className="w-[80%] mx-aut flex justify-center pl-5 pt-5 ">
                <span className="p-2">
                  <GiHamburgerMenu className="w-6 h-6" onClick={toggle} />
                </span>
                <div className="w-full h-full flex justify-start mt-[-28px]">
                  <img src="logo.svg" alt="" className="w-20 h-24" />
                </div>
              </div>
              <div className="w-11/12 mx-auto mt-[-20px]">
                <button className="bg-white drop-shadow-lg w-[158px] h-16 rounded-full flex justify-center items-center">
                  <span className="">
                    <AiOutlinePlus className="w-8 h-8 fill-blue-400" />
                  </span>
                  <span className="p-4 text-xl ">Create</span>
                </button>
              </div>
              <LeftMenu />
            </div>
          </div> */}
          <Togglebar toggleButton={toggleButton} state={state} onMouseOut={toggleButton} />

          <div className="basis-[100%] overflow-x-hidden w-[100%] overflow-y-auto h-screen">
            <div className="basis-[100%] justify-end flex px-20">
              <div className="w-[900px]  sticky p-2" id="nav">
                <span className="text-black absolute mt-4 px-2 text-lg">
                  <FiSearch />
                </span>
                {/* //search input */}
                <input
                  type="search"
                  placeholder="Search Datasets"
                  className="w-[90%] border-2 text-xl border-gray-400 h-[50px] rounded-3xl px-6 mr-[600px]"
                  onChange={e => setSearch(e.target.value)}
                />
              </div>
              <div className="text-[14px] font-[700px] mt-3 cursor-pointer">
                <a
                  href="/signin"
                  className="p-3 hover:border-2 hover:rounded-3xl text-lg "
                >
                  Sign In
                </a>
                <a
                  href="/signin"
                  className="p-2 text-xl font-bold border-2  rounded-3xl bg-black text-white"
                >
                  Register
                </a>
              </div>
            </div>
            <div className="mt-5">
              <Slide1  />
            </div>
            <Slide2 />
            <Slide3 />
            <Slide4 />
            <Slide5 />
          </div>
        </article>
      </section>
    </>
  );
};

export default Home;
