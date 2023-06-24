import DeleteForeverIcon from '@mui/icons-material/DeleteForever';
import Paper from '@mui/material/Paper';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TablePagination from '@mui/material/TablePagination';
import TableRow from '@mui/material/TableRow';
import { useState, ChangeEvent, Dispatch, SetStateAction } from 'react';
import EditIcon from '@mui/icons-material/Edit';
import PropsTable from '@/types/PropsTable';
import format from 'date-fns/format';
import InfoIcon from '@mui/icons-material/Info';
import api from '@/services/api';


export default function InfoTable(
  { header, clients, drivers, displacements, setDetails, setOpen, cars }: PropsTable
) {
  // const [page, setPage] = useState(0);
  // const [rowsPerPage, setRowsPerPage] = useState(10);

  // const handleChangePage = (event: unknown, newPage: number) => {
  //   setPage(newPage);
  // };

  // const handleChangeRowsPerPage = (event: ChangeEvent<HTMLInputElement>) => {
  //   setRowsPerPage(+event.target.value);
  //   setPage(0);
  // };

  async function handleDetailsDisplacement(idDriver: number, idCar: number, idClient: number) {
    try {
      const driver = await api.get(`/Condutor/${idDriver}`)
      const car = await api.get(`/Veiculo/${idCar}`)
      const client = await api.get(`/Cliente/${idClient}`)

      if (setOpen) {
        setOpen(true)
      }

      if (setDetails) {
        setDetails({
          clientName: client.data.nome,
          driverName: driver.data.nome,
          plate: car.data.placa
        })
      }

    } catch (error) {
      console.log(error)
    }
  }

  return (
    <Paper sx={{ width: '100%', overflow: 'hidden' }}>
      <TableContainer sx={{ maxHeight: 440 }}>
        <Table stickyHeader aria-label="sticky table" >
          <TableHead >
            <TableRow >
              {header?.map((title) => (
                <TableCell
                  key={title.id}
                  align='center'
                  style={{ minWidth: "100px" }}
                >
                  {title.label}
                </TableCell>
              ))}
            </TableRow>
          </TableHead>
          {clients &&
            <TableBody >
              {clients?.map((client) => (
                <TableRow hover key={client.id} role="checkbox" tabIndex={-1}>
                  <TableCell>
                    {client.nome}
                  </TableCell>
                  <TableCell>
                    {client.numeroDocumento}
                  </TableCell>
                  <TableCell>
                    {client.tipoDocumento}
                  </TableCell>
                  <TableCell>
                    {client.logradouro}, {client.numero} - {client.bairro}
                  </TableCell>
                  <TableCell>
                    {client.cidade}/{client.uf}
                  </TableCell>
                  <TableCell>
                    <EditIcon />
                  </TableCell>
                  <TableCell>
                    <DeleteForeverIcon />
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          }

          {drivers &&
            <TableBody >
              {drivers?.map((driver) => {
                const formatDate = format(new Date(driver.vencimentoHabilitacao), "dd-MM-yyyy");

                return (
                  <TableRow hover key={driver.id} role="checkbox" tabIndex={-1}>
                    <TableCell>
                      {driver.nome}
                    </TableCell>
                    <TableCell>
                      {driver.numeroHabilitacao}
                    </TableCell>
                    <TableCell>
                      {driver.catergoriaHabilitacao}
                    </TableCell>
                    <TableCell>
                      {formatDate}
                    </TableCell>
                    <TableCell>
                      <EditIcon />
                    </TableCell>
                    <TableCell>
                      <DeleteForeverIcon />
                    </TableCell>
                  </TableRow>
                )
              })}
            </TableBody>
          }

          {displacements &&
            <TableBody >
              {displacements?.map((info) => {
                const formatDateStart = info.inicioDeslocamento && format(new Date(info.inicioDeslocamento), "dd-MM-yyyy  H:mm");
                const formatDateEnd = info.fimDeslocamento && format(new Date(info.fimDeslocamento), "dd-MM-yyyy  H:mm");

                return (
                  <TableRow hover key={info.id} role="checkbox" tabIndex={-1}>
                    <TableCell>
                      {info.kmInicial}
                    </TableCell>
                    <TableCell>
                      {info.kmFinal}
                    </TableCell>
                    <TableCell>
                      {formatDateStart}
                    </TableCell>
                    <TableCell>
                      {formatDateEnd}
                    </TableCell>
                    <TableCell>
                      {info.motivo}
                    </TableCell>
                    <TableCell>
                      {info.checkList}
                    </TableCell>
                    <TableCell>
                      {info.observacao}
                    </TableCell>
                    <TableCell onClick={() => handleDetailsDisplacement(info.idCondutor, info.idVeiculo, info.idCliente)}>
                      <InfoIcon sx={{ cursor: "pointer" }} />
                    </TableCell>
                    <TableCell>
                      <EditIcon />
                    </TableCell>
                    <TableCell>
                      <DeleteForeverIcon />
                    </TableCell>
                  </TableRow>
                )
              })}
            </TableBody>
          }
          {cars &&
            <TableBody >
              {cars?.map((car) => (
                <TableRow hover key={car.id} role="checkbox" tabIndex={-1}>
                  <TableCell>
                    {car.marcaModelo}
                  </TableCell>
                  <TableCell>
                    {car.placa}
                  </TableCell>
                  <TableCell>
                    {car.kmAtual}
                  </TableCell>
                  <TableCell>
                    {car.anoFabricacao}
                  </TableCell>
                  <TableCell>
                    <EditIcon />
                  </TableCell>
                  <TableCell>
                    <DeleteForeverIcon />
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          }
        </Table>
      </TableContainer>
      {/* <TablePagination
        rowsPerPageOptions={[10, 25, 100]}
        component="div"
        count={rows.length}
        rowsPerPage={rowsPerPage}
        page={page}
        onPageChange={handleChangePage}
        onRowsPerPageChange={handleChangeRowsPerPage}
      /> */}
    </Paper>
  );
}