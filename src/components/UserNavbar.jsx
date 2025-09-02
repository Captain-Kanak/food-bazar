import React from "react";
import Logo from "../components/Logo";
import NavbarSearch from "../components/NavbarSearch";
import { CgLogIn } from "react-icons/cg";
import Link from "next/link";

export default function UserNavbar() {
  return (
    <div className="bg-white py-3 mt-16">
      <div className="max-w-7xl mx-auto px-4 lg:px-0">
        <div className="flex items-center justify-between">
          <div>
            <Logo />
          </div>
          <div className="hidden lg:block">
            <NavbarSearch />
          </div>
          {/* user info here */}
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
        <div className="lg:hidden flex justify-center w-full">
          <NavbarSearch />
        </div>
      </div>
    </div>
  );
}
