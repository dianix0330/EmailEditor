/**
 * Renders a title with given text, size, and alignment.
 *
 * @param {string} text - The text to display in the title.
 * @param {string} size - The size of the title. Must be one of "H1", "H2", or "H3".
 * @param {string} align - The alignment of the title. Must be one of "left", "center", or "right".
 * @return {JSX.Element} A React element representing the title.
 */
export default function Title({ text, size, align }) {
  const textSize = (size) => {
    switch (size) {
      case "H1":
        return "text-5xl";
      case "H2":
        return "text-3xl";
      case "H3":
        return "text-2xl";
    }
  };
  return (
    <p
      className={`${textSize(size)} font-extrabold font-poppins text-${align}`}
    >
      {text}
    </p>
  );
}
