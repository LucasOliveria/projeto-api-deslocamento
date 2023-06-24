import Box from '@mui/material/Box';
import Modal from '@mui/material/Modal';
import Typography from '@mui/material/Typography';
import { Dispatch, SetStateAction } from 'react';

const style = {
  transform: 'translate(-50%, -50%)',
  width: 400,
  border: '2px solid #000',
  boxShadow: 24,
  p: 4,
  position: 'absolute' as 'absolute',
  top: '50%',
  left: '50%',
};

export default function ModalDetails(
  { open, setOpen, details }: {
    open: boolean,
    setOpen: Dispatch<SetStateAction<boolean>>,
    details: {
      clientName: string
      driverName: string
      plate: string
    }
  }
) {
  const handleClose = () => setOpen(false);

  return (
    <div>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
          <Typography id="modal-modal-title" variant="h6" component="h2">
            Detalhes
          </Typography>
          <Typography id="modal-modal-description" sx={{ mt: 2 }}>
            Cliente: {details.clientName}
          </Typography>
          <Typography id="modal-modal-description" sx={{ mt: 2 }}>
            Motorista: {details.driverName}
          </Typography>
          <Typography id="modal-modal-description" sx={{ mt: 2 }}>
            Placa: {details.plate}
          </Typography>
        </Box>
      </Modal>
    </div>
  );
}