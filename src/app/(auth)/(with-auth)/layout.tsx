export default function AuthLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <div>
      <h1>This is auth layout</h1>
      {children}
    </div>
  );
}
