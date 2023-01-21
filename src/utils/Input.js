import React from "react";

export default function Input(props) {
   return (
      <div class="mb-6">
         <label for="input" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">
            {props.inputText}
         </label>
         <input
            type="text"
            id="input"
            class="bg-gray-50 border-2 border-gray-300 outline-none text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
         />
      </div>
   );
}
