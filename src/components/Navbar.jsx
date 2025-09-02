import Link from "next/link";
import React from "react";
import { CgLogIn } from "react-icons/cg";

export default function Navbar() {
  const links = (
    <>
      <li className="hover:text-primary transition-colors duration-300">
        <Link href={"/"}>HOME</Link>
      </li>
      <li className="hover:text-primary transition-colors duration-300">
        <Link href={"/"}>SHOP</Link>
      </li>
      <li className="hover:text-primary transition-colors duration-300">
        <Link href={"/"}>PAGES</Link>
      </li>
      <li className="hover:text-primary transition-colors duration-300">
        <Link href={"/"}>BLOGS</Link>
      </li>
      <li className="hover:text-primary transition-colors duration-300">
        <Link href={"/"}>ABOUT US</Link>
      </li>
      <li className="hover:text-primary transition-colors duration-300">
        <Link href={"/"}>CONTACT US</Link>
      </li>
    </>
  );

  return (
    <nav className="bg-black text-white py-5">
      <div className="max-w-7xl mx-auto px-4 lg:px-0 flex items-center justify-between">
        <ul className="flex items-center gap-5">{links}</ul>

        {/* right nav - user info */}
        {/* login register buttons */}
        <div className="flex items-center gap-2">
          <CgLogIn size={20} />
          <div className="flex items-center gap-1">
            <Link href={"/"}>
              <button className="cursor-pointer hover:text-primary transition-colors duration-300">
                Login
              </button>
            </Link>
            <span>/</span>
            <Link href={"/"}>
              <button className="cursor-pointer hover:text-primary transition-colors duration-300">
                Register
              </button>
            </Link>
          </div>
        </div>
      </div>
    </nav>
  );
}
