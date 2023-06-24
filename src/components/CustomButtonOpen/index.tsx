import Stack from '@mui/material/Stack';
import Button from '@mui/material/Button';
import PropsButtons from '@/types/PropsButtons';

export default function CustoncButtonOpen({ title, setOpen }: PropsButtons) {

  function handleOpenModal() {
    if (setOpen) {
      setOpen(true);
    }
  }
  return (
    <Stack spacing={2} direction="row">
      <Button variant="contained" onClick={handleOpenModal}>{title}</Button>
    </Stack>
  );
}