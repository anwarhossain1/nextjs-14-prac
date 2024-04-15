import Link from "next/link";
import { notFound } from "next/navigation";

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
