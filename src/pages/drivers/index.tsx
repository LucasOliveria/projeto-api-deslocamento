import CustomButtonOpen from "@/components/CustomButtonOpen";
import Footer from "@/components/Footer";
import Header from '@/components/Header';
import ModalAddEditDriver from "@/components/ModalAddEditDriver";
import ModalDeleteDriver from "@/components/ModalDeleteDriver";
import InfoTable from "@/components/Table";
import api from "@/services/api";
import styles from '@/styles/Home.module.css';
import { useEffect, useState } from "react";
import { toast } from "react-toastify";
import animations from "../../styles/Animations.module.css";

export default function Drivers() {
  const [drivers, setDrivers] = useState([]);

  const [openAddEditDriver, setOpenAddEditDriver] = useState(false);

  const [titleModal, setTitleModal] = useState("");

  const [formEdit, setFormEdit] = useState({
    category: "",
    expiresIn: "",
  });

  const [openModalDelete, setOpenModalDelete] = useState(false);

  const [saveId, setSaveId] = useState(0);

  async function getDrivers() {
    try {
      const response = await api.get("/Condutor");

      setDrivers(response.data);
    } catch (error: any) {
      toast.error("500 - Erro do servido. Recarregue a página!");
    }
  }

  useEffect(() => {
    getDrivers();
  }, []);

  return (
    <div className={styles.body}>
      <Header valueNav={2} />
      <main className={styles.main}>
        <div className={`${styles.containerTable} ${animations.fade_in_left}`}>
          <div className={styles.container_title}>
            <h1 className={styles.title_table}>Condutores</h1>
          </div>
          <div className={styles.container_add_button}>
            <CustomButtonOpen
              setTitleModal={setTitleModal}
              setOpenAddEditDriver={setOpenAddEditDriver}
            />
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
            setOpenAddEditDriver={setOpenAddEditDriver}
            setTitleModal={setTitleModal}
            setFormEditDriver={setFormEdit}
            setOpenModalDelete={setOpenModalDelete}
            setSaveId={setSaveId}
          />
        </div>
      </main>
      <Footer />
      <ModalAddEditDriver
        openAddEditDriver={openAddEditDriver}
        setOpenAddEditDriver={setOpenAddEditDriver}
        titleModal={titleModal}
        getDrivers={getDrivers}
        formEdit={formEdit}
        setFormEdit={setFormEdit}
        saveId={saveId}
      />
      <ModalDeleteDriver
        openModalDelete={openModalDelete}
        setOpenModalDelete={setOpenModalDelete}
        getDrivers={getDrivers}
        saveId={saveId}
      />
    </div>
  )
}
