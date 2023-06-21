import { useState } from "react";
import Header from '@/components/Header'
import styles from '@/styles/Home.module.css'


export default function Clientes() {
  const [valueNav, setValueNav] = useState(1);

  return (
    <div className={styles.body}>
      <Header valueNav={valueNav} />
      <main className={styles.main}>
        <h2>Clientes</h2>
      </main>
    </div>
  )
}
