import CustoncButton from "@/components/CustomButton";
import Footer from "@/components/Footer";
import Header from '@/components/Header';
import InfoTable from "@/components/Table";
import styles from '@/styles/Home.module.css';


export default function Clientes() {
  return (
    <div className={styles.body}>
      <Header valueNav={1} />
      <main className={styles.main}>
        <div className={styles.containerTable}>
          <h1>Clientes</h1>
          <div className={styles.container_add_button}>
            <CustoncButton />
          </div>
          <InfoTable
            header={
              [
                { id: 1, label: "nome" },
                { id: 2, label: "Nº documento" },
                { id: 3, label: "Tipo de Documento" },
                { id: 4, label: "Endereço" },
                { id: 5, label: "Cidade/UF" }
              ]
            }
          />
        </div>
      </main>
      <Footer />
    </div>
  )
}
