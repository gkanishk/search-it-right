import '../styles/globals.css'
import styles from '../styles/Home.module.css'

function MyApp({ Component, pageProps }) {
  return (
    <>
    <nav className={styles.nav}>
      <img src="/ipl.png" className={styles.navlogo}></img>
      <a href="/">
        Home
      </a>
      <a href="/main/teamsPage">
        Teams
      </a>
      <a href="/main/playersPage">
        Players
      </a>
      <a href="/main/searchPage">
        Search
      </a>
    </nav>

    <Component {...pageProps} />

    <footer className={styles.footer}>
    Follow me on: {" "}
    <a
      href="https://github.com/gkanishk"
      target="_blank"
      rel="noopener noreferrer"
    >
      <img src="/social/github.svg" alt="Githu Logo" className={styles.logo} />
    </a>
    <a
      href="https://twitter.com/gkanishk_"
      target="_blank"
      rel="noopener noreferrer"
    >
      <img src="/social/twitter.svg" alt="Twitter Logo" className={styles.logo} />
    </a>
    <a
      href="https://linkedin.com/in/gkanishk"
      target="_blank"
      rel="noopener noreferrer"
    >
      <img src="/social/linkedin.svg" alt="LinkedIn Logo" className={styles.logo} />
    </a>
  </footer>
    </>
  );
}

export default MyApp
