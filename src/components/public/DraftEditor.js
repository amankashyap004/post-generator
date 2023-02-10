import React, { useState } from "react";
import { Editor } from "react-draft-wysiwyg";
import { EditorState, convertToRaw, convertFromRaw } from "draft-js";
import "react-draft-wysiwyg/dist/react-draft-wysiwyg.css";
import SmallBtn from "../../utils/SmallBtn";
import { stateToHTML } from "draft-js-export-html";

export default function DraftEditor({ inputValue, setInputValue }) {
   // const [editorState, setEditorState] = useState(EditorState.createEmpty());

   const localContent = {
      entityMap: {},
      blocks: [
         {
            key: "637gr",
            text: "Hello, this is some local content",
            type: "unstyled",
            depth: 0,
            inlineStyleRanges: [],
            entityRanges: [],
         },
      ],
   };

   const [editorState, setEditorState] = useState(
      EditorState.createWithContent(convertFromRaw(localContent))
   );

   const html = stateToHTML(editorState.getCurrentContent());

   const onEditorStateChange = (newEditorState) => {
      setEditorState(newEditorState);
   };

   // const [inputValue, setInputValue] = useState("Input Value");
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
         {/* <h2 className="text-white">{inputValue}</h2> */}
         <div>
            <p dangerouslySetInnerHTML={{ __html: html }} className="text-white" />
         </div>
      </section>
   );
}
