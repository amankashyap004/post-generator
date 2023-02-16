import React, { useState } from "react";
import { DragDropContext, Droppable, Draggable } from "react-beautiful-dnd";

export default function ResultContainer({ inputValue, meme }) {
   const [items, setItems] = useState([
      { id: "1", content: inputValue },
      { id: "2", content: "" },
      { id: "3", content: "" },
      { id: "4", content: "" },
      { id: "5", content: "" },
      { id: "6", content: "" },
      { id: "7", content: "" },
      { id: "8", content: inputValue },
   ]);

   const onDragEnd = (result) => {
      if (!result.destination) return;
      const itemsCopy = [...items];
      const [reorderedItem] = itemsCopy.splice(result.source.index, 1);
      itemsCopy.splice(result.destination.index, 0, reorderedItem);
      setItems(itemsCopy);
   };

   return (
      <DragDropContext onDragEnd={onDragEnd}>
         <Droppable droppableId="items">
            {(provided) => (
               <section
                  {...provided.droppableProps}
                  ref={provided.innerRef}
                  className="flex justify-center items-center flex-col px-2 py-4 min-w-[500px] min-h-[200px] rounded relative"
               >
                  {meme && <img src={meme} alt="random meme" className="w-full rounded relative" />}
                  <div className="absolute">
                     {items.map((item, index) => (
                        <Draggable key={item.id} draggableId={item.id} index={index}>
                           {(provided) => (
                              <h3
                                 {...provided.draggableProps}
                                 {...provided.dragHandleProps}
                                 ref={provided.innerRef}
                                 className="p-4 font-semibold text-lg bg-transparent"
                              >
                                 {item.content}
                              </h3>
                           )}
                        </Draggable>
                     ))}
                     {provided.placeholder}
                  </div>
               </section>
            )}
         </Droppable>
      </DragDropContext>
   );
}
