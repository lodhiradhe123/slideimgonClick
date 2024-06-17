import React, { useState } from "react";
import { FaArrowRight } from "react-icons/fa";
import { FaArrowLeft } from "react-icons/fa";

function Card() {
  const [val, setval] = useState(true);
  return (
    <>
      <div className="w-full h-screen bg-zinc-400 flex justify-center items-center ">
        <div className="cards w-72 h-52 bg-pink-100 rounded-lg  object-cover relative flex overflow-hidden">
          <img
            src="https://images.unsplash.com/photo-1515023677547-593d7638cbd6?q=80&w=3870&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
            alt=""
            className={`w-full h-full shrink-0 ${
              val ? val : "-translate-x-[100%]"
            } transition-transform delay-200`}
          />
          <img
            src="https://images.unsplash.com/photo-1484328256245-34b71758c30b?q=80&w=3873&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
            alt=""
            className={`w-full h-full shrink-0 ${
              val ? val : "-translate-x-[100%]"
            } transition-transform delay-200`}
          />
          <span
            onClick={() => setval(() => !val)}
            className={`w-12 h-12 bg--200 rounded-full flex justify-center items-center absolute left-1/2 top-2/3 -translate-x-[50%] -translate-y-[50%] backdrop-blur-lg ${val ? val : "hidden"}`}
          >
            {<FaArrowRight />} 
          </span>
          <span
            onClick={() => setval(() => !val)}
            className={`w-12 h-12 bg--200 rounded-full flex justify-center items-center absolute left-1/2 top-2/3 -translate-x-[50%] -translate-y-[50%] backdrop-blur-lg ${val ? "hidden" : val}`}
          >
            {<FaArrowLeft />} 
          </span>
          
        </div>
      </div>
    </>
  );
}

export default Card;
