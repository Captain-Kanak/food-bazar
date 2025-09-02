import React from "react";
import summerImage from "../../assets/summer-off.png";
import Image from "next/image";

export default function SummerOff() {
  return (
    <div className="mt-16 grid grid-cols-1 lg:grid-cols-3 bg-black text-white rounded-2xl overflow-hidden">
      {/* Left Image */}
      <div className="lg:col-span-2 relative h-64 lg:h-auto">
        <Image
          src={summerImage}
          alt="summer deal image"
          fill
          className="object-cover"
        />
      </div>

      {/* Right Content */}
      <div className="flex flex-col items-start justify-center p-16">
        <p className="uppercase tracking-wider text-sm text-yellow-400">
          Summer Sale
        </p>
        <h1 className="text-4xl font-bold mt-2">37% OFF</h1>
        <p className="mt-4 text-gray-300 leading-relaxed">
          Free on all your order, Free Shipping and 30 days money-back guarantee
        </p>
        <button className="mt-6 bg-white text-black font-medium px-6 py-3 rounded-full hover:bg-yellow-400 hover:text-black transition">
          Shop Now →
        </button>
      </div>
    </div>
  );
}
