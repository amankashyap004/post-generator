import React from "react";
import DraftEditor from "./DraftEditor";

export default function EditorPageInputs(props) {
   // const [inputValue, setInputValue] = React.useState({
   //    topText: "LET'S MAKE MONEY",
   //    bottomText: "TOGETHER",
   // });

   // function handleChange(event) {
   //    const { name, value } = event.target;
   //    setInputValue((prevFromData) => ({ ...prevFromData, [name]: value }));
   // }

   // console.log(inputValue.topText);
   // console.log(inputValue.bottomText);

   return (
      <section className="px-8 py-4">
         <DraftEditor />
      </section>
   );
}
