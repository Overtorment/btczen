import Head from 'next/head';

const name = 'btczen';
export const siteTitle = 'btczen';

export default function Layout({
  children,
}: {
  children: React.ReactNode
  home?: boolean,
}) {
  return (
    <div>
      <Head>
        <link rel="icon" type="image/png" href="/favicon.png" />
        <meta
          name="description"
          content={name}
        />
        <meta
          property="og:image"
          content={`https://og-image.vercel.app/${encodeURI(
            siteTitle,
          )}.png?theme=light&md=0&fontSize=75px&images=https%3A%2F%2Fassets.zeit.co%2Fimage%2Fupload%2Ffront%2Fassets%2Fdesign%2Fnextjs-black-logo.svg`}
        />
        <meta name="og:title" content={siteTitle} />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>

      <main>{children}</main>

        {/*<footer className="footer mt-auto py-3 bg-light">
            <div className="container">
                <span className="text-muted">footer</span> <br/>
            </div>
        </footer>*/}
    </div>
  );
}
