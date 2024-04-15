import Link from "next/link";

const page = ({ params }: { params: { productId: string } }) => {
  return (
    <div>
      <Link href={`/products/${params.productId}/reviews/${params.productId}`}>
        {params.productId}
      </Link>
    </div>
  );
};

export default page;
