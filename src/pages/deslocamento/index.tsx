import CustomButtonOpen from "@/components/CustomButtonOpen";
import Footer from "@/components/Footer";
import Header from '@/components/Header';
import ModalAddEditDisplacement from "@/components/ModalAddEditDisplacement";
import ModalDetails from "@/components/ModalDetails";
import InfoTable from "@/components/Table";
import api from "@/services/api";
import styles from '@/styles/Home.module.css';
import { useEffect, useState } from "react";

export default function Displacements() {
  const [displacements, setDisplacements] = useState([]);

  const [openAddEditDisplacement, setOpenAddEditDisplacement] = useState(false);

  const [titleModal, setTitleModal] = useState("");

  const [formEdit, setFormEdit] = useState({
    finalKm: "",
    endTripDate: "",
    endTripHours: "",
    observation: ""
  });

  const [openModalDelete, setOpenModalDelete] = useState(false);

  const [saveId, setSaveId] = useState(0);



  const [open, setOpen] = useState(false);
  const [details, setDetails] = useState({
    clientName: "",
    driverName: "",
    plate: ""
  });



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
            <CustomButtonOpen
              setTitleModal={setTitleModal}
              setOpenAddEditDisplacement={setOpenAddEditDisplacement}
            />
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
                { id: 7, label: "OBS" },
                { id: 8, label: "Finalizar/Detalhes" },
                { id: 9, label: "" },
              ]
            }
            displacements={displacements}
            setDetails={setDetails}
            setTitleModal={setTitleModal}
            setOpenModalDelete={setOpenModalDelete}
            setSaveId={setSaveId}
          />
        </div>
      </main>

      <Footer />

      <ModalAddEditDisplacement
        openAddEditDisplacement={openAddEditDisplacement}
        setOpenAddEditDisplacement={setOpenAddEditDisplacement}
        titleModal={titleModal}
        getDisplacements={getDisplacements}
        formEdit={formEdit}
        setFormEdit={setFormEdit}
        saveId={saveId}
      />

      <ModalDetails
        details={details}
        open={open}
        setOpen={setOpen}
      />
    </div>
  )
}
