import CustomButtonOpen from "@/components/CustomButtonOpen";
import Footer from "@/components/Footer";
import Header from '@/components/Header';
import ModalAddEditClient from "@/components/ModalAddEditClient";
import ModalDeleteClient from "@/components/ModalDeleteClient";
import InfoTable from "@/components/Table";
import api from "@/services/api";
import styles from '@/styles/Home.module.css';
import { useEffect, useState } from "react";


export default function Clients() {
  const [clients, setClients] = useState([]);
  const [openAddEditClient, setOpenAddEditClient] = useState(false);
  const [titleModal, setTitleModal] = useState("");
  const [saveId, setSaveId] = useState(0);
  const [formEdit, setFormEdit] = useState({
    name: "",
    adress: "",
    houseNumber: "",
    neighborhood: "",
    city: "",
    state: ""
  });

  const [openModalDelete, setOpenModalDelete] = useState(false)

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
            <CustomButtonOpen
              setTitleModal={setTitleModal}
              setOpenAddEditModal={setOpenAddEditClient}
            />
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
            setOpenAddEditModal={setOpenAddEditClient}
            setTitleModal={setTitleModal}
            setFormEdit={setFormEdit}
            setOpenModalDelete={setOpenModalDelete}
            setSaveId={setSaveId}
          />
        </div>
      </main>

      <Footer />

      <ModalAddEditClient
        openAddEditClient={openAddEditClient}
        setOpenAddEditModal={setOpenAddEditClient}
        titleModal={titleModal}
        getClients={getClients}
        formEdit={formEdit}
        setFormEdit={setFormEdit}
        saveId={saveId}
      />

      <ModalDeleteClient
        openModalDelete={openModalDelete}
        setOpenModalDelete={setOpenModalDelete}
        getClients={getClients}
        saveId={saveId}
      />
    </div>
  )
}
