import Head from 'next/head';
import Layout, { siteTitle } from '../components/layout';
import useSWR from 'swr';

const fetcher = async (uri: string) => {
  const res = await fetch(uri);
  return await res.json();
};

export default function Home() {

  const { data }: { data?: any, error?: any } = useSWR('https://api.coindesk.com/v1/bpi/currentprice.json', fetcher, { refreshInterval: 60 * 1000 });

  return (
    <Layout home>
      <Head>
        <title>{siteTitle}</title>
      </Head>


        <body>

        <div className="d-flex flex-column min-vh-100 justify-content-center align-items-center">


            <div style={{ fontSize: 99 }}>{data?.bpi?.USD?.rate_float && (
                <span>${Math.round(data?.bpi?.USD?.rate_float).toLocaleString(
                    undefined, // leave undefined to use the visitor's browser
                    // locale or a string like 'en-US' to override it.
                    { minimumFractionDigits: 0 }
                )}</span>
            ) || <span>???</span>}</div>

        </div>

        </body>



    </Layout>
  );
}
