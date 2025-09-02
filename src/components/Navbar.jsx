import Link from "next/link";
import React from "react";
import { FaPhoneAlt } from "react-icons/fa";

export default function Navbar() {
  const links = (
    <>
      <li className="hover:text-soft-primary transition-colors duration-300">
        <Link href={"/"}>HOME</Link>
      </li>
      <li className="hover:text-soft-primary transition-colors duration-300">
        <Link href={"/"}>SHOP</Link>
      </li>
      <li className="hover:text-soft-primary transition-colors duration-300">
        <Link href={"/"}>PAGES</Link>
      </li>
      <li className="hover:text-soft-primary transition-colors duration-300">
        <Link href={"/"}>BLOGS</Link>
      </li>
      <li className="hover:text-soft-primary transition-colors duration-300">
        <Link href={"/"}>ABOUT US</Link>
      </li>
      <li className="hover:text-soft-primary transition-colors duration-300">
        <Link href={"/"}>CONTACT US</Link>
      </li>
    </>
  );

  return (
    <nav className="bg-black text-white py-5 fixed w-full top-0 left-0 z-50">
      <div className="max-w-7xl mx-auto px-4 lg:px-0 flex items-center justify-between">
        <ul className="flex items-center gap-5">{links}</ul>

        {/* contact */}
        <div>
          <a href="" className="flex items-center gap-2">
            <FaPhoneAlt />
            <span className="hover:text-soft-primary transition-colors duration-300">
              (219) 555-0114
            </span>
          </a>
        </div>
      </div>
    </nav>
  );
}
