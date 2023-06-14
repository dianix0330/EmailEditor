/**
 * Renders an image component based on the provided image url.
 *
 * @param {string} imageUrl - The url of the image to render.
 * @return {JSX.Element} The image component to render.
 */
export default function Image({ imageUrl }) {
  return (
    <img
      src={imageUrl}
      alt={`Image Component for ${imageUrl}`}
      className="shadow rounded-xl max-w-full h-auto align-middle border-none box-border"
    />
  );
}
