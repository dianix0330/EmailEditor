import React from "react";

export default function Image({ imageUrl }) {
  return (
    <img
      src={imageUrl}
      alt={`Image Component for ${imageUrl}`}
      className="shadow rounded-lg max-w-full h-auto align-middle border-none box-border"
    />
  );
}
