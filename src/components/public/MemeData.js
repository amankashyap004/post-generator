import React, { useState, useEffect } from "react";

export default function MemeData() {
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
      <div>
         {meme && <img src={meme} alt="random meme" />}
         <button onClick={handleClick}>Get Random Meme</button>
      </div>
   );
}
