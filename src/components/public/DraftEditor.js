import { Editor } from "react-draft-wysiwyg";
import "react-draft-wysiwyg/dist/react-draft-wysiwyg.css";

export default function DraftEditor() {
   return (
      <section className="bg-gray-300 rounded mb-2">
         <Editor
            // editorState={editorState}
            toolbarClassName="toolbarClassName"
            wrapperClassName="wrapperClassName"
            editorClassName="editorClassName"
            // onEditorStateChange={this.onEditorStateChange}
         />
      </section>
   );
}
