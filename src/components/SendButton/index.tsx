import Stack from '@mui/material/Stack';
import Button from '@mui/material/Button';

export default function SendButton() {

  return (
    <Stack spacing={2} direction="row">
      <Button variant="contained" type='submit'>ENVIAR</Button>
    </Stack>
  );
}