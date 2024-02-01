import React from "react";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { AiFillHeart, AiFillStar, AiOutlineHeart } from "react-icons/ai";
import { CartState } from "../context/Context";

const TopRated = ({ topratesales: { title, items } }) => {
  const {
    state: { cart, wishlist },
    dispatch,
  } = CartState();
  const notify = () => toast.success("Added!");
  const warning = () => toast.warn("Removed!");
  const addWish = () => toast.success("Added to Wishlist");
  const removeWish = () => toast.warn("Remove from Wishlist");

  return (
    <>
      <div className=" ">
        <div>
          <h1 className="text-6xl xsm:text-3xl sm:text-4xl md:text-5xl lg:text-5xl font-bold text-gray-800 ml-16 ">
            {title}
          </h1>
          <div className="grid grid-cols-4 gap-6 mx-8 mt-8 xsm:grid-cols-1 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 ">
            {items.map((val) => {
              return (
                <div
                  key={val.id}
                  className="relative flex flex-col  items-center pt-4 bg-violet-600 rounded-xl hover:scale-110 duration-100 transition-all"
                >
                  <h1 className="text-xl text-slate-100 font-medium">
                    {val.title}
                  </h1>
                  <p className="text-lg text-slate-100">{val.text}</p>
                  <div className=" flex gap-10 ">
                    <p className="text-gray-700 font-semibold text-md border bg-gray-200 px-2 rounded-lg shadow-xl">
                      ${val.price}
                    </p>
                    <div className="flex items-center gap-4 text-white">
                      <AiFillStar size={22} />

                      <p className="text-lg">{val.rating}</p>
                    </div>
                  </div>

                  {cart.some((p) => p.id === val.id) ? (
                    <button
                      onClick={() => {
                        dispatch({
                          type: "REMOVE_FROM_CART",
                          payload: val,
                        });
                        warning();
                      }}
                      className="mt-4 border border-white rounded-md 
                      px-3 py-1 hover:bg-white bg-transparent hover:text-violet-500 text-white rounded-lg font-medium text-sm"
                    >
                      Remove From Cart
                    </button>
                  ) : (
                    <button
                      onClick={() => {
                        dispatch({
                          type: "ADD_TO_CART",
                          payload: val,
                        });
                        notify();
                      }}
                      className="mt-4 border border-white rounded-md 
                      px-3 py-1 hover:bg-white bg-transparent hover:text-violet-500 text-white rounded-lg font-medium text-sm"
                    >
                      Add To Cart
                    </button>
                  )}

                  <img className="w-[200px] mt-2" src={val.img} alt="" />
                  {wishlist.some((p) => p.id === val.id) ? (
                    <button
                      onClick={() => {
                        dispatch({
                          type: "REMOVE_FROM_WISHLIST",
                          payload: val,
                        });
                      }}
                      className="absolute right-6"
                    >
                      <AiFillHeart
                        onClick={removeWish}
                        size={22}
                        className="  rounded-full text-red-500 "
                      />
                    </button>
                  ) : (
                    <button
                      onClick={() => {
                        dispatch({
                          type: "ADD_TO_WISHLIST",

                          payload: val,
                        });
                        addWish();
                      }}
                      className="absolute right-2 top-1"
                    >
                      <AiOutlineHeart size={22} className="text-white " />
                    </button>
                  )}
                </div>
              );
            })}
          </div>
        </div>
      </div>
      <ToastContainer position="top-right" autoClose={2000} />
    </>
  );
};

export default TopRated;
