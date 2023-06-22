import { useState } from "react";
import Header from '@/components/Header'
import styles from '@/styles/Home.module.css'
import Footer from "@/components/Footer";

export default function Condutores() {
  const [valueNav, setValueNav] = useState(2);

  return (
    <div className={styles.body}>
      <Header valueNav={valueNav} />
      <main className={styles.main}>
        <h2>Condutores</h2>
      </main>
      <Footer />
    </div>
  )
}
