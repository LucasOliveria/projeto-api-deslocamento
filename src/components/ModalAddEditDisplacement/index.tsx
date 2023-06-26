import api from '@/services/api';
import PropsModalAddEditDisplacement from '@/types/PropsModalAddEditDisplacement';
import CloseIcon from '@mui/icons-material/Close';
import { TextField } from '@mui/material';
import Box from '@mui/material/Box';
import Modal from '@mui/material/Modal';
import { format } from 'date-fns';
import { ChangeEvent, FormEvent, useEffect, useState } from 'react';
import styles from "../../styles/global.module.css";
import SendButton from '../SendButton';

const style = {
  maxWidth: 400,
  height: "600px",
  border: '2px solid #000',
  boxShadow: 24,
  bgcolor: 'background.paper',
  p: 4,
  position: 'absolute' as 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
};

export default function ModalAddEditDisplacement(
  {
    openAddEditDisplacement,
    setOpenAddEditDisplacement,
    titleModal,
    getDisplacements,
    formEdit,
    setFormEdit,
    saveId }: PropsModalAddEditDisplacement
) {
  const [formAdd, setFormAdd] = useState({
    initialKm: "",
    startTripDate: format(new Date(), "yyyy-MM-dd"),
    startTriphours: format(new Date(), "HH:mm"),
    reason: "",
    checkList: "",
    observation: "",
    idClient: 0,
    idDriver: 0,
    idCar: 0,
  });

  const [clients, setClients] = useState<any>([]);

  const [drivers, setDrivers] = useState<any>([]);

  const [cars, setCars] = useState<any>([]);

  async function handleDriversCarsClientsList() {
    try {
      const clients = await api.get("/Cliente");
      const drivers = await api.get("/Condutor");
      const cars = await api.get("/Veiculo");

      setClients([{ id: "", nome: "" }, ...clients.data]);
      setDrivers([{ id: "", nome: "" }, ...drivers.data]);
      setCars([{ id: "", marcaModelo: "", placa: "" }, ...cars.data]);

    } catch (error: any) {
      console.log("500 - Erro interno ao carregar listas");
    }
  }

  async function addDisplacement() {
    const { initialKm, startTripDate, startTriphours, reason, checkList, observation, idClient, idDriver, idCar } = formAdd;

    if (!initialKm || !startTripDate || !startTriphours || !reason || !checkList || !observation || !idClient || !idDriver || !idCar) {
      return console.log("preencha todos os campos!");
    }

    const formatIdDriver = Number(idDriver.toString().split(" ")[0]);
    const formatIdCar = Number(idCar.toString().split(" ")[0]);
    const formatIdClient = Number(idClient.toString().split(" ")[0]);

    const formatStartTrip = startTripDate + "T" + startTriphours
    console.log(formatStartTrip);

    try {
      await api.post("/Deslocamento/IniciarDeslocamento", {
        kmInicial: initialKm,
        inicioDeslocamento: new Date(formatStartTrip),
        checkList: checkList,
        motivo: reason,
        observacao: observation,
        idCondutor: formatIdDriver,
        idVeiculo: formatIdCar,
        idCliente: formatIdClient,
      });

      getDisplacements();

      setFormAdd({
        initialKm: "",
        startTripDate: format(new Date(), "yyyy-MM-dd"),
        startTriphours: format(new Date(), "HH:mm"),
        reason: "",
        checkList: "",
        observation: "",
        idClient: 0,
        idDriver: 0,
        idCar: 0,
      });

      return console.log("Deslocamento iniciado");
    } catch (error: any) {
      console.log(error);
    }
  }

  async function editDisplacement() {
    const { finalKm, endTripDate, endTripHours, observation } = formEdit;

    if (!finalKm || !endTripDate || !endTripHours || !observation) {
      return console.log("preencha todos os campos");
    }

    try {
      await api.put(`/Condutor/${saveId}`, {
        id: saveId,
        kmFinal: finalKm,
        fimDeslocamento: "2023-06-26T12:03:41.745Z",
        observacao: "string"
      });

      getDisplacements();

      setFormEdit({
        finalKm: "",
        endTripDate: "",
        endTripHours: "",
        observation: ""
      });

      handleClose();

      return console.log("Deslocamento encerrado!");
    } catch (error: any) {
      console.log(error.response.data);
    }

  }

  async function submitForm(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();

    if (titleModal === "Iniciar Deslocamento") {
      await addDisplacement();
      return;
    }

    await editDisplacement();
  }

  function handleChanceInput(event: ChangeEvent<HTMLInputElement>) {
    titleModal === "Iniciar Deslocamento" ?
      setFormAdd({ ...formAdd, [event.target.name]: event.target.value })
      :
      setFormEdit({ ...formEdit, [event.target.name]: event.target.value })
  }

  function handleClose() {
    setOpenAddEditDisplacement(false);

    setFormAdd({
      initialKm: "",
      startTripDate: format(new Date(), "yyyy-MM-dd"),
      startTriphours: format(new Date(), "HH:mm"),
      reason: "",
      checkList: "",
      observation: "",
      idClient: 0,
      idDriver: 0,
      idCar: 0,
    });
  }

  useEffect(() => {
    handleDriversCarsClientsList()
  }, []);

  return (
    <div>
      <Modal
        open={openAddEditDisplacement}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
          <CloseIcon
            sx={{ position: "absolute", top: 5, right: 12, cursor: "pointer" }}
            onClick={handleClose}
          />
          {titleModal === "Iniciar Deslocamento" &&
            <form
              className={styles.form}
              onSubmit={submitForm}
            >
              <h1>{titleModal}</h1>
              <TextField
                label="Km Inicial"
                name='initialKm'
                value={formAdd.initialKm}
                variant="standard"
                autoComplete='on'
                onChange={handleChanceInput}
              />
              <div className={styles.container_date}>
                <label
                  className={styles.label_date}
                  htmlFor="startTripDate"
                >
                  Data Inicial
                </label>
                <input
                  className={styles.input_date}
                  id="startTripDate"
                  type="date"
                  name="startTripDate"
                  value={formAdd.startTripDate}
                  onChange={handleChanceInput}
                />
              </div>
              <div className={styles.container_time}>
                <label
                  className={styles.label_date}
                  htmlFor="startTriphours"
                >
                  Hora Inicial
                </label>
                <input
                  className={styles.input_time}
                  id="startTriphours"
                  type="time"
                  name="startTriphours"
                  value={formAdd.startTriphours}
                  onChange={handleChanceInput}
                />
              </div>
              <TextField
                label="Motivo"
                name='reason'
                value={formAdd.reason}
                variant="standard"
                autoComplete='on'
                onChange={handleChanceInput}
              />
              <TextField
                label="CheckList"
                name='checkList'
                value={formAdd.checkList}
                variant="standard"
                autoComplete='on'
                onChange={handleChanceInput}
              />
              <TextField
                label="Observação"
                name='observation'
                value={formAdd.observation}
                variant="standard"
                autoComplete='on'
                onChange={handleChanceInput}
              />
              <TextField
                select
                label="Cliente"
                name='idClient'
                value={formAdd.idClient}
                SelectProps={{
                  native: true,
                }}
                variant="standard"
                onChange={handleChanceInput}
              >
                {clients.map((option: any) => (
                  <option key={option.id} value={option.id}>
                    {option.id} - {option.nome}
                  </option>
                ))}
              </TextField>
              <TextField
                select
                label="Condutor"
                name='idDriver'
                value={formAdd.idDriver}
                SelectProps={{
                  native: true,
                }}
                variant="standard"
                onChange={handleChanceInput}
              >
                {drivers.map((option: any) => (
                  <option key={option.id} value={option.id}>
                    {option.id} - {option.nome}
                  </option>
                ))}
              </TextField>
              <TextField
                select
                label="Carro/Placa"
                name='idCar'
                value={formAdd.idCar}
                SelectProps={{
                  native: true,
                }}
                variant="standard"
                onChange={handleChanceInput}
              >
                {cars.map((option: any) => (
                  <option key={option.id} value={option.id}>
                    {option.id} - {option.marcaModelo} - {option.placa}
                  </option>
                ))}
              </TextField>
              <SendButton />
            </form>
          }
          {/* {titleModal === "Editar Condutor" &&
            <form
              className={styles.form}
              onSubmit={submitForm}
            >
              <h1>{titleModal}</h1>
              <TextField
                select
                label="Categoria"
                name='category'
                value={formEdit.category}
                SelectProps={{
                  native: true,
                }}
                variant="standard"
                onChange={handleChanceInput}
              >
                {currencies.map((option) => (
                  <option key={option.id} value={option.id}>
                    {option.label}
                  </option>
                ))}
              </TextField>
              <div className={styles.container_date}>
                <label
                  className={styles.label_date}
                  htmlFor="expiresIn">
                  Data de Vencimento
                </label>
                <input
                  className={styles.input_date}
                  id="expiresIn"
                  type="date"
                  name="expiresIn"
                  value={formEdit.expiresIn}
                  onChange={handleChanceInput}
                />
              </div>
              <SendButton />
            </form>
          } */}
        </Box>
      </Modal>
    </div>
  );
}