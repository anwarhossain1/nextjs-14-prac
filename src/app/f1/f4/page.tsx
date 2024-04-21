import Link from "next/link";

const page = () => {
  return (
    <div className="flex flex-col gap-3">
      <h2>this is f4</h2>
      <Link href="/f1/f3">go f3</Link>
      <Link href="/about">about</Link>
    </div>
  );
};

export default page;
