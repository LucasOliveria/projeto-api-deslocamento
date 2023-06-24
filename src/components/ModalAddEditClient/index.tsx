import { TextField } from '@mui/material';
import Box from '@mui/material/Box';
import Modal from '@mui/material/Modal';
import styles from "./styles.module.css";
import { Dispatch, SetStateAction } from 'react';
import AddOrEditButton from '../AddOrEditButton';

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
  { openAddEditClient, setOpenAddEditClient }: { openAddEditClient: boolean, setOpenAddEditClient: Dispatch<SetStateAction<boolean>> }
) {

  const handleClose = () => setOpenAddEditClient(false);
  return (
    <div>
      <Modal
        open={openAddEditClient}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
          <form className={styles.form}>
            <h1>Cadastrar Cliente</h1>
            <TextField label="Nome" variant="standard" />
            <TextField label="Nº Documento" variant="standard" />
            <TextField label="Tipo de Documento" variant="standard" />
            <TextField label="Endereço" variant="standard" />
            <TextField label="Número" variant="standard" />
            <TextField label="Bairro" variant="standard" />
            <TextField label="Cidade" variant="standard" />
            <TextField label="UF" variant="standard" />
            <AddOrEditButton title="CADASTRAR" />
          </form>
        </Box>
      </Modal>
    </div>
  );
}