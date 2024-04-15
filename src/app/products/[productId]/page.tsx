const page = ({ params }: { params: { productId: string } }) => {
  return <div>{params.productId}</div>;
};

export default page;
