import React from "react";
import SmallBtn from "../../utils/SmallBtn";

export default function Header() {
   return (
      <header className="bg-black px-8 py-4 flex items-center justify-between">
         <section className="flex items-center justify-start">
            <img src="/images/logo.png" className="w-12" />
            <div className="text-white ml-4">
               <h2 className="text-xl font-bold">Post Generator</h2>
            </div>
         </section>
         <section className="flex items-center justify-center">
            <SmallBtn text={"Login"} />
            <SmallBtn text={"Sing up"} />
         </section>
      </header>
   );
}
