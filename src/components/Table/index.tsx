import api from '@/services/api';
import PropsTable from '@/types/PropsTable';
import DeleteForeverIcon from '@mui/icons-material/DeleteForever';
import EditIcon from '@mui/icons-material/Edit';
import EditLocationOutlinedIcon from '@mui/icons-material/EditLocationOutlined';
import WhereToVoteOutlinedIcon from '@mui/icons-material/WhereToVoteOutlined';
import Paper from '@mui/material/Paper';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import format from 'date-fns/format';
import { toast } from 'react-toastify';
import styles from '../../styles/Table.module.css';

export default function InfoTable(
  { header,
    clients,
    drivers,
    displacements,
    setDetails,
    setOpenModalDetails,
    cars,
    setOpenAddEditClient,
    setOpenAddEditDriver,
    setOpenAddEditCars,
    setOpenAddEditDisplacement,
    setFormEditClient,
    setFormEditDriver,
    setFormEditCar,
    setFormEditDisplacement,
    setTitleModal,
    setOpenModalDelete,
    setSaveId
  }: PropsTable
) {
  async function handleDetailsDisplacement(idDriver: number, idCar: number, idClient: number) {
    try {
      const driver = await api.get(`/Condutor/${idDriver}`);
      const car = await api.get(`/Veiculo/${idCar}`);
      const client = await api.get(`/Cliente/${idClient}`);

      setOpenModalDetails && setOpenModalDetails(true)

      setDetails && setDetails({
        clientName: client.data.nome,
        driverName: driver.data.nome,
        plate: car.data.placa
      });


    } catch (error: any) {
      toast.error(error.response.data);
    }
  }

  async function handleOpenEditClient(id: number) {
    setOpenAddEditClient && setOpenAddEditClient(true);
    setTitleModal && setTitleModal("Editar Cliente");

    setSaveId(id);

    try {
      const client = await api.get(`/Cliente/${id}`);

      setFormEditClient && setFormEditClient({
        name: client.data.nome,
        adress: client.data.logradouro,
        houseNumber: client.data.numero,
        neighborhood: client.data.bairro,
        city: client.data.cidade,
        state: client.data.uf
      });

    } catch (error: any) {
      toast.error(error.response.data);
    }
  }

  async function handleOpenEditCar(id: number) {
    setOpenAddEditCars && setOpenAddEditCars(true);
    setTitleModal && setTitleModal("Editar Veículo");

    setSaveId(id);

    try {
      const car = await api.get(`/Veiculo/${id}`);

      setFormEditCar && setFormEditCar({
        brandModel: car.data.marcaModelo,
        year: car.data.anoFabricacao,
        currentKm: car.data.kmAtual
      })
    } catch (error: any) {
      toast.error(error.response.data);
    }
  }

  async function handleOpenEditDriver(id: number) {
    setOpenAddEditDriver && setOpenAddEditDriver(true);
    setTitleModal && setTitleModal("Editar Condutor");

    setSaveId(id);

    try {
      const driver = await api.get(`/Condutor/${id}`);

      setFormEditDriver && setFormEditDriver({
        category: driver.data.catergoriaHabilitacao,
        expiresIn: driver.data.vencimentoHabilitacao.slice(0, 10)
      })
    } catch (error: any) {
      toast.error(error.response.data);
    }
  }

  async function handleOpenEditDisplacement(id: number, idDriver: number, idCar: number, idClient: number) {
    setOpenAddEditDisplacement && setOpenAddEditDisplacement(true);
    setTitleModal && setTitleModal("Encerrar Deslocamento");

    setSaveId(id);

    try {
      const displacement = await api.get(`/Deslocamento/${id}`);

      setFormEditDisplacement && setFormEditDisplacement({
        finalKm: 0,
        endTripDate: format(new Date(), "yyyy-MM-dd"),
        endTripHours: format(new Date(), "HH:mm"),
        observation: displacement.data.observacao
      });

      const driver = await api.get(`/Condutor/${idDriver}`);
      const car = await api.get(`/Veiculo/${idCar}`);
      const client = await api.get(`/Cliente/${idClient}`);

      setDetails && setDetails({
        clientName: client.data.nome,
        driverName: driver.data.nome,
        plate: car.data.placa
      });

    } catch (error: any) {
      toast.error(error.response.data);
    }
  }

  function handleOpenDeleteModal(id: number) {
    setOpenModalDelete && setOpenModalDelete(true);

    setSaveId(id);
  }

  return (
    <Paper sx={{ width: '100%', overflow: 'hidden', maxHeight: "70%" }}>
      <TableContainer sx={{ height: "100%" }}>
        <Table stickyHeader aria-label="sticky table" >
          <TableHead >
            <TableRow >
              {header?.map((title) => (
                <TableCell
                  key={title.id}
                  align='center'
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
                    <EditIcon
                      className={styles.edit_icon}
                      onClick={() => handleOpenEditClient(client.id)}
                    />
                  </TableCell>
                  <TableCell>
                    <DeleteForeverIcon
                      className={styles.delete_icon}
                      onClick={() => handleOpenDeleteModal(client.id)}
                    />
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
                      <EditIcon
                        className={styles.edit_icon}
                        onClick={() => handleOpenEditDriver(driver.id)}
                      />
                    </TableCell>
                    <TableCell>
                      <DeleteForeverIcon
                        className={styles.delete_icon}
                        onClick={() => handleOpenDeleteModal(driver.id)}
                      />
                    </TableCell>
                  </TableRow>
                )
              })}
            </TableBody>
          }
          {displacements &&
            <TableBody >
              {displacements?.map((info) => {
                const formatDateStart = info.inicioDeslocamento && format(new Date(info.inicioDeslocamento), "dd-MM-yyyy  HH:mm");
                const formatDateEnd = info.fimDeslocamento && format(new Date(info.fimDeslocamento), "dd-MM-yyyy  HH:mm");
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
                    <TableCell>
                      {!formatDateEnd ?
                        <EditLocationOutlinedIcon
                          className={styles.edit_icon}
                          onClick={() => handleOpenEditDisplacement(info.id, info.idCondutor, info.idVeiculo, info.idCliente)}
                        /> :
                        <WhereToVoteOutlinedIcon
                          className={styles.edit_icon}
                          onClick={() => handleDetailsDisplacement(info.idCondutor, info.idVeiculo, info.idCliente)}
                        />
                      }
                    </TableCell>
                    <TableCell>
                      <DeleteForeverIcon
                        className={styles.delete_icon}
                        onClick={() => handleOpenDeleteModal(info.id)}
                      />
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
                    <EditIcon
                      className={styles.edit_icon}
                      onClick={() => handleOpenEditCar(car.id)}
                    />
                  </TableCell>
                  <TableCell>
                    <DeleteForeverIcon
                      className={styles.delete_icon}
                      onClick={() => handleOpenDeleteModal(car.id)}
                    />
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          }
        </Table>
      </TableContainer>
    </Paper>
  );
}