import Link from "next/link";
import React from "react";

export default function Navbar() {
  const links = (
    <>
      <li>
        <Link href={"/"}>HOME</Link>
      </li>
      <li>
        <Link href={"/"}>SHOP</Link>
      </li>
      <li>
        <Link href={"/"}>PAGES</Link>
      </li>
      <li>
        <Link href={"/"}>BLOGS</Link>
      </li>
      <li>
        <Link href={"/"}>ABOUT US</Link>
      </li>
      <li>
        <Link href={"/"}>CONTACT US</Link>
      </li>
    </>
  );

  return (
    <nav className="bg-primary text-white py-5">
      <div className="max-w-7xl mx-auto px-4 lg:px-0">
        <ul className="flex items-center gap-5">{links}</ul>
        <div>
          <span>(219) 555-0114</span>
        </div>
      </div>
    </nav>
  );
}
