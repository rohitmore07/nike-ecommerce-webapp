import React from "react";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { AiFillStar } from "react-icons/ai";

import { CartState } from "../context/Context";
const PopularSale = ({ popularsales: { title, items } }) => {
  const {
    state: { cart },
    dispatch,
  } = CartState();
  const notify = () => toast.success("Added!");
  const warning = () => toast.warn("Removed!");

  return (
    <>
      <div className="  h-auto pb-16 ">
        <div className="pt-16">
          <h1 className="text-5xl sm:text-4xl  font-bold ml-16 sm:text-center md:text-center  lg:text-center ">
            {title}
          </h1>
          <div className="flex flex-wrap  mt-14 justify-around  items-center sm:gap-6 md:gap-8 lg:gap-10  ">
            {items.map((val) => {
              return (
                <div
                  key={val.id}
                  className="relative  flex  justify-between  items-center bg-indigo-500 rounded-2xl shadow-2xl"
                >
                  <div className="pl-4 pt-4">
                    <p className="text-3xl  text-slate-200 ">{val.title}</p>
                    <p className="text-2xl  pt-2 text-slate-200">{val.text}</p>

                    <div className="flex items-center mt-5">
                      <p className="border px-2  bg-slate-300 rounded-lg shadow-xl font-semibold text-gray-800">
                        ${val.price}
                      </p>
                      <AiFillStar className="ml-16 text-slate-200 " size={22} />
                      <p className="text-slate-200 ml-4 text-lg">
                        {val.rating}
                      </p>
                    </div>

                    <div className="text-center mb-4 ">
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
                          px-3 py-2 hover:bg-white bg-transparent hover:text-indigo-500 text-white rounded-lg font-medium text-sm"
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
                          px-3 py-2 hover:bg-white bg-transparent hover:text-indigo-500 text-white rounded-lg font-medium text-sm"
                        >
                          Add To Cart
                        </button>
                      )}
                    </div>
                  </div>
                  <div>
                    <img
                      className="w-56 h-28 rotate-[-35deg] hover:scale-110 transition-all "
                      src={val.img}
                      alt=""
                    />
                  </div>
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

export default PopularSale;
