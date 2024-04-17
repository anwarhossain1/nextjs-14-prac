"use client";
const ErrorBoundary = ({ error }: { error: { message: string } }) => {
  return <div>{error.message}</div>;
};

export default ErrorBoundary;
