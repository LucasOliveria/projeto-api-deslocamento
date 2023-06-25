import Stack from '@mui/material/Stack';
import Button from '@mui/material/Button';
import PropsAddButtons from '@/types/PropsAddButtons';

export default function CustomButtonOpen({
  setOpenAddEditClient,
  setOpenAddEditDriver,
  setOpenAddEditCars,
  setTitleModal
}: PropsAddButtons) {

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
  }

  return (
    <Stack spacing={2} direction="row">
      <Button variant="contained" onClick={handleOpenModal}>
        ADICIONAR
      </Button>
    </Stack>
  );
}