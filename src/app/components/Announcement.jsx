import React from "react";
import Image from "next/image";
import image1 from "../../assets/announcement/announcement-1.jpg";
import image2 from "../../assets/announcement/announcement-2.jpg";
import image3 from "../../assets/announcement/announcement-3.jpg";

export default function Announcement() {
  return (
    <div className="mt-16 grid grid-cols-1 lg:grid-cols-3 gap-6">
      {/* Card 1 */}
      <div className="relative rounded-2xl overflow-hidden flex flex-col items-center p-6 text-white h-96">
        {/* Background Image */}
        <Image
          src={image1}
          alt="Sale of the Month"
          fill
          className="object-cover"
        />
        {/* Overlay (optional darker tint for readability) */}
        <div className="absolute inset-0 bg-blue-500/40"></div>

        {/* Content */}
        <div className="relative z-10 text-center">
          <p className="uppercase tracking-wider text-sm">Best Deals</p>
          <h3 className="text-2xl font-bold mt-2">Sale of the Month</h3>
          <p className="text-lg mt-2">00 : 02 : 18 : 46</p>
          <button className="mt-4 bg-white text-green-600 font-medium px-6 py-2 rounded-full hover:bg-green-100 transition">
            Shop Now →
          </button>
        </div>
      </div>

      {/* Card 2 */}
      <div className="relative rounded-2xl overflow-hidden flex flex-col items-center p-6 text-white h-96">
        <Image src={image2} alt="Low-Fat Meat" fill className="object-cover" />
        <div className="absolute inset-0 bg-black/40"></div>

        <div className="relative z-10 text-center">
          <p className="uppercase tracking-wider text-sm">85% Fat Free</p>
          <h3 className="text-2xl font-bold mt-2">Low-Fat Meat</h3>
          <p className="mt-2">
            Started at{" "}
            <span className="text-yellow-400 font-semibold">$79.99</span>
          </p>
          <button className="mt-4 bg-white text-green-600 font-medium px-6 py-2 rounded-full hover:bg-green-100 transition">
            Shop Now →
          </button>
        </div>
      </div>

      {/* Card 3 */}
      <div className="relative rounded-2xl overflow-hidden flex flex-col items-center p-6 text-black h-96">
        <Image src={image3} alt="Fresh Fruit" fill className="object-cover" />
        <div className="absolute inset-0 bg-yellow-400/40"></div>

        <div className="relative z-10 text-center">
          <p className="uppercase tracking-wider text-sm">Summer Sale</p>
          <h3 className="text-2xl font-bold mt-2">100% Fresh Fruit</h3>
          <p className="mt-2">
            Up to{" "}
            <span className="bg-black text-white px-2 py-1 rounded">
              64% OFF
            </span>
          </p>
          <button className="mt-4 bg-white text-green-600 font-medium px-6 py-2 rounded-full hover:bg-green-100 transition">
            Shop Now →
          </button>
        </div>
      </div>
    </div>
  );
}
