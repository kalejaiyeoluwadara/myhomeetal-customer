import React from "react";
import phone2 from "@/app/assets/phone2.svg";
import bac from "@/app/assets/bac2.svg";
import Image from "next/image";
function Ad2() {
  return (
    <section className="w-[50%] relative overflow-hidden justify-between flex items-center h-[274px] rounded-[24px]  ">
      <Image className="cover" src={bac} alt="" />
      <div className="flex px-[15px] text-white relative z-20 flex-col ">
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
      <div className="relative flex-shrink-0 z-20">
        <Image
          className="-translate-x-12 w-[250px] h-[250px] "
          src={phone2}
          alt=""
        />
      </div>
    </section>
  );
}

export default Ad2;
