import { products } from "../data/product";
import { useState } from "react";
import next from "../images/icon-next.svg";
import prev from "../images/icon-previous.svg";
import plus from "../images/icon-plus.svg";
import minus from "../images/icon-minus.svg";
import cart from "../images/icon-cart.svg";
import { useGlobalContext } from "./context";

export const Main = () => {
  const { count, setCount, oncart, setOnCart, setOpenCart } =
    useGlobalContext();
  const [position, setPosition] = useState(0);
  return (
    <div
      onClick={() => {
        setOpenCart(false);
      }}
      className="lg:flex lg:mt-12 lg:ml-5 lg:p-2 lg:w-full lg:pl-36 lg:mr-5"
    >
      {/* Desktop */}
      <section className="max-[1024px]:hidden flex flex-col items-center   w-[45%]">
        <img src={products[position].img} className="w-[70%] rounded-2xl"></img>
        <div className="flex mt-10 gap-2 justify-center">
          {products.map((product, index) => {
            const { id, img } = product;
            return (
              <img
                src={img}
                onClick={() => {
                  setPosition(index);
                }}
                className={`w-[18%] rounded-2xl cursor-pointer ${
                  position === index &&
                  "opacity-70 border-4 border-[#ff7d1a] border-opacity-100"
                } `}
              ></img>
            );
          })}
        </div>
      </section>
      {/* Mobile */}
      <section className="lg:hidden">
        {products.map((product, index) => {
          const { id, img } = product;
          if (position == index) {
            return (
              <div className="relative h-[300px] overflow-clip ">
                <img src={img} className=" absolute w-full top-[-15px]"></img>
                <div
                  className="absolute top-[150px] right-3 flex justify-center items-center bg-white cursor-pointer rounded-full w-9 h-9"
                  onClick={() => {
                    position === products.length - 1
                      ? setPosition(0)
                      : setPosition(position + 1);
                  }}
                >
                  <img src={next} />
                </div>
                <div
                  className="absolute top-[150px] left-3 flex justify-center items-center bg-white cursor-pointer rounded-full w-9 h-9"
                  onClick={() => {
                    position === 0
                      ? setPosition(products.length - 1)
                      : setPosition(position - 1);
                  }}
                >
                  <img src={prev} />
                </div>
              </div>
            );
          }
        })}
      </section>
      {/* content */}
      <section className=" font-[Kumbh Sans] pl-4 pr-4 lg:w-[50%] lg:mt-5 lg:pr-20 lg:pl-16 ">
        <div>
          <h2 className="text-[#ff7d1a] font-[700] tracking-wider text-[0.8rem] mt-5 lg:text-[1rem]">
            SNEAKER COMPANY
          </h2>
          <h1 className="font-[700] mt-1 text-[1.5rem] w-[70%] lg:mt-7 lg:text-[2rem]">
            Fall Limited Edition Sneakers
          </h1>
          <p className="mt-3 lg:mt-9 lg:w-[80%]">
            These low-profile sneakers are your perfect casual wear companion.
            Featuring a durable rubber outter sole, they'll withstand everything
            the weather can offer.
          </p>
        </div>
        <div className="flex mt-5 justify-between lg:flex-col">
          <div className="flex items-center ">
            <h1 className="font-[700] text-[1.5rem] lg:text-[1.8rem]">
              $125.00
            </h1>
            <h3 className="text-[#ff7d1a] bg-[#ff7d1a] bg-opacity-30 rounded-sm font-[700] text-[0.8rem] text-center w-8 ml-3">
              50%
            </h3>
          </div>
          <p className="line-through flex items-end pb-1  text-[#b6bcc8] text-[0.8rem] lg:text-[1rem]">
            $250.00
          </p>
        </div>
        <div className="  mt-3 lg:flex lg:items-center lg:mt-5">
          <div className="flex items-center bg-[#f7f8fd] h-[50px] rounded-md justify-between lg:w-[35%]">
            <div
              className=" flex cursor-pointer justify-center items-center w-[15%] h-full lg:w-[20%]"
              onClick={() => {
                count === 0 ? setCount(0) : setCount(count - 1);
              }}
            >
              <img src={minus} className="w-3 h-1" />
            </div>
            <h3 className="font-[700]">{count}</h3>
            <div
              className=" flex cursor-pointer justify-center items-center w-[15%] h-full lg:w-[20%]"
              onClick={() => {
                setCount(count + 1);
              }}
            >
              <img src={plus} className="w-3 " />
            </div>
          </div>
          <button
            type="button"
            className="bg-[#ff7d1a] flex justify-center items-center mt-5 h-[50px] w-full rounded-md lg:w-[50%] lg:mt-0 lg:ml-8"
          >
            <img src={cart} />
            <p
              className="font-[700] text-white text-[0.9rem] ml-4"
              onClick={() => {
                setOnCart(oncart + count);
                setCount(0);
                console.log(oncart);
              }}
            >
              Add to cart
            </p>
          </button>
        </div>
      </section>
    </div>
  );
};
