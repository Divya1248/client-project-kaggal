import React from "react";
import { BsFilterSquareFill } from "react-icons/bs";
import { FiSearch } from "react-icons/fi";

const Slide1 = () => {
   
  return (
    <>
      <section className="w-full">
        <article className="w-[90%] flex mx-auto">
          <div className="basis-[60%]  justify-start mr-[200px]">
            <h1 className="font-zeitung, sans-serif font-bold text-3xl mt-10">
              Datasets
            </h1>
            <p className="mt-2">
              Explore, analyze, and share quality data. Learn more about <br />
              data types, creating, and collaborating.
            </p>
            <button className="border-2 rounded-3xl text-lg bg-black text-white p-2 mt-3 w-[150px]">
              + New Dataset
            </button>
          </div>
          <div className="basis-[50%] flex justify-end mt-3">
            <img
              src="https://www.kaggle.com/static/images/datasets/Datasets_landing_illo.png"
              alt=""
            />
          </div>
        </article>
        <div
          className="flex items-center justify-start mt-8 relative"
          id="hiddencontent"
        >
          <span className="text-black absolute  px-4 text-lg ml-[25px] ">
            <FiSearch  className=""/>
          </span>
          <input
            type="search"
            placeholder="Search datasets"
            className="border-2 border-gray-400 rounded-3xl  w-[90%] h-[50px] px-5 ml-9"
          />
          <span className="absolute w-[90%] flex justify-end items-center">
            <BsFilterSquareFill />
            <h1 className="">filters</h1>
          </span>
        </div>
        <div className="mt-5 ml-8">
          <ul className="flex p-3 mx-auto ">
            <li className="px-2 border-2 rounded-2xl mx-1 hover:border-2 hover:border-black">
              <a href="">Computer Science</a>
            </li>
            <li className="px-2 border-2 rounded-2xl mx-1 hover:border-2 hover:border-black">
              <a href=""> Education</a>
            </li>
            <li className="px-2 border-2 rounded-2xl mx-1 hover:border-2 hover:border-black">
              <a href="">Classification</a>
            </li>
            <li className="px-2 border-2 rounded-2xl mx-1 hover:border-2 hover:border-black">
              <a href="">Computer Vision</a>
            </li>
            <li className="px-2 border-2 rounded-2xl mx-1 hover:border-2 hover:border-black">
              <a href="">NLP</a>
            </li>
            <li className="px-2 border-2 rounded-2xl mx-1 hover:border-2 hover:border-black">
              <a href=""> Data Visualization</a>
            </li>
          </ul>
        </div>
      </section>
    </>
  );
};

export default Slide1;
