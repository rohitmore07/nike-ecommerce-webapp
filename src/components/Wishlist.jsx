import { divide } from "lodash";
import React from "react";
import { Link } from "react-router-dom";
import { CartState } from "../context/Context";

const Wishlist = () => {
  const {
    state: { wishlist, cart },
    dispatch,
  } = CartState();

  return (
    <>
      <div className="pt-[15vh] bg-white">
        {wishlist.length === 0 ? (
          <div className="text-5xl sm:text-3xl text-center text-gray-700">
            <h1>Your Wishlist is Empty</h1>
            <Link to="/">
              <button className="text-xl font-semibold border rounded-lg py-1 px-3 bg-green-600 text-white hover:scale-110 mt-10">
                Add Now
              </button>
            </Link>
          </div>
        ) : (
          <div>
            <h1 className="text-center text-6xl font-semibold pb-10 text-gray-700">
              My Wishlist{" "}
            </h1>
            <div className="grid grid-cols-4 gap-10 mx-14  sm:grid-cols-1 sm:gap-4 md:grid-cols-2 md:gap-8 lg:grid-cols-3">
              {wishlist.map((val) => {
                return (
                  <div
                    key={val.id}
                    className="flex flex-col items-center justify-evenly  rounded-xl shadow-2xl px-3 py-4  bg-violet-500"
                  >
                    <img className="w-56" src={val.img} alt="" />
                    <h1 className="text-lg text-slate-100">{val.title}</h1>
                    <div className="flex gap-8">
                      <p className="font-semibold text-slate-100">
                        ${val.price}
                      </p>
                      {cart.some((p) => p.id === val.id) ? (
                        <button
                          onClick={() => {
                            dispatch({
                              type: "REMOVE_FROM_CART",
                              payload: val,
                            });
                          }}
                          className=" px-2  py-1 rounded-xl  bg-gray-200 text-gray-700 font-semibold hover:bg-white hover:text-black"
                        >
                          Remove
                        </button>
                      ) : (
                        <button
                          onClick={() => {
                            dispatch({
                              type: "ADD_TO_CART",
                              payload: val,
                            });
                          }}
                          className=" px-2  py-1 rounded-xl  bg-gray-200 text-gray-700 font-semibold hover:bg-white hover:text-black"
                        >
                          Add To Bag
                        </button>
                      )}
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        )}
      </div>
    </>
  );
};

export default Wishlist;
