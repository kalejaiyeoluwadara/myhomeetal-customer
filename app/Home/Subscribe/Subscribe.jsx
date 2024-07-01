import React from "react";
import watch from "@/app/assets/watch.svg";
import bac from "@/app/assets/bac3.svg";
import Image from "next/image";
function Subscribe() {
  return (
    <main className="px-10 bg-black py-[86px] ">
      <section className="w-full relative overflow-hidden justify-center flex items-center h-[274px] rounded-[24px] ">
        <Image className="cover" src={bac} alt="" />
        <div className="relative text-white z-20 flex flex-col items-center justify-center ">
          <p className="uppercase text-[10px] ">
            get notified when we update our catalog
          </p>
          <h2 className="w-[730px] text-center mt-2 mb-[23px] font-medium text-[39px]  ">
            Sign up to newsletter and receive up to ₦1,000 discount for first
            shopping
          </h2>
          <form className="bg-white rounded-[99px] w-[521px] h-[50px] px-2 py-2 flex items-center justify-between  ">
            <input
              className="w-full outline-none text-black px-2 "
              type="text"
              placeholder="user@mail.com"
            />
            <button className=" w-[146px] h-[45px] rounded-[99px] bg-[#ED2224] text-white border-[1px] border-[#881415]  ">
              Subscribe
            </button>
          </form>
        </div>
      </section>
    </main>
  );
}

export default Subscribe;
