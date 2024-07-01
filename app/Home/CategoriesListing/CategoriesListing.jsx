import React from "react";
import Phones from "./Phones";
import Skin from "./Skin";
import Gadgets from "./Gadgets";

function CategoriesListing() {
  return (
    <main className="flex flex-col">
      <Phones />
      <Gadgets />
      <Skin />
    </main>
  );
}

export default CategoriesListing;
