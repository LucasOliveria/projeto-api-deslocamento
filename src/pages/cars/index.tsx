import CustomButtonOpen from "@/components/CustomButtonOpen";
import Footer from "@/components/Footer";
import Header from '@/components/Header';
import ModalAddEditCar from "@/components/ModalAddEditCar";
import ModalDeleteCar from "@/components/ModalDeleteCar";
import InfoTable from "@/components/Table";
import api from "@/services/api";
import styles from '@/styles/Home.module.css';
import { useEffect, useState } from "react";
import { toast } from "react-toastify";
import animations from "../../styles/Animations.module.css";


export default function Cars() {
  const [cars, setCars] = useState([]);

  const [openAddEditCars, setOpenAddEditCars] = useState(false);

  const [titleModal, setTitleModal] = useState("");

  const [formEdit, setFormEdit] = useState({
    brandModel: "",
    year: 0,
    currentKm: 0
  });

  const [openModalDelete, setOpenModalDelete] = useState(false);

  const [saveId, setSaveId] = useState(0);

  async function getCars() {
    try {
      const response = await api.get("/Veiculo");

      setCars(response.data);
    } catch (error) {
      toast.error("500 - Erro do servido. Recarregue a página!");
    }
  }

  useEffect(() => {
    getCars();
  }, []);

  return (
    <div className={styles.body}>
      <Header valueNav={4} />
      <main className={styles.main}>
        <div className={`${styles.containerTable} ${animations.fade_in_left}`}>
          <div className={styles.container_title}>
            <h1 className={styles.title_table}>Veículos</h1>
          </div>
          <div className={styles.container_add_button}>
            <CustomButtonOpen
              setTitleModal={setTitleModal}
              setOpenAddEditCars={setOpenAddEditCars}
            />
          </div>
          <InfoTable
            header={
              [
                { id: 1, label: "Marca/Modelo" },
                { id: 2, label: "placa" },
                { id: 3, label: "Km Atual" },
                { id: 4, label: "Ano de Fabricação" },
                { id: 5, label: "" },
                { id: 6, label: "" }
              ]
            }
            cars={cars}
            setOpenAddEditCars={setOpenAddEditCars}
            setTitleModal={setTitleModal}
            setFormEditCar={setFormEdit}
            setOpenModalDelete={setOpenModalDelete}
            setSaveId={setSaveId}
          />
        </div>
      </main>
      <Footer />
      <ModalAddEditCar
        openAddEditCars={openAddEditCars}
        setOpenAddEditCars={setOpenAddEditCars}
        titleModal={titleModal}
        getCars={getCars}
        formEdit={formEdit}
        setFormEdit={setFormEdit}
        saveId={saveId}
      />
      <ModalDeleteCar
        openModalDelete={openModalDelete}
        setOpenModalDelete={setOpenModalDelete}
        getCars={getCars}
        saveId={saveId}
      />
    </div>
  )
}
