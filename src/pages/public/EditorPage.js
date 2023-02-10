import React from "react";
import DraftEditor from "../../components/public/DraftEditor";

export default function EditorPage({ inputValue, setInputValue }) {
   return (
      <main className="w-1/2 px-8 py-4">
         <div className="flex justify-center items-center">
            <h1 className="text-white text-xl font-bold">Editor</h1>
         </div>
         <section className="px-8 py-4">
            <DraftEditor inputValue={inputValue} setInputValue={setInputValue} />
         </section>
      </main>
   );
}
