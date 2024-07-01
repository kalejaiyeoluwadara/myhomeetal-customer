import React from "react";

function Side() {
  return (
    <main>
      <p className="w-full text-[12px] mb-8 ">
        Showing over 3,000 results for "Samsung Galaxy A14 6.6"
      </p>
      {/* first rect */}
      <div className="rounded-[20px] h-auto border p-6 flex flex-col gap-2 items-center justify-center ">
        <p className="core text-center ">Sort by:</p>
        <div className="w-full flex flex-col gap-3 ">
          {[1, 2, 3, 4, 5].map((d, id) => {
            return (
              <div className="w-full h-[57px] border rounded-[5px]  text-black flex items-center justify-center text-[14px] ">
                Price Low to High
              </div>
            );
          })}
        </div>
      </div>
      {/* sec rect */}
      <div className="rounded-[20px] mt-8 h-auto border p-6 flex flex-col gap-2 items-center justify-center ">
        <p className="core text-start w-full ">Discount Percentage::</p>
        <div className="w-full flex flex-col gap-3 ">
          {[1, 2, 3, 4].map((d, id) => {
            return (
              <div className="flex gap-2 items-center justify-start ">
                <div className="h-[20px] w-[20px] rounded-full border "></div>
                <p>50% or more</p>
              </div>
            );
          })}
        </div>
      </div>
      {/* third rect */}
      <div className="rounded-[20px] my-8 h-auto border p-6 flex flex-col gap-2 items-center justify-center ">
        <div className="w-full flex justify-between items-center">
          <p className="core text-start w-full ">Price (₦):</p>
          <p className="text-primary font-light ">Apply</p>
        </div>
        <div className="flex items-center justify-center gap-4 mt-8">
          <div className="border w-[110px] h-[37px] rounded-[84px] center  ">
            20,000
          </div>
          <p>-</p>
          <div className="border w-[110px] h-[37px] rounded-[84px] center  ">
            70,000
          </div>
        </div>
      </div>
    </main>
  );
}

export default Side;
