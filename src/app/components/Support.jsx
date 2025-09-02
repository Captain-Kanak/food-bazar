import React from "react";
import { FaShippingFast, FaHeadset, FaLock, FaUndo } from "react-icons/fa";

export default function Support() {
  const services = [
    {
      icon: <FaShippingFast className="text-green-600 text-3xl" />,
      name: "Free Shipping",
      description: "Free shipping on all your order",
    },
    {
      icon: <FaHeadset className="text-green-600 text-3xl" />,
      name: "Customer Support 24/7",
      description: "Instant access to Support",
    },
    {
      icon: <FaLock className="text-green-600 text-3xl" />,
      name: "100% Secure Payment",
      description: "We ensure your money is safe",
    },
    {
      icon: <FaUndo className="text-green-600 text-3xl" />,
      name: "Money-Back Guarantee",
      description: "30 Days Money-Back Guarantee",
    },
  ];

  return (
    <div className="my-4 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
      {services.map((service, index) => (
        <div
          key={index}
          className="flex flex-col items-center text-center p-6 bg-white shadow rounded-xl hover:shadow-lg transition"
        >
          {service.icon}
          <h3 className="mt-3 text-lg font-semibold">{service.name}</h3>
          <p className="text-gray-600 text-sm">{service.description}</p>
        </div>
      ))}
    </div>
  )
}
