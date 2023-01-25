import React, { useState } from "react";
import { DragDropContext, Droppable, Draggable } from "react-beautiful-dnd";

export default function DragAndDrop() {
   const [items, setItems] = useState([
      { id: "1", content: "Item 1" },
      { id: "2", content: "Item 2" },
      { id: "3", content: "Item 3" },
      { id: "4", content: "Item 4" },
      { id: "5", content: "Item 5" },
   ]);

   const onDragEnd = (result) => {
      if (!result.destination) return;

      const newItems = [...items];
      const [removed] = newItems.splice(result.source.index, 1);
      newItems.splice(result.destination.index, 0, removed);

      setItems(newItems);
   };

   return (
      <DragDropContext onDragEnd={onDragEnd}>
         <Droppable droppableId="list">
            {(provided) => (
               <div ref={provided.innerRef} {...provided.droppableProps}>
                  {items.map((item, index) => (
                     <Draggable key={item.id} draggableId={item.id} index={index}>
                        {(provided) => (
                           <div
                              ref={provided.innerRef}
                              {...provided.draggableProps}
                              {...provided.dragHandleProps}
                           >
                              {item.content}
                           </div>
                        )}
                     </Draggable>
                  ))}
                  {provided.placeholder}
               </div>
            )}
         </Droppable>
      </DragDropContext>
   );
}