import React from "react";
import EditorPage from "./EditorPage";
import ResultPage from "./ResultPage";

export default function HomePage() {
   const [inputValue, setInputValue] = React.useState({
      text: "Text here...",
   });

   function handleChange(event) {
      const { name, value } = event.target;
      setInputValue((prevFromData) => ({ ...prevFromData, [name]: value }));
   }

   return (
      <section className="flex">
         <EditorPage value={inputValue.text} onChange={handleChange} />
         <ResultPage text={inputValue.text} />
      </section>
   );
}
