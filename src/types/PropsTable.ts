import { Dispatch, SetStateAction } from "react";

export default interface PropsTable {
  header?: {
    id: number,
    label: string
  }[]



  clients?: {
    id: number,
    numeroDocumento: string,
    tipoDocumento: string,
    nome: string,
    logradouro: string,
    numero: string,
    bairro: string,
    cidade: string,
    uf: string
  }[]
  setOpenAddEditClient?: Dispatch<SetStateAction<boolean>>
  getClients?: () => Promise<void>;
  setFormEditClient?: Dispatch<SetStateAction<{
    name: string,
    adress: string,
    houseNumber: string,
    neighborhood: string,
    city: string,
    state: string
  }>>
  setOpenModalDelete?: Dispatch<SetStateAction<boolean>>



  drivers?: {
    id: number,
    nome: string,
    numeroHabilitacao: string,
    catergoriaHabilitacao: string,
    vencimentoHabilitacao: string,
  }[]
  setOpenAddEditDriver?: Dispatch<SetStateAction<boolean>>
  getDrivers?: () => Promise<void>;
  setFormEditDriver?: Dispatch<SetStateAction<{
    category: string
    expiresIn: string
  }>>



  displacements?: {
    id: number,
    kmInicial: number,
    kmFinal: number,
    inicioDeslocamento: string,
    fimDeslocamento: string,
    checkList: string,
    motivo: string,
    observacao: string,
    idCondutor: number,
    idVeiculo: number,
    idCliente: number
  }[]
  setDetails?: Dispatch<SetStateAction<{
    clientName: string
    driverName: string
    plate: string
  }>>
  setOpen?: Dispatch<SetStateAction<boolean>>



  cars?: {
    id: number,
    placa: string,
    marcaModelo: string,
    anoFabricacao: number,
    kmAtual: number
  }[]


  setTitleModal?: Dispatch<SetStateAction<string>>
  setSaveId: Dispatch<SetStateAction<number>>
}