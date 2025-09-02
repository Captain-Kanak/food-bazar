import React from "react";
import Image from "next/image";
import image1 from "../../assets/banner/banner_1.jpg";
import image2 from "../../assets/banner/banner_2.png";
import image3 from "../../assets/banner/banner_3.jpg";

export default function Banner() {
  return (
    <div className="my-5 grid grid-cols-1 lg:grid-cols-3 gap-4">
      {/* banner 1 */}
      <div className="relative h-[250px] lg:h-[500px] lg:col-span-2 lg:row-span-2 rounded-xl overflow-hidden bg-green-600 flex items-center">
        {/* Text Left */}
        <div className="z-10 p-8 lg:p-12 max-w-md text-white">
          <h1 className="text-2xl lg:text-4xl font-bold mb-4 leading-tight">
            Fresh & Healthy <br /> Organic Food
          </h1>
          <div className="mb-6 border-l-4 border-yellow-400 pl-3">
            <p className="text-lg">
              Sale up to{" "}
              <span className="font-bold text-yellow-300">30% OFF</span>
            </p>
            <p>Free shipping on all your order.</p>
          </div>
          <button className="px-6 py-2 bg-white text-green-600 font-semibold rounded-full shadow hover:bg-gray-100 transition">
            Shop Now →
          </button>
        </div>

        {/* Image Right */}
        <div className="absolute inset-0">
          <Image
            src={image1}
            alt="banner"
            fill
            className="object-cover object-right opacity-90"
          />
        </div>
      </div>

      {/* banner 2 */}
      <div className="relative h-[250px] lg:h-[240px] rounded-xl overflow-hidden bg-white">
        {/* Text Top Left */}
        <div className="absolute top-0 left-0 z-10 p-6 text-black">
          <h3 className="text-sm uppercase tracking-wide">Summer Sale</h3>
          <h1 className="text-2xl font-bold">75% OFF</h1>
          <p className="text-gray-600 text-sm mb-3">Only Fruit & Vegetable</p>
          <button className="px-4 py-1 bg-green-500 hover:bg-green-600 text-white rounded-lg">
            Shop Now
          </button>
        </div>

        {/* Image Bottom Right */}
        <div className="absolute bottom-0 right-0 w-full h-50 z-0">
          <Image
            src={image2}
            alt="banner"
            fill
            className="object-contain object-bottom-right"
          />
        </div>
      </div>

      {/* banner 3 */}
      <div className="relative h-[250px] lg:h-[240px] rounded-xl overflow-hidden">
        {/* Center Text */}
        <div className="absolute inset-0 z-10 flex flex-col items-center justify-center text-center text-white bg-black/40">
          <p className="uppercase text-sm tracking-wide">Best Deal</p>
          <h3 className="text-2xl lg:text-3xl font-bold mb-3">
            Special Products <br /> Deal of the Month
          </h3>
          <button className="px-6 py-2 bg-green-500 hover:bg-green-600 text-white rounded-full">
            Shop Now →
          </button>
        </div>

        {/* Background Image */}
        <Image src={image3} alt="banner" fill className="object-cover" />
      </div>
    </div>
  );
}
