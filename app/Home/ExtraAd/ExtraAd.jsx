import React from "react";
import watch from "@/app/assets/watch.svg";
import bac from "@/app/assets/bac.svg";
import Image from "next/image";
function ExtraAd() {
  return (
    <main className="px-10">
      <section className="w-full relative overflow-hidden justify-between flex items-center h-[274px] rounded-[24px] ">
        <Image className="cover" src={bac} alt="" />
        <div className="flex px-[45px] text-white relative z-20 flex-col ">
          <p className="uppercase text-[10px] ">
            Best Deal Online on smart watches
          </p>
          <h2 className="w-[349px] mt-2 mb-[23px] font-medium text-[39px]  ">
            Save up to 40% Apple watch Ultra
          </h2>
          <button className=" bg-white text-base font-medium  h-[40px] w-[99px] rounded-[99px] text-[#C70E10]  ">
            Buy now
          </button>
        </div>
        <div className="relative z-20">
          <Image className="" src={watch} alt="" />
        </div>
      </section>
    </main>
  );
}

export default ExtraAd;
