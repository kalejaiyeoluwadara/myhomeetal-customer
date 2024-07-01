import React from "react";
import shop from "@/app/assets/shop.svg";
import Image from "next/image";

function Spec() {
  return (
    <main className="px-10 min-h-[100vh] pb-20 ">
      {/* Product details */}
      <section className="grid gap-8 grid-cols-3">
        <div className="border rounded-[20px] w-auto col-span-2 ">
          <div className=" rounded-t-[10px] bg-primary h-[79px] w-full flex items-center px-6 ">
            <p className="font-medium text-white ">PRODUCT DETAILS</p>
          </div>
          <div className="px-4 py-[38px] flex flex-col gap-6 pr-8 ">
            <p>
              When it comes to support, the Serta Big and Tall executive office
              chair has your back - literally. This ergonomic executive chair is
              designed to deliver maximum comfort with contoured lumbar support
              to ease your aching back. Deep layered foam cushions with
              signature Serta comfort will cradle your hips, back, neck, and
              head, making it the perfect chair for long work sessions or when
              you're burning the midnight oil.
            </p>
            <p>
              Luxurious and stylish, this executive chair can be used anywhere
              Gray bonded leather cushioned seat is easy to clean with a damp
              cloth Ergonomic layered body pillows and contoured lumbar section
              for superior comfort Overall dimensions: 45.75"-49.5"H x 28"W x
              30.5"D Seat dimensions: 20"-23.75"H x 22"W x 18.75"D Back
              dimensions: 22"W Padded fixed arms allow you to set the height for
              custom ergonomics Locking tilt with adjustable tension control for
              comfort Weight capacity: up to 350 lbs. Full assembly required
              1-year manufacturer limited warranty on cushions and components
            </p>
            <p>
              From a trusted brand committed to offering uncompromising quality,
              comfort and style, the Serta Big & Tall Executive Office Chair is
              not your average office chair. Designed to accommodate up to 350
              pounds, this heavy-duty office chair is made with a more generous
              design to support taller and larger body types. The Big & Tall
              commercial-grade components ensure stability and durability that
              stands up to wear and tear. The layered body pillows on this
              ergonomic office chair provide cushioned comfort, to help
              alleviate discomfort caused by sitting throughout your workday.
              Height and tilt adjustments let you position this executive chair
              to improve body alignment, while arm controls provide optimal
              placement for your hands, wrists and forearms. The contoured
              lumbar zone is also adjustable to relieve stress on your lower
              back. Finished in Puresoft faux leather material,
            </p>
          </div>
        </div>
        <div className="w-auto bg-[#F4F4F4] py-8 flex items-center justify-start flex-col px-8 h-auto rounded-[20px] ">
          <p className="w-full font-light text-center">Enter your location:</p>
          <input
            placeholder="Lekki Ajah, Lagos"
            type="text"
            className="bg-white p-4 mt-4 w-full h-[60px] rounded-xl border "
          />
          <section className="flex w-full items-start mt-6 gap-3 ">
            <div className="h-[40px] w-[40px] center flex-shrink-0 rounded-md border ">
              <Image className="" src={shop} alt="" />
            </div>
            <div className="flex flex-col gap-1">
              <h3 className="font-semibold">Pickup Station</h3>
              <div>
                <p className="text-[12px]">Delivery Fees ₦ 0</p>
                <p className="text-[12px]">
                  Available for pickup now. Order within the next 24hrs to
                  secure your item.
                </p>
              </div>
            </div>
          </section>
          <section className="flex w-full items-start mt-6 gap-3 ">
            <div className="h-[40px] w-[40px] center flex-shrink-0 rounded-md border ">
              <Image className="" src={shop} alt="" />
            </div>
            <div className="flex flex-col gap-1">
              <h3 className="font-semibold">Door Delivery</h3>
              <div>
                <p className="text-[12px]">Delivery Fees ₦ 250</p>
                <p className="text-[12px]">
                  Arriving at pickup station between 27 June & 28 June when you
                  order within next 3hrs 51mins
                </p>
              </div>
            </div>
          </section>
        </div>
        {/* Key features */}
        <div className="border rounded-[20px] w-auto col-span-2 ">
          <div className=" rounded-t-[10px] bg-primary h-[79px] w-full flex items-center px-6 ">
            <p className="font-medium text-white ">KEY FEATURES</p>
          </div>
          <div className="px-4 py-[38px]  flex flex-col gap-6 pr-8 ">
            <ul className=" px-6 list-disc ">
              {[1, 2, 3, 4, 5, 6].map((d, id) => {
                return <li>6.1" Super Retina XDR display.</li>;
              })}
            </ul>
          </div>
        </div>
        {/* SPECIFICATIONS */}
        <div className="border rounded-[20px] w-auto col-span-2 ">
          <div className=" rounded-t-[10px] bg-primary h-[79px] w-full flex items-center px-6 ">
            <p className="font-medium text-white ">SPECIFICATIONS</p>
          </div>
          <div className="px-4 py-[38px]  flex flex-col gap-3 pr-8 ">
            <p className="font-light">
              <span className="font-bold">SKU:</span> GE779SE0JJ
            </p>

            <p className="font-light">
              <span className="font-bold">Size ( L x W x H cm):</span> 35.51 x
              27.86 x 13.33
            </p>
            <p className="font-light">
              <span className="font-bold">Weight (Kg):</span> 2.597
            </p>
            <p className="font-light">
              <span className="font-bold">Color:</span> Black, Red
            </p>
            <p className="font-light">
              <span className="font-bold">Main Material:</span> Titanium
            </p>
            <p className="font-light">
              <span className="font-bold">Model:</span> 2145f
            </p>
          </div>
        </div>
      </section>
    </main>
  );
}

export default Spec;
