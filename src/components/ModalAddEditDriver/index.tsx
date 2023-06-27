import api from '@/services/api';
import PropsModalAddEditDriver from '@/types/PropsModalAddEditDriver';
import CloseIcon from '@mui/icons-material/Close';
import { TextField } from '@mui/material';
import Box from '@mui/material/Box';
import Modal from '@mui/material/Modal';
import { format } from 'date-fns';
import { ChangeEvent, FormEvent, useState } from 'react';
import { toast } from 'react-toastify';
import styles from "../../styles/Forms.module.css";
import SendButton from '../SendButton';

const style = {
  border: '2px solid #000',
  boxShadow: 24,
  p: 4,
  position: 'absolute' as 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
};

const currencies = [
  {
    id: "0",
    label: ''
  },
  {
    id: "A",
    label: 'A'
  },
  {
    id: "B",
    label: 'B',
  },
  {
    id: "C",
    label: 'C',
  },
  {
    id: "D",
    label: 'D',
  },
  {
    id: "E",
    label: 'E',
  },
  {
    id: "AB",
    label: 'AB',
  },
  {
    id: "AC",
    label: 'AC',
  },
  {
    id: "AD",
    label: 'AD',
  },
  {
    id: "BC",
    label: 'BC',
  },
  {
    id: "BD",
    label: 'BD',
  },
];

export default function ModalAddEditDriver(
  {
    openAddEditDriver,
    setOpenAddEditDriver,
    titleModal,
    getDrivers,
    formEdit,
    setFormEdit,
    saveId }: PropsModalAddEditDriver
) {

  const [formAdd, setFormAdd] = useState({
    name: "",
    licenceNumber: "",
    category: "",
    expiresIn: format(new Date(), "yyyy-MM-dd")
  });

  async function addDriver() {
    const { name, licenceNumber, category, expiresIn } = formAdd;

    if (!name || !licenceNumber || !category || !expiresIn) {
      return toast.info("Preencha todos os campos!");
    }

    try {
      await api.post("/Condutor", {
        nome: name,
        numeroHabilitacao: licenceNumber,
        categoriaHabilitacao: category,
        vencimentoHabilitacao: new Date(expiresIn)
      });

      getDrivers();

      setFormAdd({
        name: "",
        licenceNumber: "",
        category: "",
        expiresIn: format(new Date(), "yyyy-MM-dd")
      });

      return toast.success("Condutor cadastrado com sucesso!");
    } catch (error: any) {
      return toast.error(error.response.data);
    }
  }

  async function editDriver() {
    const { category, expiresIn } = formEdit;

    if (!category || !expiresIn) {
      return toast.info("Preencha todos os campos!");
    }

    try {
      await api.put(`/Condutor/${saveId}`, {
        id: saveId,
        categoriaHabilitacao: category,
        vencimentoHabilitacao: expiresIn,
      });

      getDrivers();

      setFormEdit({
        category: "",
        expiresIn: "",
      });

      handleClose();

      return toast.success("Condutor atualizado com sucesso!");
    } catch (error: any) {
      return toast.error(error.response.data);
    }

  }

  async function submitForm(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();

    if (titleModal === "Cadastrar Condutor") {
      await addDriver();
      return;
    }

    await editDriver();
  }

  function handleChanceInput(event: ChangeEvent<HTMLInputElement>) {
    titleModal === "Cadastrar Condutor" ?
      setFormAdd({ ...formAdd, [event.target.name]: event.target.value })
      :
      setFormEdit({ ...formEdit, [event.target.name]: event.target.value })
  }

  function handleClose() {
    setOpenAddEditDriver(false);
  }

  return (
    <div>
      <Modal
        open={openAddEditDriver}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
          <CloseIcon
            sx={{ position: "absolute", top: 5, right: 12, cursor: "pointer" }}
            onClick={handleClose}
          />
          {titleModal === "Cadastrar Condutor" &&
            <form
              className={styles.form}
              onSubmit={submitForm}
            >
              <h1>{titleModal}</h1>
              <TextField
                label="Nome"
                name='name'
                value={formAdd.name}
                variant="standard"
                autoComplete='on'
                onChange={handleChanceInput}
              />
              <TextField
                label="CNH"
                name='licenceNumber'
                value={formAdd.licenceNumber}
                variant="standard"
                autoComplete='on'
                onChange={handleChanceInput}
              />
              <TextField
                select
                label="Categoria"
                name='category'
                value={formAdd.category}
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
                  value={formAdd.expiresIn}
                  onChange={handleChanceInput}
                />
              </div>
              <SendButton />
            </form>
          }
          {titleModal === "Editar Condutor" &&
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
          }
        </Box>
      </Modal>
    </div>
  );
}