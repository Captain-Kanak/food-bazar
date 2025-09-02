import React from "react";
import Logo from "../components/Logo";
import NavbarSearch from "../components/NavbarSearch";

export default function UserNavbar() {
  return (
    <div className="bg-white py-5">
      <div className="max-w-7xl mx-auto px-4 lg:px-0">
        <div className="flex items-center justify-between">
          <div>
            <Logo />
          </div>
          <div className="hidden lg:block">
            <NavbarSearch />
          </div>
          {/* user info here */}
          <div>
            <h1>balance</h1>
          </div>
        </div>
        <div className="lg:hidden flex justify-center w-full">
          <NavbarSearch />
        </div>
      </div>
    </div>
  );
}
