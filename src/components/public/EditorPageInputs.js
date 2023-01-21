import React from "react";
import Input from "../../utils/Input";

export default function EditorPageInputs() {
   return (
      <section className="px-8 py-4">
         <Input inputText="Top Text" />
         <Input inputText="Bottom Text" />
      </section>
   );
}
