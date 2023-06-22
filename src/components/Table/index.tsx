import DeleteForeverIcon from '@mui/icons-material/DeleteForever';
import Paper from '@mui/material/Paper';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TablePagination from '@mui/material/TablePagination';
import TableRow from '@mui/material/TableRow';
import { useState, ChangeEvent } from 'react';
import EditIcon from '@mui/icons-material/Edit';
import Props from '@/types/Props';

// interface Column {
//   id: 'name' | 'code' | 'population' | 'size';
//   label: string;
//   minWidth?: number;
//   align?: 'right';
//   format?: (value: number) => string;
// }

// const columns: readonly Column[] = [
//   { id: 'name', label: 'Name', minWidth: 170 },
//   { id: 'code', label: 'ISO\u00a0Code', minWidth: 100 },
//   {
//     id: 'population',
//     label: 'Population',
//     minWidth: 170,
//     align: 'right',
//     format: (value: number) => value.toLocaleString('en-US'),
//   },
//   {
//     id: 'size',
//     label: 'Size\u00a0(km\u00b2)',
//     minWidth: 50,
//     align: 'right',
//     format: (value: number) => value.toLocaleString('en-US'),
//   }
// ];

// interface Data {
//   name: string;
//   code: string;
//   population: number;
//   size: number;
// }

// function createData(
//   name: string,
//   code: string,
//   population: number,
//   size: number,
// ): Data {
//   return { name, code, population, size };
// }

const rows = [
  // createData('India', 'IN', 1324171354, 3287263),
  // createData('China', 'CN', 1403500365, 9596961),
  // createData('Italy', 'IT', 60483973, 301340),
  // createData('United States', 'US', 327167434, 9833520),
  // createData('Canada', 'CA', 37602103, 9984670),
  // createData('Australia', 'AU', 25475400, 7692024),
  // createData('Germany', 'DE', 83019200, 357578),
  // createData('Ireland', 'IE', 4857000, 70273),
  // createData('Mexico', 'MX', 126577691, 1972550),
  // createData('Japan', 'JP', 126317000, 377973),
  // createData('France', 'FR', 67022000, 640679),
  // createData('United Kingdom', 'GB', 67545757, 242495),
  // createData('Russia', 'RU', 146793744, 17098246),
  // createData('Nigeria', 'NG', 200962417, 923768),
  // createData('Brazil', 'BR', 210147125, 8515767),
];

export default function InfoTable({ header, clients, drivers }: Props) {
  const [page, setPage] = useState(0);
  const [rowsPerPage, setRowsPerPage] = useState(10);

  const handleChangePage = (event: unknown, newPage: number) => {
    setPage(newPage);
  };

  const handleChangeRowsPerPage = (event: ChangeEvent<HTMLInputElement>) => {
    setRowsPerPage(+event.target.value);
    setPage(0);
  };

  return (
    <Paper sx={{ minWidth: '100%', overflow: 'hidden' }}>
      <TableContainer sx={{ maxHeight: 440 }}>
        <Table stickyHeader aria-label="sticky table" >
          <TableHead >
            <TableRow >
              {header?.slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage).map((title) => (
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
              {drivers?.map((driver) => (
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
                    {driver.vencimentoHabilitacao}
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