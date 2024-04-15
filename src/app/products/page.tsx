import Link from "next/link";

const page = () => {
  return (
    <div>
      <h1>Products list</h1>
      <ul>
        {[...Array(3)].map((item, index) => {
          return (
            <Link key={index} href={`/products/${index + 1}`}>
              <li>`Products ${index + 1}`</li>
            </Link>
          );
        })}
      </ul>
    </div>
  );
};

export default page;
