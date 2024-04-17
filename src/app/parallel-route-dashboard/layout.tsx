import React from "react";

const layout = ({
  children,
  analytics,
  notification,
}: {
  children: React.ReactNode;
  analytics: React.ReactNode;
  notification: React.ReactNode;
}) => {
  return (
    <>
      <div> {children}</div>
      <div> {analytics}</div>
      <div> {notification}</div>
    </>
  );
};

export default layout;
