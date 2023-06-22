import CustoncButton from "@/components/CustomButton";
import Footer from "@/components/Footer";
import Header from '@/components/Header';
import InfoTable from "@/components/Table";
import api from "@/services/api";
import styles from '@/styles/Home.module.css';
import { useEffect, useState } from "react";

export default function Condutores() {
  const [drivers, setDrivers] = useState([]);

  async function getDrivers() {
    try {
      const response = await api.get("/Condutor");

      setDrivers(response.data);

    } catch (error) {
      console.log(error);

    }
  }

  useEffect(() => {
    getDrivers();
  }, []);

  return (
    <div className={styles.body}>
      <Header valueNav={2} />
      <main className={styles.main}>
        <div className={styles.containerTable}>
          <div className={styles.container_title}>
            <h1 className={styles.title_table}>Condutores</h1>
          </div>
          <div className={styles.container_add_button}>
            <CustoncButton />
          </div>
          <InfoTable
            header={
              [
                { id: 1, label: "nome" },
                { id: 2, label: "Nº Habilitação" },
                { id: 3, label: "Categoria" },
                { id: 4, label: "Vencimento" },
                { id: 5, label: "" },
                { id: 6, label: "" },
              ]
            }
            drivers={drivers}
          />
        </div>
      </main>
      <Footer />
    </div>
  )
}
