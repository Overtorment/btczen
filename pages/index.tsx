import Head from 'next/head';
import Layout, { siteTitle } from '../components/layout';
import useSWR from 'swr';

const priceFetcher = async () => {
  const uri = 'https://api.kraken.com/0/public/Ticker?pair=XBTUSD';
  const res = await fetch(uri);
  const json = await res.json();
  const price = Math.round(json?.result?.XXBTZUSD?.c?.[0] || 0).toLocaleString(
      undefined, // leave undefined to use the visitor's browser
      // locale or a string like 'en-US' to override it.
      { minimumFractionDigits: 0 },
  );
  const ret = `\$${price}`;
  setTimeout(() => document.title = ret, 1000);
  return ret;
};

export default function Index() {
  const { data }: { data?: any, error?: any } = useSWR('unused', priceFetcher, { refreshInterval: 60 * 1000, refreshWhenHidden: true, refreshWhenOffline: true });

  return (
      <Layout index>
          <Head>
              <title>{siteTitle}</title>
          </Head>

          <div className="d-flex flex-column min-vh-100 justify-content-center align-items-center bg-dark">
              <p className="text-black">price data from kraken.com</p>
              {data ? (
                  <div style={{ fontSize: 99 }}>
              <span className="text-light" >{data}</span>
                  </div>
              ) : null}
              <br/>
              <p className="text-black">webpage source: github.com/overtorment/btczen</p>
          </div>
      </Layout>
  );
}
