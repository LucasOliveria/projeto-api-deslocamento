import { useState } from "react";
import Header from '@/components/Header'
import styles from '@/styles/Home.module.css'

export default function Home() {
  const [valueNav, setValueNav] = useState(0);

  return (
    <div className={styles.body}>
      <Header valueNav={valueNav} />
      <main className={styles.main}>
        <div className={styles.welcome}>
          <h1>Bem-Vindo, Sr. Usuário!</h1>
          <div className={styles.info}>
            <p>
              Gerencie suas informações de clientes, condutores, frota e rotas e facilite sua vida com o Deslocamento App
            </p>
          </div>
        </div>
      </main>
    </div>
  )
}
