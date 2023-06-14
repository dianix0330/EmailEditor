
export default function Paragraph({ text, align }) {
  return (
    <p className={`font-serif text-${align}`}>
      {text}
    </p>
  );
}
