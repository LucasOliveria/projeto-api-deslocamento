import styles from "@/components/Header/styles.module.css"
import NavBar from "../NavBar"
import Props from "../../types/Props";
import ExitToAppOutlinedIcon from '@mui/icons-material/ExitToAppOutlined';

export default function Header({ valueNav }: Props) {
  return (
    <header className={styles.header}>
      <h1>App</h1>
      <nav className={styles.navbar}>
        <NavBar valueNav={valueNav} />
      </nav>

      <ExitToAppOutlinedIcon />
    </header>
  )
}