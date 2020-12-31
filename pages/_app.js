import '../styles/globals.css'
import Link from 'next/link'
import styles from '../styles/Home.module.css'

function MyApp({ Component, pageProps }) {
  return (
    <>
    <nav className={styles.nav}>
      <img src="/ipl.jpg" className={styles.navlogo} alt="ipl logo"></img>
      <Link href="/">
        <a>
        Home
        </a>
      </Link>
      <Link href="/main/teamsPage">
      <a>
        Teams
      </a>
      </Link>
      <Link href="/main/playersPage">
        <a>
        Players
        </a>
      </Link>
      <Link href="/main/searchPage">
        <a>
        Search
        </a>
      </Link>
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
