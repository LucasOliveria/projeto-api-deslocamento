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

export default function ModalDeleteCar(
  {
    openModalDelete,
    setOpenModalDelete,
    getCars,
    saveId
  }
    :
    {
      openModalDelete: boolean,
      setOpenModalDelete: Dispatch<SetStateAction<boolean>>,
      getCars: () => Promise<void>
      saveId: number
    }
) {

  async function handleDeleteDriver() {
    try {
      await api.delete(`/Veiculo/${saveId}`, {
        data: {
          id: saveId
        }
      });

      setOpenModalDelete(false);

      getCars();

      console.log("Veículo Excluído");
    } catch (error: any) {
      console.log("Veículo não excluído. Erro ao atualizar as entradas");
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
            sx={{ position: "absolute", top: 2, right: 5, cursor: "pointer", width: "27px" }}
            onClick={handleClose}
          />
          <h2 className={styles.h2_modal_delete}>
            Deseja excluir o veículo?
          </h2>

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