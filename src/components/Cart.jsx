import React, { useEffect, useState } from "react";
import { CartState } from "../context/Context";
import { TiDeleteOutline } from "react-icons/ti";
import { BsEmojiFrown } from "react-icons/bs";
import { Link } from "react-router-dom";
const Cart = () => {
  const {
    state: { cart },
    dispatch,
  } = CartState();
  const [total, setTotal] = useState();

  useEffect(() => {
    setTotal(
      cart.reduce((acc, curr) => acc + Number(curr.price) * curr.qty, 0)
    );
  }, [cart]);
  console.log(cart);

  return (
    <div className="relative pt-[15vh] w-full bg-white  ">
      {cart.length === 0 ? (
        ""
      ) : (
        <h1 className="text-6xl sm:text-3xl md:text-4xl lg:text-5xl text-center font-bold text-gray-700">
          Shopping Items
        </h1>
      )}

      {cart.map((val) => {
        return (
          <div
            key={val.id}
            className="flex flex-grow  items-center justify-around m-8  mt-8  border border-gray-400 rounded-xl shadow-xl mb-20 "
          >
            <div className=" ">
              <img
                className="w-56 sm:w-36 md:w-44 lg:w-48"
                src={val.img}
                alt=""
              />
              <h1 className="font-medium text-center mb-2 mt-1">{val.title}</h1>
            </div>
            <div className=" ">
              <p className="text-xl sm:text-lg font-medium">
                ${val.price * val.qty}
              </p>
            </div>
            <div className="flex items-center  gap-4 sm:gap-1 md:gap-3 font-medium text-xl sm:text-lg bg-green-500 border rounded-lg py-1 px-2">
              <button
                onClick={() => {
                  dispatch({
                    type: "MINUS_QTY",
                    payload: val,
                  });
                }}
              >
                -
              </button>
              <p>{val.qty}</p>
              <button
                onClick={() => {
                  dispatch({
                    type: "PLUS_QTY",
                    payload: val,
                  });
                }}
              >
                +
              </button>
            </div>
            <div>
              <button
                onClick={() => {
                  dispatch({
                    type: "REMOVE_FROM_CART",
                    payload: val,
                  });
                }}
              >
                <TiDeleteOutline size={28} className="text-red-700" />
              </button>
            </div>
          </div>
        );
      })}
      {cart.length === 0 ? (
        <div className="flex flex-col items-center gap-24">
          <h1 className="text-6xl  sm:text-3xl md:4xl  font-bold text-gray-700">
            {" "}
            Your Cart is Empty
          </h1>
          <BsEmojiFrown
            size={200}
            className="bg-yellow-400 rounded-full animate-bounce"
          />
          <Link to="/">
            <button className="text-2xl font-semibold border py-1 px-2 bg-green-600 text-white hover:scale-110">
              Shop Now
            </button>
          </Link>
        </div>
      ) : (
        <div
          className="flex items-center justify-around
       bg-violet-500 text-slate-100 h-[8vh] w-full fixed bottom-0  z-50 "
        >
          <h1 className="text-4xl sm:text-lg font-bold sm:ml-2 md:ml-4   ">
            Subtotal ({cart.length}) Items
          </h1>
          <p className=" font-semibold text-xl sm:text-lg">Total: ${total}</p>
          <button className="border px-2 py-1 sm:px-1 sm:py-0  bg-slate-100 text-gray-800 font-semibold sm:text-sm sm:mr-2 md:mr-4 ">
            Proceed to Checkout
          </button>
        </div>
      )}
    </div>
  );
};

export default Cart;
