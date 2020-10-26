import Head from "next/head";
import styles from "../styles/Home.module.css";

export async function getStaticProps() {}

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Create Next App</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className={styles.main}>
        <div className={styles.grid}>
          <a href="/about" className={styles.card}>
            <h3>Hacking with the Spotify API &rarr;</h3>
            <p>
              Various static and server side rendering using the Spotify API +
              NextJS + ???
            </p>
            <h4>View all Depeche Mode album art.</h4>
          </a>
        </div>
      </main>
    </div>
  );
}
