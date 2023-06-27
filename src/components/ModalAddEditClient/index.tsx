import api from '@/services/api';
import PropsModalAddEditClient from '@/types/PropsModalAddEditClient';
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

export default function ModalAddEditClient(
  {
    openAddEditClient,
    setOpenAddEditClient,
    titleModal,
    getClients,
    formEdit,
    setFormEdit,
    saveId }: PropsModalAddEditClient
) {
  const [formAdd, setFormAdd] = useState({
    name: "",
    docNumber: "",
    docType: "",
    adress: "",
    houseNumber: "",
    neighborhood: "",
    city: "",
    state: ""
  });

  async function addClient() {
    const { name, docNumber, docType, adress, houseNumber, neighborhood, city, state } = formAdd;

    if (!name || !docNumber || !docType || !adress || !houseNumber || !neighborhood || !city || !state) {
      return console.log("preencha todos os campos");
    }

    try {
      await api.post("/Cliente", {
        numeroDocumento: docNumber,
        tipoDocumento: docType,
        nome: name,
        logradouro: adress,
        numero: houseNumber,
        bairro: neighborhood,
        cidade: city,
        uf: state
      });

      getClients();

      setFormAdd({
        name: "",
        docNumber: "",
        docType: "",
        adress: "",
        houseNumber: "",
        neighborhood: "",
        city: "",
        state: ""
      });

      return console.log("Cliente cadastrado com sucesso!");
    } catch (error: any) {
      console.log(error.response.data);
    }
  }

  async function editClient() {
    const { name, adress, houseNumber, neighborhood, city, state } = formEdit;

    if (!name || !adress || !houseNumber || !neighborhood || !city || !state) {
      return console.log("preencha todos os campos");
    }

    try {
      await api.put(`/Cliente/${saveId}`, {
        id: saveId,
        nome: name,
        logradouro: adress,
        numero: houseNumber,
        bairro: neighborhood,
        cidade: city,
        uf: state
      });

      getClients();

      setFormEdit({
        name: "",
        adress: "",
        houseNumber: "",
        neighborhood: "",
        city: "",
        state: ""
      });

      handleClose();

      return console.log("Cliente atualizado com sucesso!");
    } catch (error: any) {
      console.log(error.response.data);
    }
  }

  async function submitForm(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();

    if (titleModal === "Cadastrar Cliente") {
      await addClient();
      return;
    }

    await editClient();
  }

  function handleChanceInput(event: ChangeEvent<HTMLInputElement>) {
    titleModal === "Cadastrar Cliente" ?
      setFormAdd({ ...formAdd, [event.target.name]: event.target.value })
      :
      setFormEdit({ ...formEdit, [event.target.name]: event.target.value })
  }

  function handleClose() {
    setOpenAddEditClient(false);

    setFormAdd({
      name: "",
      docNumber: "",
      docType: "",
      adress: "",
      houseNumber: "",
      neighborhood: "",
      city: "",
      state: ""
    });
  }

  return (
    <div>
      <Modal
        open={openAddEditClient}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
          <CloseIcon
            sx={{ position: "absolute", top: 5, right: 12, cursor: "pointer" }}
            onClick={handleClose}
          />
          {titleModal === "Cadastrar Cliente" &&
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
                label="Nº Documento"
                name='docNumber'
                value={formAdd.docNumber}
                variant="standard"
                autoComplete='on'
                onChange={handleChanceInput}
              />
              <TextField
                label="Tipo de Documento"
                name='docType'
                value={formAdd.docType}
                variant="standard"
                autoComplete='on'
                onChange={handleChanceInput}
              />
              <TextField
                label="Endereço"
                name='adress'
                value={formAdd.adress}
                variant="standard"
                autoComplete='on'
                onChange={handleChanceInput}
              />
              <TextField
                label="Número"
                name='houseNumber'
                value={formAdd.houseNumber}
                variant="standard"
                autoComplete='on'
                onChange={handleChanceInput}
              />
              <TextField
                label="Bairro"
                name='neighborhood'
                value={formAdd.neighborhood}
                variant="standard"
                autoComplete='on'
                onChange={handleChanceInput}
              />
              <TextField
                label="Cidade"
                name='city'
                value={formAdd.city}
                variant="standard"
                autoComplete='on'
                onChange={handleChanceInput}
              />
              <TextField
                label="UF"
                name='state'
                value={formAdd.state}
                variant="standard"
                autoComplete='on'
                onChange={handleChanceInput}
              />
              <SendButton />
            </form>
          }
          {titleModal === "Editar Cliente" &&
            <form
              className={styles.form}
              onSubmit={submitForm}
            >
              <h1>{titleModal}</h1>
              <TextField
                label="Nome"
                name='name'
                value={formEdit.name}
                variant="standard"
                autoComplete='on'
                onChange={handleChanceInput}
              />
              <TextField
                label="Endereço"
                name='adress'
                value={formEdit.adress}
                variant="standard"
                autoComplete='on'
                onChange={handleChanceInput}
              />
              <TextField
                label="Número"
                name='houseNumber'
                value={formEdit.houseNumber}
                variant="standard"
                autoComplete='on'
                onChange={handleChanceInput}
              />
              <TextField
                label="Bairro"
                name='neighborhood'
                value={formEdit.neighborhood}
                variant="standard"
                autoComplete='on'
                onChange={handleChanceInput}
              />
              <TextField
                label="Cidade"
                name='city'
                value={formEdit.city}
                variant="standard"
                autoComplete='on'
                onChange={handleChanceInput}
              />
              <TextField
                label="UF"
                name='state'
                value={formEdit.state}
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