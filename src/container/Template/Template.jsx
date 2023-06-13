import React, { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";

import actions from "../../redux/actions/";
import { Settings, SectionList } from "../../components";
import { configOptions } from "./config";

export default function Template({}) {
  const [showModal, setShowModal] = useState(false);
  const [configs, setConfigs] = useState([]);
  const [componentType, setComponentType] = useState("");

  const components = useSelector((state) => state.template.components);

  const dispatch = useDispatch();

  useEffect(() => {
    setConfigs(Object.keys(configOptions));
    setComponentType(Object.keys(configOptions)[0]);
  }, [configOptions]);

  const handleComponentChange = (ev) => {
    setComponentType(ev.target.value);
  };

  const handleAddTemplate = (formResult) => {
    formResult.component = componentType;
    formResult.id = components.length.toString();
    dispatch(actions.templateAction.addComponent(formResult));
    setShowModal(false);
  };

  const handleDragEvent = (result) => {
    const startIndex = result.source.index;
    const endIndex = result.destination.index;

    dispatch(actions.templateAction.exchangeComponent(startIndex, endIndex));
  }
  return (
    <>
      <div className="flex flex-col w-1/3 align-center mt-6 p-5 border border-dashed border border-black">
        {<SectionList components={components ?? []} onDragEnd={handleDragEvent}/>}
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
        <div className="absolute top-0 h-full w-full">
          <div className="flex relative justify-center h-full w-full">
            <div
              className="h-full w-full absolute bg-black opacity-50"
              onClick={() => setShowModal(false)}
            ></div>
            <div className="h-modal w-modal bg-white shadow-lg absolute animation-modal top-150 flex flex-col">
              <h3
                className="text-3xl font-serif text-blue-500 text-center p-5"
                id="exampleModalLabel"
              >
                COMPONENT OPTIONS
              </h3>

              <div className="inline-block relative w-64 pl-5 pt-5">
                <select
                  className="block appearance-none w-full bg-white border border-gray-400 hover:border-gray-500 px-4 py-2 pr-8 rounded shadow leading-tight focus:outline-none focus:shadow-outline"
                  id="component"
                  onChange={handleComponentChange}
                >
                  {configs?.map((config, index) => (
                    <option key={index} value={config} className="capitalize">
                      {config}
                    </option>
                  ))}
                </select>
                <div className="pointer-events-none absolute inset-y-0 right-0 pt-5 flex items-center px-2 text-gray-700">
                  <svg className="fill-current h-4 w-4" viewBox="0 0 20 20">
                    <path d="M10 12l-6-6 1.41-1.41L10 9.17l4.59-4.58L16 6l-6 6z" />
                  </svg>
                </div>
              </div>

              <Settings
                options={configOptions[componentType]}
                onAddTemplate={handleAddTemplate}
              />
            </div>
          </div>
        </div>
      )}
    </>
  );
}
