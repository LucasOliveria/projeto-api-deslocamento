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
  setOpenAddEditModal?: Dispatch<SetStateAction<boolean>>
  setTitleModal?: Dispatch<SetStateAction<string>>
  getClients?: () => Promise<void>;
  formEdit?: {
    name: string,
    adress: string,
    houseNumber: string,
    neighborhood: string,
    city: string,
    state: string
  }
  setFormEdit?: Dispatch<SetStateAction<{
    name: string,
    adress: string,
    houseNumber: string,
    neighborhood: string,
    city: string,
    state: string
  }>>
  setSaveId: Dispatch<SetStateAction<number>>
  setOpenModalDelete?: Dispatch<SetStateAction<boolean>>



  drivers?: {
    id: number,
    nome: string,
    numeroHabilitacao: string,
    catergoriaHabilitacao: string,
    vencimentoHabilitacao: string,
  }[]



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
}