/**
 * Renders a template with a list of components and a modal to add new components.
 *
 * @param {{}} props - Component properties
 * @return {JSX.Element} The rendered template
 */

import React, { useState } from "react";
import { useSelector, useDispatch } from "react-redux";

import actions from "../../redux/actions/";
import { Modal, SectionList } from "../../components";

export default function Template({}) {
  const [showModal, setShowModal] = useState(false);
  const components = useSelector((state) => state.template.components);

  const dispatch = useDispatch();

  const handleAddTemplate = (formResult) => {
    formResult.id = components.length;
    dispatch(actions.templateAction.addComponent(formResult));
    setShowModal(false);
  };

  const handleUpdateComponent = (formResult) => {
    dispatch(actions.templateAction.updateComponent(formResult.id, formResult));
  }
  const handleDragEvent = (result) => {
    const startIndex = result.source.index;
    const endIndex = result.destination.index;
    dispatch(actions.templateAction.exchangeComponent(startIndex, endIndex));
  }

  return (
    <>
      <div className="flex flex-col w-1/2 align-center mt-6 p-5 border border-dashed border-black">
        {<SectionList components={components ?? []} onDragEnd={handleDragEvent} handleUpdateComponent={handleUpdateComponent}/>}
        <div
          className="flex flex-col items-center justify-center border-dashed border-black border-b-1 w-full h-48 hover:bg-gray-200"
          onClick={() => setShowModal(true)}
        >
          <img
            src={"assets/images/plus.png"}
            alt="plus button"
            className="h-16 w-16 bg-contain"
          />
        </div>
      </div>
      {showModal && (
        <Modal setShowModal={setShowModal} handleSetting={handleAddTemplate} modalButtonText={"ADD COMPONENT"}/>
      )}
    </>
  );
}
