import CloseIcon from '@mui/icons-material/Close';
import Box from '@mui/material/Box';
import Modal from '@mui/material/Modal';
import { Dispatch, SetStateAction } from 'react';
import Button from '@mui/material/Button';
import Stack from '@mui/material/Stack';
import styles from '../../styles/global.module.css';
import api from '@/services/api';

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

export default function ModalDeleteDriver(
  {
    openModalDelete,
    setOpenModalDelete,
    getDrivers,
    saveId
  }
    :
    {
      openModalDelete: boolean,
      setOpenModalDelete: Dispatch<SetStateAction<boolean>>,
      getDrivers: () => Promise<void>
      saveId: number
    }
) {

  async function handleDeleteDriver() {
    try {
      await api.delete(`/Condutor/${saveId}`, {
        data: {
          id: saveId
        }
      });

      setOpenModalDelete(false);

      getDrivers();

      console.log("Condutor Excluído");
    } catch (error: any) {
      console.log("Condutor não excluído. Erro ao atualizar as entradas");
    }
  }

  function handleClose() {
    setOpenModalDelete(false)
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
            sx={{ position: "absolute", top: 5, right: 12, cursor: "pointer" }}
            onClick={handleClose}
          />
          <h2 className={styles.h2_modal_delete}>Deseja excluir o condutor?</h2>

          <Stack spacing={2} direction="row">
            <Button
              variant="contained"
              color='inherit'
              onClick={handleDeleteDriver}

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