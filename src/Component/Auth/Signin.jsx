import React, { useState } from "react";
import Login from "./Login";
import Para from "./Para";
import Register from "./Register";

const SignIn = () => {
  let [display, setdisplay] = useState("Signin");

  let handleSignin = () => {
    setdisplay("Signin");
  };

  let handleRegister = () => {
    setdisplay("register");
  };
  return (
    <>
      <section className="w-2/4 mx-auto ">
        <img src="logo.svg" alt="" className="w-20 h-10 mx-auto" />
        <article className="w-full flex items-center mx-auto justify-center h-[100vh] ">
          <div className=" flex flex-col  border-b-2 border-2 border-gray-300  ">
            <h1 className="w-full border-b-2 py-2 text-lg">
              <span
                className="px-4 position: relative cursor-pointer
             right:25px  hover:pb-2  hover:border-b-4 hover: border-black "
                onClick={handleSignin}
              >
                Sign In
              </span>
              <span
                className=" position:relative right:24px hover: pb-2 hover:border-b-4 hover: border-black cursor-pointer "
                onClick={handleRegister}
                // style={{ "border-collapse"}}
              >
                Register
              </span>
            </h1>
            <div className="px-4 pb-4">
              {display === "Signin" && (
                <h1>
                  <Login signvalue={handleRegister} />
                </h1>
              )}
              {display === "register" && (
                <>
                  <h1>
                    <Register registerval={handleSignin} />
                  </h1>
                </>
              )}
            </div>
          </div>
        </article>
      </section>
      <div className="absolute mt-[-250px] w-1/5 text-center ml-[600px] text-xs">
        {display === "register" && (
          <>
            <h1>
              <Para registerval={handleSignin} />
            </h1>
          </>
        )}
      </div>
    </>
  );
};

export default SignIn;
