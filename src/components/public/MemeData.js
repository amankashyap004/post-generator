import React, { useState, useEffect } from "react";
import SmallBtn from "../../utils/SmallBtn";
import ResultContainer from "./ResultContainer";

export default function MemeData({ inputValue }) {
   const [meme, setMeme] = useState(null);

   useEffect(() => {
      async function fetchMeme() {
         const response = await fetch("https://api.imgflip.com/get_memes");
         const data = await response.json();
         const { memes } = data.data;
         const randomIndex = Math.floor(Math.random() * memes.length);
         setMeme(memes[randomIndex].url);
      }

      fetchMeme();
   }, []);

   const handleClick = async () => {
      const response = await fetch("https://api.imgflip.com/get_memes");
      const data = await response.json();
      const { memes } = data.data;
      const randomIndex = Math.floor(Math.random() * memes.length);
      setMeme(memes[randomIndex].url);
   };

   return (
      <div className="flex justify-start items-start flex-col w-full">
         <div onClick={handleClick} className="mb-2 flex justify-start items-start">
            <SmallBtn text="Get Random Meme" />
         </div>
         <div className="flex justify-center items-center flex-col p-4 rounded relative">
            <ResultContainer meme={meme} inputValue={inputValue} />
         </div>
      </div>
   );
}
