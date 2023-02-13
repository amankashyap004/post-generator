import React from "react";
import DraftEditor from "../../components/public/DraftEditor";

export default function EditorPage({ inputValue, setInputValue }) {
   return (
      <main className="w-1/2 px-8 py-4">
         <section className="px-8 py-4">
            <DraftEditor inputValue={inputValue} setInputValue={setInputValue} />
         </section>
         <section className="px-8 py-4">
            <DraftEditor inputValue={inputValue} setInputValue={setInputValue} />
         </section>
      </main>
   );
}
