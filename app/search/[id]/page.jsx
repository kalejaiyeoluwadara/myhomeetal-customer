import React from "react";
import Banner from "@/app/Home/Banner/Banner";
import Nav from "@/app/Home/Nav/Nav";
import Search from "../Search";
import Categories from "@/app/Home/Categories/Categories";
import Loc from "./Loc";
import Item from "./Item";
import Subscribe from "@/app/Home/Subscribe/Subscribe";
import Spec from "./Spec";
import Reviews from "./Reviews";

function Page() {
  return (
    <main>
      <Banner />
      <Nav />
      <Loc />
      <Item />
      <Spec />
      <div className="grid-cols-3 px-10">
        <Reviews />
        <div></div>
      </div>
      <Subscribe />
    </main>
  );
}

export default Page;
