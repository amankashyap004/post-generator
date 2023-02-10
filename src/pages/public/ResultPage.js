import React from "react";
import ResultContainer from "../../components/public/ResultContainer";

export default function ResultPage(props) {
   return (
      <main className="w-1/2 px-8 py-4">
         <div className="flex justify-center items-center">
            <h1 className="text-white text-xl font-bold">Result</h1>
         </div>
         <ResultContainer text={props.text} />
      </main>
   );
}
