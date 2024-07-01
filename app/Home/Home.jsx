import React from "react";
import Banner from "./Banner/Banner";
import Nav from "./Nav/Nav";
import Categories from "./Categories/Categories";
import Ad from "./Ads/Ad";
import MainCategories from "./mainCategories/MainCategories";
import FlashSales from "./FlashSales/FlashSales";
import ExtraAd from "./ExtraAd/ExtraAd";
import NewProducts from "./NewProducts/NewProducts";
import CategoriesListing from "./CategoriesListing/CategoriesListing";
import MoreAd from "./MoreAd/MoreAd";
function Home() {
  return (
    <main className="w-full ">
      <Banner />
      <Nav />
      <Categories />
      <Ad />
      <MainCategories />
      <FlashSales />
      <ExtraAd />
      <NewProducts />
      <MoreAd />
      <CategoriesListing />
    </main>
  );
}

export default Home;
