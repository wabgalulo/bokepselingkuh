import CardList from "@/components/card-list";
import { DEFAULT_PER_PAGE } from "@/lib/constants";
import SearchCardList from "@/components/search/search-list";
import { SITENAME } from "@/lib/constants";
import { useRouter } from "next/router";
import Head from "next/head";

function MyApp({ Component, pageProps }) {
  const router = useRouter();
  const canonicalUrl = (`https://bokeptobrut.pages.dev` + (router.asPath === "/" ? "": router.asPath)).split("?")[0];


  return (
    <>
      <Head>
        <link rel="canonical" href={canonicalUrl} />
      </Head>
      
      // Other stuff
    </>
  );
}

export default MyApp;
export default async function Home({
    searchParams,
}: {
    searchParams: { [key: string]: string | string[] | undefined };
}) {
    const page =
        (searchParams.page && parseInt(searchParams.page as string)) || 1;
    const per_page =
        (searchParams.per_page && parseInt(searchParams.per_page as string)) ||
        DEFAULT_PER_PAGE;
    const fld_id =
        (searchParams.fld_id && (searchParams.fld_id as string)) || undefined;
    const query = (searchParams.q && (searchParams.q as string)) || undefined;

    return (
        <div className="md:my-2"><h1>{SITENAME}</h1><h2>Video Bokep Indo Jepang Barat Terbaru</h2>
            {query ? (
                <SearchCardList query={query} banner />
            ) : (
                <CardList page={page} per_page={per_page} fld_id={fld_id} />
            )}
        </div>
    );
}
