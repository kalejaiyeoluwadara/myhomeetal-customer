import Image from "next/image";
import React from "react";
import phone from "@/app/assets/big.svg";
import cart from "@/app/assets/cart.svg";
import heart from "@/app/assets/heart.svg";
import { FaStar } from "react-icons/fa";
function Item() {
  return (
    <main className="flex items-center justify-center">
      <section className="flex justify-start items-end mb-20 px-20 mt-20 ">
        <div className="flex flex-col gap-3">
          {[1, 2, 3, 4].map((d, id) => {
            return (
              <div className="h-[111px] w-[111px] bg-gray-200 rounded-[20px] "></div>
            );
          })}
        </div>
        <div className="flex items-end justify-end ">
          <Image
            src={phone}
            className="  w-[429px] h-[499px] object-cover "
            alt=""
          />
        </div>
      </section>

      <section>
        <p className="flex items-center">
          Brand:{" "}
          <span className="text-deepred h-[45px] ml-2 px-4 bg-red-50 rounded-[99px] center  font-medium ">
            Samsung
          </span>{" "}
        </p>
        <h2 className="w-[488px] text-[25px] font-medium mt-4 ">
          Samsung Galaxy A14 6.6" 4GB RAM/64GB ROM Android 13 - Pearl
        </h2>

        <div className="flex mt-4 w-full justify-start items-end gap-2 ">
          <div className="flex items-center gap-1">
            <span>Rating 4.7</span>
            {[1, 2, 3, 4].map((d, id) => (
              <FaStar size={20} className="text-[#ED2224]  " />
            ))}
            <FaStar size={20} className="text-[#D9D9D9]" />
          </div>
          <p className="text-[14px] font-light ">100+ Reviews</p>
        </div>
        <p className="text-[49px] font-medium mt-4 mb-10 ">₦145,600</p>
        <section className="flex gap-4">
          <button className="flex font-medium text-base px-10 w-[361px] h-[60px] rounded-[67px] items-center justify-between ">
            <Image src={cart} className="" alt="" />
            <p>Add to Cart</p>
            <p></p>
          </button>
          <div className="center rounded-full h-[60px] w-[60px] bg-[#F68182] ">
            <Image src={heart} className="" alt="" />
          </div>
        </section>
      </section>
    </main>
  );
}

export default Item;
