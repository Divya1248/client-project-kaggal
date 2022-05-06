import React, { useState } from "react";
import { RiArrowUpSFill } from "react-icons/ri";
import { MdWhatshot } from "react-icons/md";
import DATA from "../../data.json";

const Slide2 = () => {
  let [state, setstate] = useState(DATA.popular);

  let mappedData = state.map(value => {
    let { image, title, description, rating } = value;
    return (
      <div className="h-[280px] w-[250px]  ml-[50px] mt-8  bg-white rounded-xl border-gray border-[1px] hover:shadow-lg  ">
        <img
          src={image}
          alt={title}
          className="h-[100px] w-[250px] rounded-xl rounded-b-none"
        />
        <h1 className="font-bold text-lg mt-3">{title}</h1>
        <a href="/" className="text-sm w-sm mt-2">
          {description}
        </a>
        <p className="mt-10 border-t-2 ">
          <button className="flex items-center border-2 w-[55px] justify-around relative rounded-[14px] left-[13px] top-[9px] divide-x-2  ">
            <span>
              <RiArrowUpSFill />
            </span>

            <span className="w-[24px]">{rating}</span>
          </button>
        </p>
      </div>
    );
  });

  console.log(mappedData);
  return (
    <section>
      <div className="w-[90%] ml-[48px] flex justify-between font-bold text-xl">
        <h1 className="flex items-center ">
          <span>
            <MdWhatshot />
          </span>
          Popular Datasets
        </h1>
        <button>See all</button>
      </div>
      <article className="grid-col-4 grid">
        <div className=" h-[380px] bg-white flex basis-[24%]">{mappedData}</div>
      </article>
    </section>
  );
};

export default Slide2;
