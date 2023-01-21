import React from "react";

export default function ResultContainer() {
   return (
      <section className="flex justify-center items-center flex-col p-4 rounded relative">
         <h3 className="absolute top-0 p-8 font-semibold text-lg">Yes this is text</h3>
         <img src="/images/Image.jpg" className="w-full rounded" alt="post-img" />
         <h3 className="absolute bottom-0 p-8 font-semibold text-lg">Yes this is text</h3>
      </section>
   );
}
