import React from "react";
import EditorPageInputs from "../../components/public/EditorPageInputs";
import DraftEditor from "../../components/public/DraftEditor";

export default function EditorPage(props) {
   return (
      <main className="w-1/2 px-8 py-4">
         <div className="flex justify-center items-center">
            <h1 className="text-white text-xl font-bold">Editor</h1>
         </div>
         <section className="px-8 py-4">
            <DraftEditor />
         </section>
      </main>
   );
}
