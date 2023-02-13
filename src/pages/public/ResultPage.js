import React from "react";
import MemeData from "../../components/public/MemeData";

export default function ResultPage({ inputValue }) {
   return (
      <main className="w-1/2 px-8 py-4">
         <MemeData inputValue={inputValue} />
      </main>
   );
}
