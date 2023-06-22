import { useState } from "react";
import Header from '@/components/Header'
import styles from '@/styles/Home.module.css'
import Footer from "@/components/Footer";


export default function Veiculos() {
  const [valueNav, setValueNav] = useState(4);

  return (
    <div className={styles.body}>
      <Header valueNav={valueNav} />
      <main className={styles.main}>
        <h2>Veículos</h2>
      </main>
      <Footer />
    </div>
  )
}
