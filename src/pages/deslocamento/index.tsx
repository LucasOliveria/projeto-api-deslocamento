import CustoncButton from "@/components/CustomButton";
import Footer from "@/components/Footer";
import Header from '@/components/Header';
import ModalDetails from "@/components/ModalDetails";
import InfoTable from "@/components/Table";
import api from "@/services/api";
import styles from '@/styles/Home.module.css';
import { useEffect, useState } from "react";

export default function Deslocamento() {
  const [displacements, setDisplacements] = useState([]);
  const [details, setDetails] = useState({
    clientName: "",
    driverName: "",
    plate: ""
  })

  const [open, setOpen] = useState(false);

  async function getDisplacements() {
    try {
      const response = await api.get("/Deslocamento");

      setDisplacements(response.data);

    } catch (error) {
      console.log(error);

    }
  }

  useEffect(() => {
    getDisplacements();
  }, []);

  return (
    <div className={styles.body}>

      <Header valueNav={3} />
      <main className={styles.main}>
        <div className={styles.containerTable}>
          <div className={styles.container_title}>
            <h1 className={styles.title_table}>Deslocamento</h1>
          </div>
          <div className={styles.container_add_button}>
            <CustoncButton />
          </div>
          <InfoTable
            setOpen={setOpen}
            header={
              [
                { id: 1, label: "Km Inicial" },
                { id: 2, label: "Km Final" },
                { id: 3, label: "Inicio da Corrida" },
                { id: 4, label: "Final da Corrida" },
                { id: 5, label: "Motivo" },
                { id: 6, label: "CheckList" },
                { id: 7, label: "Observacao" },
                { id: 8, label: "Detalhes" },
                { id: 9, label: "" },
                { id: 10, label: "" },
              ]
            }
            displacements={displacements}
            setDetails={setDetails}
          />
        </div>
      </main>
      <Footer />
      <ModalDetails
        details={details}
        open={open}
        setOpen={setOpen}
      />
    </div>
  )
}
