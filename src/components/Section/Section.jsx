import React from "react";
export default function Section({ section }) {
  const { url, type, title, content } = section;

  return (
    <div className="flex flex-col align-center justify-center border-1 border-black border-bottom h-72 w-full">
      {type === "Image" ? (
        <img src={url} alt="Image Section" className="h-auto" />
      ) : (
        <div className="">
          <h2>{section.title}</h2>
          <p>{section.content}</p>
        </div>
      )}
    </div>
  );
}
