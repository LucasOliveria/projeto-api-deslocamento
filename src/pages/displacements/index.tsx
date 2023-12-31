import CustomButtonOpen from "@/components/CustomButtonOpen";
import Footer from "@/components/Footer";
import Header from '@/components/Header';
import ModalAddEditDisplacement from "@/components/ModalAddEditDisplacement";
import ModalDeleteDisplacement from "@/components/ModalDeleteDisplacement";
import ModalDetails from "@/components/ModalDetails";
import InfoTable from "@/components/Table";
import api from "@/services/api";
import styles from '@/styles/Home.module.css';
import { useEffect, useState } from "react";
import { toast } from "react-toastify";
import animations from "../../styles/Animations.module.css";

export default function Displacements() {
  const [displacements, setDisplacements] = useState([]);

  const [openAddEditDisplacement, setOpenAddEditDisplacement] = useState(false);

  const [titleModal, setTitleModal] = useState("");

  const [formEdit, setFormEdit] = useState({
    finalKm: 0,
    endTripDate: "",
    endTripHours: "",
    observation: ""
  });

  const [openModalDelete, setOpenModalDelete] = useState(false);

  const [saveId, setSaveId] = useState(0);

  const [openModalDetails, setOpenModalDetails] = useState(false);

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
      toast.error("500 - Erro do servido. Recarregue a página!");
    }
  }

  useEffect(() => {
    getDisplacements();
  }, []);

  return (
    <div className={styles.body}>
      <Header valueNav={3} />
      <main className={styles.main}>
        <div className={`${styles.containerTable} ${animations.fade_in_left}`}>
          <div className={styles.container_title}>
            <h1 className={styles.title_table}>Deslocamentos</h1>
          </div>
          <div className={styles.container_add_button}>
            <CustomButtonOpen
              setTitleModal={setTitleModal}
              setOpenAddEditDisplacement={setOpenAddEditDisplacement}
            />
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
                { id: 7, label: "OBS" },
                { id: 8, label: "Finalizar/Detalhes" },
                { id: 9, label: "" },
              ]
            }
            displacements={displacements}
            setOpenAddEditDisplacement={setOpenAddEditDisplacement}
            setTitleModal={setTitleModal}
            setFormEditDisplacement={setFormEdit}
            setOpenModalDelete={setOpenModalDelete}
            setSaveId={setSaveId}
            setDetails={setDetails}
            setOpenModalDetails={setOpenModalDetails}
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
        details={details}
      />
      <ModalDeleteDisplacement
        openModalDelete={openModalDelete}
        setOpenModalDelete={setOpenModalDelete}
        getDisplacements={getDisplacements}
        saveId={saveId}
      />
      <ModalDetails
        details={details}
        openModalDetails={openModalDetails}
        setOpenModalDetails={setOpenModalDetails}
      />
    </div>
  )
}
