import Head from "next/head";
import { DefaultSeo } from "next-seo";
import styles from "../styles/Home.module.css";

import BoxRow from "../components/BoxRow";

export default function Home() {
  const typeformUrl = "https://1aps2l5da57.typeform.com/to/tpgvDnhX";
  const fincUrl = "https://twitter.com/fdotinc";

  return (
    <div className={styles.container}>
      <DefaultSeo
        title="AI SF | May 15-19"
        description="May 15 - 19. An AI week for builders."
        openGraph={{
          url: "https://aisf.co",
          title: "AI SF | May 15-19",
          description: "May 15 - 19. An AI week for builders.",
          images: [
            {
              url: "https://aisf.co/preview-image.png",
              width: 1200,
              height: 630,
              alt: "Preview Image",
            },
          ],
          site_name: "AI SF",
        }}
      />

      <Head>
        <title>AI SF | May 15-19</title>
        <link rel="icon" href="/favicon.ico" />

        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
        <link
          href="https://fonts.googleapis.com/css2?family=Plus+Jakarta+Sans:wght@400;700&display=swap"
          rel="stylesheet"
        />
        {/* <meta property="og:image" content="https://aisf.co/preview-image.png" /> */}
      </Head>
      <div className={styles.main}>
        <div
          className={styles.logoContainer}
          onClick={() => window.open(fincUrl, "_blank")}
        >
          <img
            src="/finc.svg"
            className={styles.logo}
            alt="Founders, Inc. Logo"
          />
        </div>
        <div className={styles.banner}>
          <div className={styles.date}>ay 15 - 19</div>
          <div className={styles.date}>May 15 - 19</div>
          <div className={styles.date}>May 15 - 19</div>
          <div className={styles.date}>May 15 - 19</div>
          <div className={styles.date}>May 15 - 19</div>
          <div className={styles.date}>May 15 - 19</div>
          <div className={styles.date}>May 15 - 19</div>
          <div className={styles.date}>May 15 </div>
        </div>
        <main>
          <div className={styles.body}>
            <img
              src="/gradsvg.svg"
              className={styles.gradientlogo}
              alt="AISF by Founders, Inc."
            />
            <p className={styles.header}>
              <span>an AI week</span>
              <br />
              <span>for Builders</span>
            </p>

            <p className={styles.description}>
              May 15 - 19. This isn’t your usual conference.{" "}
            </p>
            <div
              className={styles.button}
              onClick={() => window.open(typeformUrl, "_blank")}
            >
              <p> SAVE YOUR SPOT </p>
            </div>
          </div>
          <BoxRow />
        </main>

        <style jsx global>{`
          html,
          body {
            padding: 0;
            margin: 0;
            font-family: -apple-system, BlinkMacSystemFont, Segoe UI, Roboto,
              Oxygen, Ubuntu, Cantarell, Fira Sans, Droid Sans, Helvetica Neue,
              sans-serif;
          }
          * {
            box-sizing: border-box;
          }
        `}</style>
      </div>
    </div>
  );
}
