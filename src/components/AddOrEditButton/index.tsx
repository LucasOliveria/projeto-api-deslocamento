import Stack from '@mui/material/Stack';
import Button from '@mui/material/Button';
import PropsButtons from '@/types/PropsButtons';

export default function AddOrEditButton({ title }: PropsButtons) {

  return (
    <Stack spacing={2} direction="row">
      <Button variant="contained">{title}</Button>
    </Stack>
  );
}