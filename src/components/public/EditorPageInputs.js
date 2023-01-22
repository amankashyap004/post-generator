import React from "react";
import Input from "../../utils/Input";
import DraftEditor from "./DraftEditor";

export default function EditorPageInputs() {
   const [inputValue, setInputValue] = React.useState({
      topText: "LET'S MAKE MONEY",
      bottomText: "TOGETHER",
   });

   function handleChange(event) {
      const { name, value } = event.target;
      setInputValue((prevFromData) => ({ ...prevFromData, [name]: value }));
   }

   // console.log(inputValue.topText);
   // console.log(inputValue.bottomText);

   return (
      <section className="px-8 py-4">
         <DraftEditor />
         <Input
            inputText="Top Text"
            name="topText"
            value={inputValue.topText}
            onChange={handleChange}
         />
         <Input
            inputText="Bottom Text"
            name="bottomText"
            value={inputValue.bottomText}
            onChange={handleChange}
         />
         <h1 className="text-white">{inputValue.topText}</h1>
         <h1 className="text-white">{inputValue.bottomText}</h1>
      </section>
   );
}
