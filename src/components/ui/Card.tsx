import React from "react";

const Card = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className="bg-white shadow-[0_2px_18px_-6px_rgba(0,0,0,0.2)] w-full max-w-sm rounded-lg font-[sans-serif] overflow-hidden mx-auto mt-4">
      <div className="px-4 my-6">{children}</div>
    </div>
  );
};

export default Card;
