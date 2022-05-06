import React, { useState } from "react";
import Login from "./Login";
import { BsGoogle } from "react-icons/bs";
import { AiOutlineMail } from "react-icons/ai";

const Register = props => {
  let { registerval } = props;
  return (
    <>
      <section>
        <article className="flex flex-col justify-center items-center my-auto">
          <button className="flex items-center justify-center border-2 w-[300px] p-1 mt-6 ">
            <span>
              <BsGoogle className="fill-blue-500 w-5 h-5 mx-2 " />
            </span>
            Sign in with Google
          </button>

          <button className="flex items-center justify-center border-2 w-[300px] p-1 mt-4">
            <span>
              <AiOutlineMail className="fill-blue-500 w-5 h-5 mx-2" />
            </span>
            Sign in with your email
          </button>
          <p className="text-center">
            Already have an account?
            <button onClick={registerval} className="text-blue-400 mt-3">
              Signin
            </button>
          </p>
        </article>
      </section>
      
     
    </>
  );
};

export default Register;
