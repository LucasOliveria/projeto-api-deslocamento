import PropsCustomButtonOpen from '@/types/PropsCustomButtonOpen';
import Button from '@mui/material/Button';
import Stack from '@mui/material/Stack';

export default function CustomButtonOpen({
  setOpenAddEditClient,
  setOpenAddEditDriver,
  setOpenAddEditCars,
  setOpenAddEditDisplacement,
  setTitleModal
}: PropsCustomButtonOpen) {

  function handleOpenModal() {
    if (setOpenAddEditClient) {
      setOpenAddEditClient(true);
      setTitleModal("Cadastrar Cliente");
      return;
    }

    if (setOpenAddEditDriver) {
      setOpenAddEditDriver(true);
      setTitleModal("Cadastrar Condutor");
      return;
    }

    if (setOpenAddEditCars) {
      setOpenAddEditCars(true);
      setTitleModal("Cadastrar Veículo");
      return;
    }

    if (setOpenAddEditDisplacement) {
      setOpenAddEditDisplacement(true);
      setTitleModal("Iniciar Deslocamento");
      return;
    }
  }

  return (
    <Stack direction="row">
      <Button variant="contained" onClick={handleOpenModal}>
        ADICIONAR
      </Button>
    </Stack>
  );
}