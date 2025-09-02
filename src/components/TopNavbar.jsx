import React from "react";
import { CiLocationOn } from "react-icons/ci";
import { FaPhoneAlt } from "react-icons/fa";

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
    </div>
  );
}
