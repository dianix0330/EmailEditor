import { useState } from "react";

export default function Banner({bannerURL, setBannerURL = f => f}) {
  const [isDoubleClick, setDoubleClick] = useState(false);

  const handleBannerChange = (ev) => {
    if(ev.key === "Enter") {
      setBannerURL(ev.target.value);
    }
  }

  return (
    <div className="responsive w-1/2 justify-center items-center flex">
      <img
        src={bannerURL}
        alt={bannerURL}
        className="mt-10 w-full object-fill p-5"
        onDoubleClick={() => setDoubleClick(true)}
      ></img>
      {
        isDoubleClick && (
          <input type="text" className="w-1/4 rounded absolute border-none outline-none p-1 pl-3" onKeyDown={handleBannerChange} onBlur={() => setDoubleClick(false)}/>
        )
      }
    </div>
  );
}
