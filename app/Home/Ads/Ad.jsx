import Image from "next/image";
import React from "react";
import ad from "@/app/assets/ad.svg";
import "@/app/Home/Categories/style.css";
function Ad() {
  return (
    <main className="w-screen    flex gap-12 my-[70px] overflow-hidden ">
      <section className="flex-shrink-0 w-[700px] h-[274px] relative overflow-hidden rounded-[24px]  ">
        <Image className="" src={ad} alt="" />
      </section>
      <section className="flex-shrink-0 w-[700px] h-[274px] relative overflow-hidden rounded-[24px]  ">
        <Image className="" src={ad} alt="" />
      </section>
      <section className="flex-shrink-0 w-[700px] h-[274px] relative overflow-hidden rounded-[24px]  ">
        <Image className="" src={ad} alt="" />
      </section>
    </main>
  );
}

export default Ad;
