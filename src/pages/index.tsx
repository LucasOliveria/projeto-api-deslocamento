import Footer from "@/components/Footer";
import Header from '@/components/Header';
import styles from '@/styles/Home.module.css';

export default function Home() {
  return (
    <div className={styles.body}>
      <Header valueNav={0} />
      <main className={styles.main}>
        <div className={styles.welcome}>
          <h1>Bem-Vindo, Sr. Usuário!</h1>
        </div>
      </main>
      <Footer />
    </div>
  )
}
