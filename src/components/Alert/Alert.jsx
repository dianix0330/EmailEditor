const Alert = ({ type, message, handleClick }) => {
  let bgColor, textColor, hidden;

  switch (type) {
    case "success":
      bgColor = "bg-green-100";
      textColor = "text-green-800";
      break;
    case "error":
      bgColor = "bg-red-100";
      textColor = "text-red-800";
      break;
    case "warning":
      bgColor = "bg-yellow-100";
      textColor = "text-yellow-800";
      break;
    default:
      hidden = "hidden";
      bgColor = "bg-blue-100";
      textColor = "text-blue-800";
  }

  return (
    <div
      className={`p-4 ${bgColor} ${textColor} ${hidden} mt-10 rounded-lg shadow-md`}
      onClick={handleClick}
    >
      <p className="font-bold capitalize">{type}</p>
      <p className="capitalize">{message}</p>
    </div>
  );
};

export default Alert;
