import React, { useState } from "react";
import EditorPage from "./EditorPage";
import ResultPage from "./ResultPage";

export default function HomePage() {
   const [inputValue, setInputValue] = useState("Text here...");

   return (
      <section className="flex">
         <EditorPage inputValue={inputValue} setInputValue={setInputValue} />
         <ResultPage inputValue={inputValue} />
      </section>
   );
}
