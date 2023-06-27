import api from '@/services/api';
import CloseIcon from '@mui/icons-material/Close';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Modal from '@mui/material/Modal';
import Stack from '@mui/material/Stack';
import { Dispatch, SetStateAction } from 'react';
import { toast } from 'react-toastify';
import styles from "../../styles/Globals.module.css";

const style = {
  transform: 'translate(-50%, -50%)',
  width: 400,
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  border: '2px solid #000',
  boxShadow: 24,
  p: 4,
  position: 'absolute' as 'absolute',
  top: '50%',
  left: '50%',
};

export default function ModalDeleteClient(
  {
    openModalDelete,
    setOpenModalDelete,
    getClients,
    saveId
  }
    :
    {
      openModalDelete: boolean,
      setOpenModalDelete: Dispatch<SetStateAction<boolean>>,
      getClients: () => Promise<void>
      saveId: number
    }
) {

  async function handleDeleteClient() {
    try {
      await api.delete(`/Cliente/${saveId}`, {
        data: {
          id: saveId
        }
      });

      setOpenModalDelete(false);

      getClients();

      return toast.success("Cliente excluído!");
    } catch (error: any) {
      return toast.error("500 - Cliente não excluído. Erro ao atualizar as entradas");

    }
  }

  function handleClose() {
    setOpenModalDelete(false);
  }

  return (
    <div>
      <Modal
        open={openModalDelete}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
          <CloseIcon
            sx={{ position: "absolute", top: 2, right: 3, cursor: "pointer" }}
            onClick={handleClose}
          />
          <h2 className={styles.h2_modal_delete}>
            Deseja excluir o cliente?
          </h2>

          <Stack spacing={2} direction="row">
            <Button
              variant="contained"
              color='inherit'
              onClick={handleDeleteClient}
            >
              SIM
            </Button>
            <Button
              className={styles.red_button}
              variant="contained"
              color='inherit'
              onClick={handleClose}
            >
              NÃO
            </Button>
          </Stack>
        </Box>
      </Modal>
    </div>
  );
}