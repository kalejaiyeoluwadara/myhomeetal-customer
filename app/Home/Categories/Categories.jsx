import React from "react";
import "@/app/Home/Categories/style.css";

function Categories() {
  return (
    <main className="my-8 flex gap-8 px-[40px]">
      <div>
        <p className="text-base font-medium">Categories: </p>
      </div>
      <div className="marquee-container relative">
        <div className="marq flex gap-12">
          {[1, 2, 3, 4, 5, 6, 7].map((d, id) => (
            <p key={id} className="text-base flex-shrink-0 font-normal">
              My Appliances
            </p>
          ))}
        </div>
        <div className="marquee-mask"></div>
      </div>
    </main>
  );
}

export default Categories;
