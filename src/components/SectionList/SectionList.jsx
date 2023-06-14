/**
 * Renders a list of draggable and droppable sections using React DnD library.
 *
 * @param {Object} props - The props object containing components and onDragEnd.
 * @param {Array} props.components - The array of components to be rendered as sections.
 * @param {Function} props.onDragEnd - The function to be called when a drag ends.
 * @return {JSX.Element} The rendered list of sections.
 */

import { useState } from "react";
import Modal from "../Modal/Modal";
import Section from "../Section/Section";
import { DragDropContext, Droppable, Draggable } from "react-beautiful-dnd";

const SectionList = ({ components, onDragEnd, handleUpdateComponent = f => f }) => {
  const [showModal, setShowModal] = useState(false);
  const [currentSection, setCurrentSection] = useState({});
  const handleSectionDoubleClick = (section) => {
    setShowModal(true);
    setCurrentSection(section);
  };

  const handleSectionUpdate = (formResult, componentType) => {
    setShowModal(false);
    handleUpdateComponent(formResult, componentType);
  }
  return (
    <DragDropContext onDragEnd={onDragEnd}>
      <Droppable droppableId="section-list">
        {(provided) => (
          <ul {...provided.droppableProps} ref={provided.innerRef}>
            {components.map((section, index) => (
              <Draggable
                key={index.toString()}
                draggableId={index.toString()}
                index={index}
              >
                {(provided) => (
                  <li
                    key={index.toString()}
                    ref={provided.innerRef}
                    onDoubleClick={() => handleSectionDoubleClick(section)}
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
      {showModal && (
        <Modal
          setShowModal={setShowModal}
          modalButtonText={"UPDATE COMPONENT"}
          currentSection={currentSection}
          handleSetting={handleSectionUpdate} 
        />
      )}
    </DragDropContext>
  );
};

export default SectionList;
