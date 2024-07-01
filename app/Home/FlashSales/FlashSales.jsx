import Image from "next/image";
import React from "react";
import flash from "@/app/assets/flash.svg";
import item from "@/app/assets/item.svg";
import { FaStar } from "react-icons/fa";
import { CiStar } from "react-icons/ci";
function FlashSales() {
  return (
    <main className="px-10 my-10 min-h-[50vh] ">
      <secion className="w-full text-base h-[55px] px-5 text-white bg-black flex justify-between items-center ">
        <div className="flex items-center justify-center gap-4">
          <Image className="" src={flash} alt="" />
          <p className=" font-medium">Flash Sales</p>
        </div>
        <p>Time Left: 23h : 08m : 17s</p>
        <p></p>
      </secion>
      <section className="h-[321px] py-2 w-full flex gap-5 ">
        {[1, 2, 3, 4, 5, 6].map((d, id) => {
          return (
            <div className="flex  flex-col h-[321px] px-[23px] w-[210px] items-center justify-center gap-2">
              <Image className=" h-[134px] w-[134px] " src={item} alt="" />
              {/* Rating */}
              <div className="flex w-full items-center justify-between ">
                <div className="flex gap-1">
                  {[1, 2, 3, 4].map((d, id) => (
                    <FaStar size={10} className="text-[#ED2224]  " />
                  ))}
                  <FaStar size={10} className="text-[#D9D9D9]" />
                </div>
                <p className="text-[10px] font-light ">100+ Reviews</p>
              </div>
              <p className="text-[12px] font-normal w-full ">
                Car Vacuum Cleaners Portable Mini Handheld USB 120W
              </p>
              <p className="w-full text-start font-medium text-base ">₦5,600</p>
            </div>
          );
        })}
      </section>
    </main>
  );
}

export default FlashSales;
