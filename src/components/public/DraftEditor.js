import React, { useState } from "react";
import { Editor } from "react-draft-wysiwyg";
import { EditorState, convertToRaw } from "draft-js";
import "react-draft-wysiwyg/dist/react-draft-wysiwyg.css";
import SmallBtn from "../../utils/SmallBtn";

export default function DraftEditor({ inputValue, setInputValue }) {
   const [editorState, setEditorState] = useState(EditorState.createEmpty());

   const onEditorStateChange = (newEditorState) => {
      setEditorState(newEditorState);
   };

   // const [inputValue, setInputValue] = React.useState("Input Value");
   const handleSave = () => {
      const content = convertToRaw(editorState.getCurrentContent());
      // console.log(content);
      setInputValue(content.blocks[0].text);
   };

   return (
      <section>
         <div className="bg-gray-300 rounded mb-2">
            <Editor
               editorState={editorState}
               toolbarClassName="toolbarClassName"
               wrapperClassName="wrapperClassName"
               editorClassName="editorClassName"
               onEditorStateChange={onEditorStateChange}
            />
         </div>
         <div onClick={handleSave} className="flex items-start justify-start w-fit h-fit my-4">
            <SmallBtn text="Save" />
         </div>
         <h2 className="text-white">{inputValue}</h2>
      </section>
   );
}
