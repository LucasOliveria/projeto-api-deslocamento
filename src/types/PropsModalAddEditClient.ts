import { Dispatch, SetStateAction } from "react";

export default interface PropsModalAddEditClient {
  openAddEditClient: boolean
  setOpenAddEditClient: Dispatch<SetStateAction<boolean>>
  titleModal: string
  getClients: () => Promise<void>;
  // clients?: {
  //   id: number,
  //   numeroDocumento: string,
  //   tipoDocumento: string,
  //   nome: string,
  //   logradouro: string,
  //   numero: string,
  //   bairro: string,
  //   cidade: string,
  //   uf: string
  // }[]
  // setClients?: Dispatch<SetStateAction<{
  //   id: number,
  //   numeroDocumento: string,
  //   tipoDocumento: string,
  //   nome: string,
  //   logradouro: string,
  //   numero: string,
  //   bairro: string,
  //   cidade: string,
  //   uf: string
  // }[]>>
  // setClients?: Dispatch<React.SetStateAction<never[]>>
}