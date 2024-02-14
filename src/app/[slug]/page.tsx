
export default async function Home({params}: {params: {slug: string}}) {
  return (
    <>
    {params.slug} - {decodeURIComponent(params.slug)}
    </>
  );
}
