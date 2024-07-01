import React from "react";
import Banner from "./Banner/Banner";
import Nav from "./Nav/Nav";
import Categories from "./Categories/Categories";
import Ad from "./Ads/Ad";
import MainCategories from "./mainCategories/MainCategories";
import FlashSales from "./FlashSales/FlashSales";
function Home() {
  return (
    <main className="w-full ">
      <Banner />
      <Nav />
      <Categories />
      <Ad />
      <MainCategories />
      <FlashSales />
    </main>
  );
}

export default Home;
