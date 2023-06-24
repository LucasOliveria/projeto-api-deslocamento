import api from '@/services/api';
import PropsModalAddEditClient from '@/types/PropsModalAddEditClient';
import CloseIcon from '@mui/icons-material/Close';
import { TextField } from '@mui/material';
import Box from '@mui/material/Box';
import Modal from '@mui/material/Modal';
import { ChangeEvent, FormEvent, useState } from 'react';
import SendButton from '../SendButton';
import styles from "./styles.module.css";

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

export default function ModalAddEditClient(
  { openAddEditClient, setOpenAddEditClient, titleModal, getClients }: PropsModalAddEditClient
) {
  const [form, setForm] = useState({
    name: "",
    docNumber: "",
    docType: "",
    adress: "",
    houseNumber: "",
    neighborhood: "",
    city: "",
    state: ""
  });

  async function submitForm(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();

    const { name, docNumber, docType, adress, houseNumber, neighborhood, city, state } = form;

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

      setForm({
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
    } catch (error) {
      console.log(error);
    }

  }

  function handleChanceInput(event: ChangeEvent<HTMLInputElement>) {
    setForm({ ...form, [event.target.name]: event.target.value });
  }

  function handleClose() {
    setOpenAddEditClient(false);
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
          {openAddEditClient &&
            <form
              className={styles.form}
              onSubmit={submitForm}
            >
              <h1>{titleModal}</h1>
              <TextField
                label="Nome"
                name='name'
                value={form.name}
                variant="standard"
                autoComplete='on'
                onChange={handleChanceInput}
              />
              <TextField
                label="Nº Documento"
                name='docNumber'
                value={form.docNumber}
                variant="standard"
                autoComplete='on'
                onChange={handleChanceInput}
              />
              <TextField
                label="Tipo de Documento"
                name='docType'
                value={form.docType}
                variant="standard"
                autoComplete='on'
                onChange={handleChanceInput}
              />
              <TextField
                label="Endereço"
                name='adress'
                value={form.adress}
                variant="standard"
                autoComplete='on'
                onChange={handleChanceInput}
              />
              <TextField
                label="Número"
                name='houseNumber'
                value={form.houseNumber}
                variant="standard"
                autoComplete='on'
                onChange={handleChanceInput}
              />
              <TextField
                label="Bairro"
                name='neighborhood'
                value={form.neighborhood}
                variant="standard"
                autoComplete='on'
                onChange={handleChanceInput}
              />
              <TextField
                label="Cidade"
                name='city'
                value={form.city}
                variant="standard"
                autoComplete='on'
                onChange={handleChanceInput}
              />
              <TextField
                label="UF"
                name='state'
                value={form.state}
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