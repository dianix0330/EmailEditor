import React, { useState } from "react";

import { configOptions } from "./config";
export default function Template({}) {
  const [showModal, setShowModal] = useState(false);
  return (
    <div className="h-screen w-1/3 flex justify-center align-center mt-6 border border-dashed border border-black">
      <div
        className="flex flex-col items-center justify-center border-dashed border-black border-b-2 w-full h-48 hover:bg-gray-200"
        onClick={() => setShowModal(true)}
      >
        <img
          src={"assets/images/plus.png"}
          alt="plus button"
          className="h-16 w-16 bg-contain"
        />
      </div>
      {showModal && (
        <div className="absolute top-0 h-screen w-screen">
          <div className="flex relative justify-center h-full w-full">
            <div
              className="h-full w-full absolute bg-black opacity-50"
              onClick={() => setShowModal(false)}
            ></div>
            <div className="h-modal w-modal bg-white shadow-lg absolute animation-modal top-150">
              <h3
                class="text-3xl font-serif text-blue-500 text-center p-5"
                id="exampleModalLabel"
              >
                COMPONENT OPTIONS
              </h3>

              <div className="inline-block relative w-64 pl-5">
                <select
                  className="block appearance-none w-full bg-white border border-gray-400 hover:border-gray-500 px-4 py-2 pr-8 rounded shadow leading-tight focus:outline-none focus:shadow-outline"
                  id="component"
                >
                  {configOptions.map((config, index) => (
                    <option key={index} value={config.component} >{config.component}</option>
                  ))}
                </select>
                <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-gray-700">
                  <svg className="fill-current h-4 w-4" viewBox="0 0 20 20">
                    <path d="M10 12l-6-6 1.41-1.41L10 9.17l4.59-4.58L16 6l-6 6z" />
                  </svg>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
