import React from "react";

export default function DraftEditor() {
   return (
      <section>
         <main className="flex items-center justify-start bg-gray-50 border-2 border-gray-300 outline-none text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 mb-4">
            <select
               name="font-family"
               id="font-family"
               className="text-black bg-neutral-200 rounded px-2 py-[5.5px] cursor-pointer ml-2 outline-none w-[23%]"
            >
               <option value="">--Font Family--</option>
               <option style={{ fontFamily: "arial" }}>Arial</option>
               <option style={{ fontFamily: "Times New Roman" }}>Times New Roman</option>
               <option style={{ fontFamily: "Verdana" }}>Verdana</option>
               <option style={{ fontFamily: "Comic Sans Serif" }}>Comic Sans Serif</option>
               <option style={{ fontFamily: "Trebuchet MS" }}>Trebuchet MS</option>
            </select>
            <div className="bg-neutral-200 rounded px-2 py-1 cursor-pointer ml-2">
               <h1 className="text-black font-black">B</h1>
            </div>
            <div className="bg-neutral-200 rounded px-2 py-1 cursor-pointer ml-2">
               <h1 className="text-black font-black italic font-mono">I</h1>
            </div>
            <div className="bg-neutral-200 rounded px-2 py-1 cursor-pointer ml-2">
               <h1 className="text-black font-black underline">U</h1>
            </div>
         </main>
      </section>
   );
}
