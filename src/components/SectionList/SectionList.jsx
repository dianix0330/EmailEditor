import React from "react";
import Section from "../Section/Section";
import { DragDropContext, Droppable, Draggable } from "react-beautiful-dnd";

const SectionList = ({ components, onDragEnd }) => {
  return (
    <DragDropContext onDragEnd={onDragEnd}>
      <Droppable droppableId="section-list">
        {(provided) => (
          <ul {...provided.droppableProps} ref={provided.innerRef}>
            {components.map((section, index) => (
              <Draggable
                key={section.id}
                draggableId={section.id}
                index={index}
              >
                {(provided) => (
                  <li
                    key={section.id}
                    ref={provided.innerRef}
                    {...provided.draggableProps}
                    {...provided.dragHandleProps}
                  >
                    <Section section={section} />
                  </li>
                )}
              </Draggable>
            ))}
            {provided.placeholder}
          </ul>
        )}
      </Droppable>
    </DragDropContext>
  );
};

export default SectionList;
