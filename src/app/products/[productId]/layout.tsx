import React from "react";

const layout = ({ children }: { children: React.ReactNode }) => {
  const pro = 0;
  if (pro === 0) {
    throw new Error("this is error page");
  }
  return (
    <div>
      <h1>Products header</h1>
      {children}
    </div>
  );
};

export default layout;
