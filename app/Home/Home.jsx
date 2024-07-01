import React from "react";
import Banner from "./Banner/Banner";
import Nav from "./Nav/Nav";
import Categories from "./Categories/Categories";
import Ad from "./Ads/Ad";
function Home() {
  return (
    <main className="w-full ">
      <Banner />
      <Nav />
      <Categories />
      <Ad />
    </main>
  );
}

export default Home;
