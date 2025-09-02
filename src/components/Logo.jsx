import React from "react";
import logoImage from "../assets/logo.png";
import Image from "next/image";

export default function Logo() {
  return (
    <div className="flex items-center gap-1">
      <Image src={logoImage} width={50} height={50} alt="Logo" />
      <h1 className="text-3xl font-bold">
        Food<span className="text-primary">Bazar</span>
      </h1>
    </div>
  );
}
