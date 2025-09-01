import Link from "next/link";
import React from "react";
import { CgLogIn } from "react-icons/cg";
import { CiLocationOn } from "react-icons/ci";

export default function TopNavbar() {
  return (
    <div className="bg-primary text-white py-2">
      <div className="max-w-7xl mx-auto px-4 lg:px-0 flex items-center justify-between">
        {/* shop location */}
        <div className="flex items-center gap-8">
          <p className="flex items-center gap-2">
            <CiLocationOn size={18} />
            <span>Store Location: Lincoln- 344, Illinois, Chicago, USA</span>
          </p>
        </div>

        {/* login register buttons */}
        <div className="flex items-center gap-2">
          <CgLogIn size={20} />
          <div className="flex items-center gap-1">
            <Link href={"/"}>
              <button className="cursor-pointer hover:text-soft-primary transition-colors duration-300">
                Login
              </button>
            </Link>
            <span>/</span>
            <Link href={"/"}>
              <button className="cursor-pointer hover:text-soft-primary transition-colors duration-300">
                Register
              </button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
