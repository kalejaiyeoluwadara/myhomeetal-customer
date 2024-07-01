import Image from "next/image";
import React from "react";
import phone from "@/app/assets/phone2.svg";
import { FaStar } from "react-icons/fa";
import { CiStar } from "react-icons/ci";
import { CgMenuGridR } from "react-icons/cg";
function Main() {
  return (
    <div className="col-span-2 flex flex-col gap-2 ">
      <section className="flex mb-2 items-start  justify-between">
        <div></div>
        <div className="flex items-start gap-2">
          <CgMenuGridR size={30} />
          <CgMenuGridR size={30} />
        </div>
      </section>
      <main className="flex flex-col w-[90%] gap-3">
        {[1, 2, 3, 4, 5, 6].map((d, id) => {
          return (
            <section className="flex border w-full gap-8 h-auto p-6 rounded-[20px] justify-between items-start ">
              <div>
                <Image
                  src={phone}
                  alt=""
                  className=" flex-shrink-0 h-[133px] w-[133px] "
                />
              </div>
              <div className="flex flex-col gap-2">
                <p>
                  Samsung Galaxy A14 6.6" 4GB RAM/64GB ROM Android 13 - Light
                  Green
                </p>
                <div className="flex w-full items-center gap-2 ">
                  <div className="flex items-center gap-1">
                    4.7
                    {[1, 2, 3, 4].map((d, id) => (
                      <FaStar size={10} className="text-[#ED2224]  " />
                    ))}
                    <FaStar size={10} className="text-[#D9D9D9]" />
                  </div>
                  <p className="text-[14px] font-light ">100+ Reviews</p>
                </div>
                <div className="flex justify-between items-center">
                  <p className="text-[26px] font-medium ">₦145,600</p>
                  <button className="flex w-[205px] h-[50px] rounded-[99px] center ">
                    Buy now
                  </button>
                </div>
              </div>
            </section>
          );
        })}
      </main>
    </div>
  );
}

export default Main;
