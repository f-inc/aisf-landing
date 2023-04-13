import Head from "next/head";
import { DefaultSeo } from "next-seo";
import styles from "../styles/Home.module.css";

import BoxRow from "../components/BoxRow";

export default function Home() {
  const typeformUrl = "https://1aps2l5da57.typeform.com/to/tpgvDnhX";

  return (
    <div className={styles.container}>
      <DefaultSeo
        title="AI SF | May 15-19"
        description="This isn’t your usual conference. May 15-19. More details announced soon."
        openGraph={{
          url: "https://aisf.co",
          title: "AI SF | May 15-19",
          description:
            "This isn’t your usual conference. May 15-19. More details announced soon.",
          // images: [
          //   {
          //     url: "https://aisf.co/preview-image.png",
          //     width: 1200,
          //     height: 630,
          //     alt: "Preview Image",
          //   },
          // ],
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

      <div className={styles.logoContainer}>
        <img src="/logosvg.svg" className={styles.logo} alt="AI SF Logo" />
      </div>

      <main>
        <div className={styles.body}>
          <p className={styles.header}>
            <span>an AI week</span>
            <br />
            <span>for Builders</span>
          </p>

          <p className={styles.description}>
            May 15 - 19. Experience the next frontier of AI in SF, where the brightest
            builders come together to push the boundaries of possibility.{" "}
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
  );
}
