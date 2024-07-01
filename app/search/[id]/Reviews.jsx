import React from "react";
import { FaStar } from "react-icons/fa";
function Reviews() {
  return (
    <main className="col-span-2 mb-20 min-h-[100vh] rounded-[20px] w-auto border h-auto px-8 py-12 ">
      <section className="flex items-start justify-between ">
        <div className="flex w-[50%] items-center gap-8 ">
          <div className=" h-[116px] center text-[49px] font-medium text-white w-[116px] rounded-full bg-[#ED2224] ">
            4
          </div>
          <div className="flex flex-col gap-2">
            <div className="flex gap-3 ">
              {[1, 2, 3, 4].map((d, id) => (
                <FaStar size={20} className="text-[#ED2224]  " />
              ))}
              <FaStar size={20} className="text-[#D9D9D9]" />
            </div>
            <p>52 reviews</p>
          </div>
        </div>
        <div className="w-[50%] h-[180px] flex-col pl-[97px] gap-[15px] flex items-start justify-center border-l   ">
          <div className="flex items-center gap-[25px]">
            {" "}
            <p className="flex gap-[9px]">
              5 <FaStar className="text-red-600  " size={20} />{" "}
            </p>
            <div className="bg-gray-300 w-[151px] h-[6px] rounded-[99px] ">
              <div className="w-[70%] h-full rounded-[99px] bg-[#ED2224]  "></div>
            </div>
            <p className="text-[#292929]">(70%)</p>
          </div>

          <div className="flex items-center gap-[25px]">
            {" "}
            <p className="flex gap-[9px]">
              4 <FaStar className="text-red-600  " size={20} />{" "}
            </p>
            <div className="bg-gray-300 w-[151px] h-[6px] rounded-[99px] ">
              <div className="w-[20%] h-full rounded-[99px] bg-[#ED2224]  "></div>
            </div>
            <p className="text-[#292929]">(40%)</p>
          </div>

          <div className="flex items-center gap-[25px]">
            {" "}
            <p className="flex gap-[9px]">
              3 <FaStar className="text-red-600  " size={20} />{" "}
            </p>
            <div className="bg-gray-300 w-[151px] h-[6px] rounded-[99px] ">
              <div className="w-[10%] h-full rounded-[99px] bg-[#ED2224]  "></div>
            </div>
            <p className="text-[#292929]">(10%)</p>
          </div>

          <div className="flex items-center gap-[25px]">
            {" "}
            <p className="flex gap-[9px]">
              2 <FaStar className="text-red-600  " size={20} />{" "}
            </p>
            <div className="bg-gray-300 w-[151px] h-[6px] rounded-[99px] ">
              <div className="w-[0%] h-full rounded-[99px] bg-[#ED2224]  "></div>
            </div>
            <p className="text-[#292929]">(0%)</p>
          </div>

          <div className="flex items-center gap-[25px]">
            {" "}
            <p className="flex gap-[9px]">
              1 <FaStar className="text-red-600  " size={20} />{" "}
            </p>
            <div className="bg-gray-300 w-[151px] h-[6px] rounded-[99px] ">
              <div className="w-[0%] h-full rounded-[99px] bg-[#ED2224]  "></div>
            </div>
            <p className="text-[#292929]">(0%)</p>
          </div>
        </div>
      </section>
      <section className="mt-8 flex gap-5 flex-col  ">
        {[1, 2, 3, 4, 5].map((d, id) => {
          return (
            <div className="rounded-xl bg-[#F4F4F4] h-[260px] p-8 flex flex-col gap-8 w-full ">
              <p className="w-full text-end ">Posted Feb 7, 2023</p>
              <div className="flex gap-[21px] items-center ">
                <div className="h-[70px] flex-shrink-0 bg-gray-200 rounded-full w-[70px] " />
                <p className="w-[60%] text-[14px] font-light ">
                  From a trusted brand committed to offering uncompromising
                  quality, comfort and style, the Serta Big & Tall Executive
                  Office Chair is not your average office chair.{" "}
                </p>
              </div>
              <div className="flex justify-end gap-3 ">
                {[1, 2, 3, 4].map((d, id) => (
                  <FaStar size={20} className="text-[#ED2224]  " />
                ))}
                <FaStar size={20} className="text-[#D9D9D9]" />
              </div>
            </div>
          );
        })}
      </section>
    </main>
  );
}

export default Reviews;
