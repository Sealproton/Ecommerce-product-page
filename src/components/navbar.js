import menu from "../images/icon-menu.svg";
import logo from "../images/logo.svg";
import cart from "../images/icon-cart.svg";
import avatar from "../images/image-avatar.png";
import { useGlobalContext } from "./context";

export const Navbar = () => {
  const { navBox, setNavBox, setOpenCart, openCart, oncart } =
    useGlobalContext();
  return (
    <div className="flex p-4 justify-between items-center pb-5  h-[60px] lg:h-[150px] lg:pl-36 lg:border-b-4">
      <div className="flex items-center ">
        <img
          src={menu}
          className="w-4 h-4 mr-3 mt-1 lg:hidden"
          onClick={() => {
            setNavBox(true);
          }}
        />
        <img
          src={logo}
          className="cursor-pointer w-[6.5rem] h-5 lg:w-36 lg:h-7"
        />
        <div className="max-[1024px]:hidden flex ml-10 w-[500px] mt-2">
          <h2 className="cursor-pointer  font-[700] text-[1.1rem] text-[#b6bcc8]">
            Collections
          </h2>
          <h2 className="cursor-pointer font-[700] text-[1.1rem] ml-5 text-[#b6bcc8]">
            Men
          </h2>
          <h2 className="cursor-pointer font-[700] text-[1.1rem] ml-5 text-[#b6bcc8]">
            Women
          </h2>
          <h2 className="cursor-pointer font-[700] text-[1.1rem] ml-5 text-[#b6bcc8]">
            About
          </h2>
          <h2 className="cursor-pointer font-[700] text-[1.1rem] ml-5 text-[#b6bcc8]">
            Contact
          </h2>
        </div>
      </div>
      <div className="flex items-center lg:pr-20">
        <div className="relative">
          <img
            src={cart}
            className="cursor-pointer w-5 h-5 lg:w-[2rem] lg:h-[2rem] lg:mr-7"
            onClick={() => {
              setOpenCart(!openCart);
            }}
          />
          {oncart > 0 && (
            <h1 className="absolute flex justify-center items-center top-[-8px] right-[-6px] lg:top-[-10px] lg:right-[18px] rounded-full bg-[#ff7d1a] w-[15px] h-[15px] text-[0.8rem] font-[700]">
              {oncart}
            </h1>
          )}
        </div>

        <img src={avatar} className="cursor-pointer w-6 ml-5 lg:w-16" />
      </div>
    </div>
  );
};
