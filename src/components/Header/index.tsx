import styles from "@/components/Header/styles.module.css"
import NavBar from "../NavBar"

export default function Header() {
  return (
    <header className={styles.header}>
      <h1>App</h1>
      <nav className={styles.navbar}>
        <NavBar />
      </nav>
    </header>
  )
}