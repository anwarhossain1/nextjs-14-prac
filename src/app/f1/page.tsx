import Link from "next/link";

const page = () => {
  return (
    <div>
      <h1>This is f1</h1>
      <Link href="/f1/f2">f2</Link>
    </div>
  );
};

export default page;
