import CustoncButton from "@/components/CustomButton";
import Footer from "@/components/Footer";
import Header from '@/components/Header';
import InfoTable from "@/components/Table";
import api from "@/services/api";
import styles from '@/styles/Home.module.css';
import { useEffect, useState } from "react";


export default function Clients() {
  const [clients, setClients] = useState([]);

  async function getClients() {
    try {
      const response = await api.get("/Cliente");

      setClients(response.data);
    } catch (error) {
      console.log(error);

    }
  }

  useEffect(() => {
    getClients();
  }, []);

  return (
    <div className={styles.body}>
      <Header valueNav={1} />
      <main className={styles.main}>
        <div className={styles.containerTable}>
          <div className={styles.container_title}>
            <h1 className={styles.title_table}>Clientes</h1>
          </div>
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
                { id: 5, label: "Cidade/UF" },
                { id: 6, label: "" },
                { id: 7, label: "" }
              ]
            }
            clients={clients}
          />
        </div>
      </main>
      <Footer />
    </div>
  )
}
