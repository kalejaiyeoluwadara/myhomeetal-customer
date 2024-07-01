import React from "react";
import Side from "./Side";
import Main from "./Main";

function Search() {
  return (
    <main className="px-10 grid grid-cols-3 gap-4 ">
      <Side />
      <Main />
    </main>
  );
}

export default Search;
