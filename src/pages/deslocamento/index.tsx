import CustoncButton from "@/components/CustomButton";
import Footer from "@/components/Footer";
import Header from '@/components/Header';
import InfoTable from "@/components/Table";
import styles from '@/styles/Home.module.css';


export default function Deslocamento() {
  return (
    <div className={styles.body}>
      <Header valueNav={3} />
      <main className={styles.main}>
        <div className={styles.containerTable}>
          <h1>Deslocamento</h1>
          <div className={styles.container_add_button}>
            <CustoncButton />
          </div>
          <InfoTable
            header={
              [
                { id: 1, label: "Km Inicial" },
                { id: 2, label: "Km Final" },
                { id: 3, label: "Inicio da Corrida" },
                { id: 4, label: "Final da Corrida" },
                { id: 5, label: "Motivo" },
                { id: 6, label: "CheckList" },
                { id: 7, label: "Observacao" },
                { id: 8, label: "Nome do Condutos" },
                { id: 9, label: "Nome do cliente" },
                { id: 10, label: "Placa do Veículo" },
              ]
            }
          />
        </div>
      </main>
      <Footer />
    </div>
  )
}
