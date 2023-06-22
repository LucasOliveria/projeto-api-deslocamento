import CustoncButton from "@/components/CustomButton";
import Footer from "@/components/Footer";
import Header from '@/components/Header';
import InfoTable from "@/components/Table";
import styles from '@/styles/Home.module.css';


export default function Veiculos() {
  return (
    <div className={styles.body}>
      <Header valueNav={4} />
      <main className={styles.main}>
        <div className={styles.containerTable}>
          <h1>Veículos</h1>
          <div className={styles.container_add_button}>
            <CustoncButton />
          </div>
          <InfoTable />
        </div>
      </main>
      <Footer />
    </div>
  )
}
