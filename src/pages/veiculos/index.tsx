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
          <div className={styles.container_title}>
            <h1 className={styles.title_table}>Veículos</h1>
          </div>
          <div className={styles.container_add_button}>
            <CustoncButton />
          </div>
          <InfoTable
            header={
              [
                { id: 1, label: "Marca/Modelo" },
                { id: 2, label: "placa" },
                { id: 3, label: "Km Atual" },
                { id: 4, label: "Ano de Fabricação" }
              ]
            }
          />
        </div>
      </main>
      <Footer />
    </div>
  )
}
