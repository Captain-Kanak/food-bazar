import React from "react";
import Logo from "../components/Logo";
import NavbarSearch from "../components/NavbarSearch";

export default function UserNavbar() {
  return (
    <div className="bg-white py-7">
      <div className="max-w-7xl mx-auto px-4 lg:px-0">
        <Logo />
        <NavbarSearch />
      </div>
    </div>
  );
}
