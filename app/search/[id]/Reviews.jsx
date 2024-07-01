import React from "react";
import { FaStar } from "react-icons/fa";
function Reviews() {
  return (
    <main className="col-span-2 min-h-[100vh] rounded-[20px] w-auto border h-auto px-8 py-12 ">
      <section>
        <div className="flex items-center gap-8 ">
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
        <div></div>
      </section>
      <section></section>
    </main>
  );
}

export default Reviews;
