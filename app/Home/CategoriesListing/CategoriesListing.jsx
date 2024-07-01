import React from "react";
import Phones from "./Phones";
import Skin from "./Skin";

function CategoriesListing() {
  return (
    <main className="flex flex-col">
      <Phones />
      <Skin />
    </main>
  );
}

export default CategoriesListing;
