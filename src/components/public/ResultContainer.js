import React from "react";

export default function ResultContainer({ inputValue, meme }) {
   return (
      <section className="flex justify-center items-center flex-col px-2 py-4 min-w-[300px] min-h-[200px] rounded relative">
         <h3 className="absolute top-0 p-8 font-semibold text-lg">{inputValue}</h3>
         {/* <img src="/images/Image.jpg" className="w-full rounded" alt="post-img" /> */}
         {meme && <img src={meme} alt="random meme" className="w-full rounded " />}
         <h3 className="absolute bottom-0 p-8 font-semibold text-lg">{inputValue}</h3>
      </section>
   );
}
