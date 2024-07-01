import React from "react";
import Banner from "../Home/Banner/Banner";
import Nav from "../Home/Nav/Nav";
import Categories from "../Home/Categories/Categories";
import Search from "./Search";

function Page() {
  return (
    <main>
      <Banner />
      <Nav />
      <Categories />
      <Search />
    </main>
  );
}

export default Page;
