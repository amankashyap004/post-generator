import React from "react";
import ResultContainer from "../../components/public/ResultContainer";
import SmallBtn from "../../utils/SmallBtn";

export default function ResultPage({ inputValue }) {
   return (
      <main className="w-1/2 px-8 py-4">
         <div className="flex justify-center items-center bg-slate-400 p-4 mx-4 rounded">
            <div className="flex justify-start items-start w-full">
               <SmallBtn text="New Meme" />
            </div>
         </div>
         <ResultContainer inputValue={inputValue} />
      </main>
   );
}
