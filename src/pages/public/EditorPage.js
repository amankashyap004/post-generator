import React from "react";
import EditorPageInputs from "../../components/public/EditorPageInputs";

export default function EditorPage() {
   return (
      <main className="bg-slate-900 w-1/2 px-8 py-4">
         <div className="flex justify-center items-center">
            <h1 className="text-white text-xl font-bold">Editor</h1>
         </div>
         <div>
            <EditorPageInputs />
         </div>
      </main>
   );
}
