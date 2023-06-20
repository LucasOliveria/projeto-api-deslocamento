import Header from '@/components/Header'
import styles from '@/styles/Home.module.css'

export default function Home() {
  return (
    <div className={styles.body}>
      <Header />
      <main className={styles.main}>
        <h2>Bem-Vindo</h2>
      </main>
    </div>
  )
}
