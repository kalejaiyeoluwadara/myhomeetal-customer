import Image from "next/image";
import React from "react";
import { CiSearch } from "react-icons/ci";
import logo from "@/app/assets/logo.svg";
import Link from "next/link";
function Nav() {
  return (
    <main className="w-full my-[37px] px-[40px] flex justify-between items-center ">
      <section className="flex gap-[17px] items-center">
        <Link href={"/"}>
          <Image className=" h-[60px] w-[60px] " src={logo} alt="" />
        </Link>
        <div className="flex gap-6">
          <p className="text-base font-medium">Categories</p>
          <p className="text-base font-medium">Shop</p>
          <p className="text-base font-medium">Deals</p>
        </div>
      </section>
      <section className="flex items-center justify-center">
        <div className="flex gap-2 border rounded-[99px] h-[50px] w-[473px] justify-between px-4 items-center">
          <input
            className="border-none w-full outline-none"
            placeholder="what can we help you find?"
            type="text"
          />
          <CiSearch className="flex-shrink-0 " size={25} />
        </div>
      </section>
      <section className="flex gap-6 items-center">
        <p className="text-base font-medium">My account</p>
        <p className="text-base font-medium">Help</p>
        <p className="text-base font-medium">Cart</p>
      </section>
    </main>
  );
}

export default Nav;
