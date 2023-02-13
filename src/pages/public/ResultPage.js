import React from "react";
import ResultContainer from "../../components/public/ResultContainer";
import SmallBtn from "../../utils/SmallBtn";

export default function ResultPage({ inputValue }) {
   return (
      <main className="w-1/2 px-8 py-4">
         <ResultContainer inputValue={inputValue} />
      </main>
   );
}
