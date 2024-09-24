import React from "react";
import { assets } from "../assets/assets";

const OurPolicy = () => {
  const policyData = [
    {
      image: assets.exchange_icon,
      name: "Easy Exchange Policy",
      para: "We Offers hassle free excution policy",
    },
    {
      image: assets.exchange_icon,
      name: "7 Days Return Policy",
      para: "We Provider 7 Days Return Policy",
    },
    {
      image: assets.exchange_icon,
      name: "Best Customer Support",
      para: "We  Provide 24/7 Customer Support",
    },
  ];
  return (
    <div className="flex flex-col sm:flex-row justify-around gap-12 sm:gap-12 text-center py-20 text-xs sm:text-sm md:text-base text-gray-700">
      {policyData.map((item, index) => (
        <div key={index}>
          <img
            src={item.image}
            className="w-12 m-auto mb-5"
            alt="Exchange Icon"
          />
          <p className="font-semibold">{item.name}</p>
          <p className="text-gray-400">{item.para}</p>
        </div>
      ))}
    </div>
  );
};

export default OurPolicy;
