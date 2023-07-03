import { useRef } from "react";
import cancle from "../images/icon-close.svg";
import { useGlobalContext } from "./context";

export const Box = () => {
  const { navBox, setNavBox } = useGlobalContext();
  const ref = useRef(null);
  const setOutsideClick = (e) => {
    console.log(ref.current);
    if (!ref.current.contains(e.target)) {
      setNavBox(false);
    }
  };
  return (
    <div
      className=" absolute z-50 bg-black bg-opacity-40 top-0 left-0 w-full h-full"
      onClick={setOutsideClick}
    >
      <div className="bg-white w-[65%] h-full p-8" ref={ref}>
        <img
          src={cancle}
          className="mb-16 pointer"
          onClick={() => {
            setNavBox(false);
          }}
        ></img>
        <h2 className="mt-5 font-[700]">Collections</h2>
        <h2 className="mt-5 font-[700]">Men</h2>
        <h2 className="mt-5 font-[700]">Women</h2>
        <h2 className="mt-5 font-[700]">About</h2>
        <h2 className="mt-5 font-[700]">Contact</h2>
      </div>
    </div>
  );
};
