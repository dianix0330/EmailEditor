/**
 * A React component that renders a section based on its component prop.
 *
 * @param {Object} section - An object representing the section to be rendered.
 * @param {string} section.component - The type of component to render.
 * @param {Object} section.properties - Properties to be passed to the component.
 * @return {JSX.Element} The rendered section component wrapped in a div.
 */

import Image from "../Image/Image";
import Title from "../Title/Title";
import Paragraph from "../Paragraph/Paragraph";
export default function Section({ section }) {
  const { component, ...properties } = section;
  const renderSection = (componentType) => {
    switch(componentType) {
      case "Image": {
        return <Image {...properties}/>
      }
      case "Title": {
        return <Title {...properties}/>
      }
      case "Paragraph": {
        return <Paragraph {...properties}/>
      }
      default:
        return <></>
    }
  }

  return (
    <div className="flex flex-col align-center justify-center border-1 border-black border-bottom w-full mb-5">
      {
        renderSection(component)
      }
    </div>
  );
}
