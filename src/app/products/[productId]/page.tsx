import { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";

export const generateMetadata = ({ params }): Metadata => {
  return {
    title: `Product ${params.productId}`,
  };
};
const page = ({ params }: { params: { productId: string } }) => {
  if (parseInt(params.productId) > 1000) {
    notFound();
  }
  return (
    <div>
      <Link href={`/products/${params.productId}/reviews/${params.productId}`}>
        {params.productId}
      </Link>
    </div>
  );
};

export default page;
