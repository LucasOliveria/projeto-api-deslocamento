import Stack from '@mui/material/Stack';
import Button from '@mui/material/Button';
import PropsAddButtons from '@/types/PropsAddButtons';

export default function CustoncButtonOpen({ setOpenAddEditModal, setTitleModal }: PropsAddButtons) {

  function handleOpenModal() {
    if (setOpenAddEditModal && setTitleModal) {
      setOpenAddEditModal(true);
      setTitleModal("Cadastrar Cliente")
    }
  }

  return (
    <Stack spacing={2} direction="row">
      <Button variant="contained" onClick={handleOpenModal}>ADICIONAR</Button>
    </Stack>
  );
}