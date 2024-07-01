import Link from "next/link";
import React from "react";

function Loc() {
  return (
    <main className=" px-10 flex gap-20 ">
      <div>
        <Link href={"/search"}>
          <p>Back</p>
        </Link>
      </div>
      <div className="flex gap-3">
        <p>Home</p>
        <p>My Phone & Tablet</p>
        <p>Samsung</p>
      </div>
    </main>
  );
}

export default Loc;
