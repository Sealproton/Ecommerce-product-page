import { products } from "../data/product";
import { useGlobalContext } from "./context";
import trash from "../images/icon-delete.svg";
import { useRef } from "react";

export const Cart = () => {
  const { oncart, setOpenCart, setOnCart } = useGlobalContext();
  return (
    <div className="absolute bg-white z-20 w-[92%]  top-[70px] left-[3%] rounded-lg pt-3 pb-4 shadow-xl lg:w-[22%] lg:top-[18%] lg:left-[75%]">
      <div className="  pl-8  h-[35px] border-b-2">
        <h1 className="text-[0.9rem] font-[700]">Cart</h1>
      </div>
      {oncart == 0 && (
        <div className=" flex items-center justify-center h-20">
          <p className="text-[#85868a] font-[700] text-[0.8rem]">
            Your cart is empty.
          </p>
        </div>
      )}
      {oncart > 0 && (
        <div className="relative mt-2">
          <div className="flex items-center pt-3 pl-8">
            <img src={products[0].img} className="h-[55px] rounded-md"></img>
            <div className="ml-4">
              <h1 className="text-[0.8rem] text-[#85868a]">
                Fall Limited Edition Sneakers
              </h1>
              <img
                src={trash}
                className=" absolute z-50 top-[35px] right-5 w-[15px] cursor-pointer"
                onClick={() => {
                  setOnCart(0);
                }}
              ></img>
              <div className="flex">
                <p className="text-[#85868a] text-[0.8rem]">
                  $125.00 x {oncart}
                </p>
                <p className="text-[0.8rem] font-[700] ml-2">
                  ${125 * oncart}.00
                </p>
              </div>
            </div>
          </div>
          <button
            type="button"
            className="w-[80%] bg-[#ff7d1a] text-white text-[0.8rem] font-[700] mt-6 h-[40px] ml-8 rounded-lg "
          >
            Check out
          </button>
        </div>
      )}
    </div>
  );
};
