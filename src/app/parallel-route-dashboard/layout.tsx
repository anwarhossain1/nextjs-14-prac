import React from "react";

const layout = ({
  children,
  notification,
  Sho,
  analytics,
}: {
  children: React.ReactNode;
  notification: React.ReactNode;
  Sho: React.ReactNode;
  analytics: React.ReactNode;
}) => {
  const isLoggedIn = true;
  return (
    <>
      {" "}
      {isLoggedIn ? (
        <div className="grid grid-cols-3 gap-2 p-5">
          <div className="col-span-12"> {children}</div>
          <div> {analytics}</div>
          <div> {notification}</div>
          <div>{Sho}</div>
        </div>
      ) : (
        <div className="bg-red">{Sho}</div>
      )}
      <div>{Sho}</div>
    </>
  );
};

export default layout;
