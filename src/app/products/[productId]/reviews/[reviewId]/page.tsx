const page = ({
  params,
}: {
  params: { productId: string; reviewId: string };
}) => {
  return (
    <div>
      Product id {params.productId} and review id {params.reviewId}
    </div>
  );
};

export default page;
