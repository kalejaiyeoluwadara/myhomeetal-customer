"use client";
import React from "react";
import phone from "@/app/assets/phone.svg";
import Image from "next/image";
function MainCategories() {
  return (
    <div className="w-full my-12 flex items-center justify-center px-10 ">
      <div className="w-full h-auto py-20 bg-[#F4F4F4] pl-20 items-center justify-center rounded-[20px] grid grid-cols-5 gap-[100px] ">
        {[1, 2, 3, 4, 5, 6, 7, 8, 8, 9].map((d, id) => {
          return (
            <div className="flex flex-col gap-4 center" key={id}>
              <Image className="" src={phone} alt="" />
              <p className="text-base font-normal ">My Gadgets</p>
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default MainCategories;
