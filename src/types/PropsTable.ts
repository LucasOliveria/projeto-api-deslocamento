import { Dispatch, SetStateAction } from "react";

export default interface PropsTable {
  header: {
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
  setFormEditClient?: Dispatch<SetStateAction<{
    name: string,
    adress: string,
    houseNumber: string,
    neighborhood: string,
    city: string,
    state: string
  }>>

  drivers?: {
    id: number,
    nome: string,
    numeroHabilitacao: string,
    catergoriaHabilitacao: string,
    vencimentoHabilitacao: string,
  }[]
  setOpenAddEditDriver?: Dispatch<SetStateAction<boolean>>
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
  setOpenAddEditDisplacement?: Dispatch<SetStateAction<boolean>>
  setFormEditDisplacement?: Dispatch<SetStateAction<{
    finalKm: number
    endTripDate: string
    endTripHours: string
    observation: string
  }>>
  setDetails?: Dispatch<SetStateAction<{
    clientName: string
    driverName: string
    plate: string
  }>>
  setOpenModalDetails?: Dispatch<SetStateAction<boolean>>

  cars?: {
    id: number,
    placa: string,
    marcaModelo: string,
    anoFabricacao: number,
    kmAtual: number
  }[]
  setOpenAddEditCars?: Dispatch<SetStateAction<boolean>>
  setFormEditCar?: Dispatch<SetStateAction<{
    brandModel: string
    year: number
    currentKm: number
  }>>

  setTitleModal: Dispatch<SetStateAction<string>>
  setOpenModalDelete: Dispatch<SetStateAction<boolean>>
  setSaveId: Dispatch<SetStateAction<number>>
}