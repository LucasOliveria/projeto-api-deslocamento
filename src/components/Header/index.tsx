import styles from "../../styles/Header.module.css"
import NavBar from "../NavBar"


export default function Header({ valueNav }: { valueNav: number }) {
  return (
    <header className={styles.header}>
      <h1><span>Deslocamento</span> App</h1>
      <nav>
        <NavBar valueNav={valueNav} />
      </nav>
    </header>
  )
}