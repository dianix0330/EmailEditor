import { useState, useEffect } from "react";
import { configOptions } from "../../config";
import Settings from "../Settings/Settings";
export default function Modal({setShowModal = f => f, handleSetting = f => f, modalButtonText, currentSection = {}}) {
  const [configs, setConfigs] = useState([]);
  const [componentType, setComponentType] = useState("");
  
  useEffect(() => {
    setConfigs(Object.keys(configOptions));
    const { component } = currentSection;
    setComponentType(component ? component : Object.keys(configOptions)[0]);
  }, [configOptions]);

  const handleComponentChange = (ev) => {
    setComponentType(ev.target.value);
  };
  
  return (
    <div className="fixed top-0 left-0 h-screen w-screen z-10">
      <div className="flex relative justify-center h-full w-full">
        <div
          className="h-full w-full absolute bg-black opacity-50"
          onClick={() => setShowModal(false)}
        ></div>
        <div className="h-modal w-modal bg-white shadow-lg absolute animation-modal top-150 flex flex-col">
          <h3
            className="text-3xl font-poppins text-blue-500 text-center p-5"
            id="exampleModalLabel"
          >
            COMPONENT OPTIONS
          </h3>

          <div className="inline-block relative w-64 pl-5 pt-5">
            <select
              className="block appearance-none w-full bg-white border border-gray-400 hover:border-gray-500 px-4 py-2 pr-8 rounded shadow leading-tight focus:outline-none focus:shadow-outline"
              id="component"
              onChange={handleComponentChange}
              value={componentType}
            >
              {configs?.map((config, index) => (
                <option key={index} value={config}>
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
            componentType={componentType}
            displayText={modalButtonText}
            onSetting={handleSetting}
            currentSection={currentSection}
          />
        </div>
      </div>
    </div>
  );
}
