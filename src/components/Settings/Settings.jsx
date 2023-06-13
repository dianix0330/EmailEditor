import React, { useState, useEffect } from "react";

export default function Settings({ options, onAddTemplate = f => f }) {
  const [config, setConfig] = useState({});
  const [renderConfig, setRenderConfig] = useState({});

  useEffect(() => {
    setConfig(options);
    setRenderConfig(options);
  }, [options]);

  const handleSetting = (ev, key) => {
    const newConfig = {...config};
    newConfig[key] = ev.target.value;
    setConfig(newConfig);
  };

  const handleSubmit = (ev) => {
    ev.preventDefault();
    const formResult = Object.keys(config).reduce((result, key) => {
      result[key] = ev.target[key].value;
      return result;
    }, {});
    onAddTemplate(formResult);
  }

  return (
    <form className="flex flex-col relative pl-5 flex-1 justify-between" onSubmit={handleSubmit}>
      {Object.entries(renderConfig)?.map(([key, value], index) => {
        if (Array.isArray(value)) {
          return (
            <div className="flex flex-row relativep-5 p-5" key={index}>
              <label
                htmlFor={key}
                className="block text-gray-700 font-bold mb-2 uppercase m-auto pr-5"
              >
                {key}
              </label>
              <select
                className="block appearance-none w-full bg-white border border-gray-400 hover:border-gray-500 px-4 py-2 pr-8 rounded shadow leading-tight focus:outline-none focus:shadow-outline"
                id={key}
                onChange={(ev) => handleSetting(ev, key)}
              >
                {value.map((config, index) => (
                  <option key={index} value={config}>
                    {config}
                  </option>
                ))}
              </select>
            </div>
          );
        } else {
          return (
            <div className="flex flex-row relative p-5" key={index}>
              <label
                htmlFor={key}
                className="block text-gray-700 font-bold mb-2 uppercase m-auto pr-5"
              >
                {key}
              </label>
              <input
                type="text"
                id={key}
                value={config[key]}
                onChange={(ev) => handleSetting(ev, key)}
                className="appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              />
            </div>
          );
        }
      })}
      <input type="submit" className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 mr-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800 uppercase h-16" value="Add Component"/>
    </form>
  );
}
