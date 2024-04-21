import React from "react";

const layout = ({
  children,
  notification,
  analytics,
}: {
  children: React.ReactNode;
  notification: React.ReactNode;
  analytics: React.ReactNode;
}) => {
  return (
    <div className="grid grid-cols-3 gap-2 p-5">
      <div className="col-span-12"> {children}</div>
      <div> {analytics}</div>
      <div> {notification}</div>
    </div>
  );
};

export default layout;
