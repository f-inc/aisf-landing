import Head from "next/head";
import styles from "../styles/Home.module.css";

export default function Home() {
  const typeformUrl = "https://1aps2l5da57.typeform.com/to/tpgvDnhX";

  return (
    <div className={styles.container}>
      <Head>
        <title>AI SF | May 15-19</title>
        <link rel="icon" href="/favicon.ico" />

        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
        <link
          href="https://fonts.googleapis.com/css2?family=Plus+Jakarta+Sans:wght@400;700&display=swap"
          rel="stylesheet"
        />
      </Head>

      <div className={styles.logoContainer}>
        <img src="/logosvg.svg" className={styles.logo} alt="AI SF Logo" />
      </div>

      <main>
        <div className={styles.body}>
          <p className={styles.header}><p className={styles.header}><span>an AI week</span><br /><span>for Builders</span></p>
</p>
          <p className={styles.description}>
            {" "}
            Join the world's most influential AI summit in SF, where leaders
            from diverse industries come together to shape the future of AI.
          </p>
          <div
            className={styles.button}
            onClick={() => window.open(typeformUrl, "_blank")}
          >
            <p> SAVE YOUR SPOT </p>
          </div>
        </div>
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
