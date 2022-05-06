import React, { useState } from "react";
import { BsGoogle } from "react-icons/bs";
import Register from "./Register";
import { AiOutlineMail, AiFillFacebook } from "react-icons/ai";

const Login = props => {
  let { signvalue } = props;
  return (
    <section>
      <article className="flex flex-col justify-center items-center my-auto">
        <form>
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
          <button className="flex items-center justify-center border-2 w-[300px] p-1 mt-4">
            <span>
              <AiFillFacebook className="fill-blue-500 w-5 h-5 mx-2" />
            </span>
            Sign in with Facebook
          </button>
          <button className="flex items-center justify-center border-2 w-[300px]  p-1 mt-4">
            <span>
              <AiOutlineMail className="fill-blue-500 w-5 h-5 mx-2" />
            </span>
            Sign in with Yahoo
          </button>
          <span>
            <p className="text-center">
              No account ?
              <button onClick={signvalue} className="text-blue-400 mt-3">
                Register
              </button>
            </p>
          </span>
        </form>
      </article>
    </section>
  );
};

export default Login;
