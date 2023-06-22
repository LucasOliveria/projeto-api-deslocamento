import { useState } from "react";
import Header from '@/components/Header'
import styles from '@/styles/Home.module.css'
import Footer from "@/components/Footer";

export default function Home() {
  const [valueNav, setValueNav] = useState(0);

  return (
    <div className={styles.body}>
      <Header valueNav={valueNav} />
      <main className={styles.main}>
        <div className={styles.welcome}>
          <h1>Bem-Vindo, Sr. Usuário!</h1>
        </div>
      </main>
      <Footer />
    </div>
  )
}
