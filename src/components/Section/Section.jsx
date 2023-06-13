import React from "react";
import Image from "../Image/Image";
import Title from "../Title/Title";
import Paragraph from "../Paragraph/Paragraph";
export default function Section({ section }) {
  const { component, ...properties } = section;
  
  console.log(properties);
  const customComponenet = (component) => {
    switch(component) {
      case "image": {
        return <Image {...section} />
      }
      case "title": {
        return <Title {...section} />
      }
      case "paragraph": {
        return <Paragraph {...section} />
      }
      default:
        return <></>
    }
  }

  return (
    <div className="flex flex-col align-center justify-center border-1 border-black border-bottom h-72 w-full mb-5">
      {component === "Images" ? (
        <Image {...section}/>
      ) : (
        <div className="">
          Hello
        </div>
      )}
    </div>
  );
}
