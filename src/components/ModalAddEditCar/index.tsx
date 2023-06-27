import api from '@/services/api';
import PropsModalAddEditCar from '@/types/PropsModalAddEditCar';
import CloseIcon from '@mui/icons-material/Close';
import { TextField } from '@mui/material';
import Box from '@mui/material/Box';
import Modal from '@mui/material/Modal';
import { ChangeEvent, FormEvent, useState } from 'react';
import styles from "../../styles/Globals.module.css";
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

export default function ModalAddEditCar(
  {
    openAddEditCars,
    setOpenAddEditCars,
    titleModal,
    getCars,
    formEdit,
    setFormEdit,
    saveId }: PropsModalAddEditCar
) {
  const [formAdd, setFormAdd] = useState({
    plate: "",
    brandModel: "",
    year: 0,
    currentKm: 0
  });

  async function addCar() {
    const { plate, brandModel, year, currentKm } = formAdd;

    if (!plate || !brandModel || !year || !currentKm) {
      return console.log("preencha todos os campos");
    }

    try {
      await api.post("/Veiculo", {
        placa: plate,
        marcaModelo: brandModel,
        anoFabricacao: year,
        kmAtual: currentKm
      });

      getCars();

      setFormAdd({
        plate: "",
        brandModel: "",
        year: 0,
        currentKm: 0
      });

      return console.log("Veículo cadastrado com sucesso!");
    } catch (error: any) {
      console.log(error);
    }
  }

  async function editCar() {
    const { brandModel, year, currentKm } = formEdit;

    if (!brandModel || !year || !currentKm) {
      return console.log("preencha todos os campos");
    }

    try {
      await api.put(`/Veiculo/${saveId}`, {
        id: saveId,
        marcaModelo: brandModel,
        anoFabricacao: year,
        kmAtual: currentKm,
      });

      getCars();

      setFormEdit({
        brandModel: "",
        year: 0,
        currentKm: 0
      });

      handleClose();

      return console.log("Veículo atualizado com sucesso!");
    } catch (error: any) {
      console.log(error.response.data);
    }
  }

  async function submitForm(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();

    if (titleModal === "Cadastrar Veículo") {
      await addCar();
      return;
    }

    await editCar();
  }

  function handleChanceInput(event: ChangeEvent<HTMLInputElement>) {
    titleModal === "Cadastrar Veículo" ?
      setFormAdd({ ...formAdd, [event.target.name]: event.target.value })
      :
      setFormEdit({ ...formEdit, [event.target.name]: event.target.value })
  }

  function handleClose() {
    setOpenAddEditCars(false);

    setFormAdd({
      plate: "",
      brandModel: "",
      year: 0,
      currentKm: 0
    });
  }

  return (
    <div>
      <Modal
        open={openAddEditCars}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
          <CloseIcon
            sx={{ position: "absolute", top: 5, right: 12, cursor: "pointer" }}
            onClick={handleClose}
          />
          {titleModal === "Cadastrar Veículo" &&
            <form
              className={styles.form}
              onSubmit={submitForm}
            >
              <h1>{titleModal}</h1>
              <TextField
                label="Placa"
                name='plate'
                value={formAdd.plate}
                variant="standard"
                autoComplete='on'
                onChange={handleChanceInput}
              />
              <TextField
                label="Marca/Modelo"
                name='brandModel'
                value={formAdd.brandModel}
                variant="standard"
                autoComplete='on'
                onChange={handleChanceInput}
              />
              <TextField
                type="number"
                label="Ano de Fabricação"
                name='year'
                value={formAdd.year}
                InputLabelProps={{
                  shrink: true,
                }}
                inputProps={{ min: 0, step: 'any' }}
                variant="standard"
                autoComplete='on'
                onChange={handleChanceInput}
              />
              <TextField
                type="number"
                label="Km Atual"
                name='currentKm'
                value={formAdd.currentKm}
                InputLabelProps={{
                  shrink: true,
                }}
                inputProps={{ min: 0, step: 'any' }}
                variant="standard"
                autoComplete='on'
                onChange={handleChanceInput}
              />
              <SendButton />
            </form>
          }
          {titleModal === "Editar Veículo" &&
            <form
              className={styles.form}
              onSubmit={submitForm}
            >
              <h1>{titleModal}</h1>
              <TextField
                label="Marca/Modelo"
                name='brandModel'
                value={formEdit.brandModel}
                variant="standard"
                autoComplete='on'
                onChange={handleChanceInput}
              />
              <TextField
                type="number"
                label="Ano de Fabricação"
                name='year'
                value={formEdit.year}
                InputLabelProps={{
                  shrink: true,
                }}
                inputProps={{ min: 0, step: 'any' }}
                variant="standard"
                autoComplete='on'
                onChange={handleChanceInput}
              />
              <TextField
                type="number"
                label="Km Atual"
                name='currentKm'
                value={formEdit.currentKm}
                InputLabelProps={{
                  shrink: true,
                }}
                inputProps={{ min: 0 }}
                variant="standard"
                autoComplete='on'
                onChange={handleChanceInput}
              />
              <SendButton />
            </form>
          }
        </Box>
      </Modal>
    </div>
  );
}