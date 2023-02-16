import React, { useState, useEffect } from "react";
import SmallBtn from "../../utils/SmallBtn";
import ResultContainer from "./ResultContainer";
// import DragAndDrop from "./DragAndDrop";

export default function MemeData({ inputValue }) {
   const [meme, setMeme] = useState(null);

   async function fetchMeme() {
      const response = await fetch("https://api.imgflip.com/get_memes");
      const data = await response.json();
      const { memes } = data.data;
      const randomIndex = Math.floor(Math.random() * memes.length);
      setMeme(memes[randomIndex].url);
   }

   useEffect(() => {
      fetchMeme();
   }, []);

   const handleClick = async () => {
      fetchMeme();
   };

   return (
      <div className="flex justify-start items-start flex-col w-full">
         <div onClick={handleClick} className="flex justify-start items-start">
            <SmallBtn text="Get Random Meme" />
         </div>
         <div className="flex justify-center items-center py-4">
            <ResultContainer meme={meme} inputValue={inputValue} />
            {/* <DragAndDrop meme={meme} inputValue={inputValue} /> */}
         </div>
      </div>
   );
}
