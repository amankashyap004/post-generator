import React from "react";
import MemeData from "./MemeData";

export default function ResultContainer({ inputValue }) {
   return (
      <section className="flex justify-center items-center flex-col p-4 rounded relative">
         {/* <h3 className="absolute top-0 p-8 font-semibold text-lg">{inputValue}</h3> */}
         {/* <img src="/images/Image.jpg" className="w-full rounded" alt="post-img" /> */}
         <MemeData />
         {/* <h3 className="absolute bottom-0 p-8 font-semibold text-lg">{inputValue}</h3> */}
      </section>
   );
}
