const page = ({ params }: { params: { slug: string[] } }) => {
  if (params.slug?.length === 2) {
    return <h1>This is all items {params.slug[1]}</h1>;
  }
  if (params.slug?.length === 1) {
    return <h1>This is all items {params.slug[0]}</h1>;
  }
  return <h1>This is all items </h1>;
};

export default page;
