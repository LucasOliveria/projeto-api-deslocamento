import { Dispatch, SetStateAction } from "react";

export default interface PropsModalAddEditClient {
  openAddEditClient: boolean
  setOpenAddEditClient: Dispatch<SetStateAction<boolean>>
  titleModal: string
  getClients: () => Promise<void>
  formEdit: {
    name: string,
    adress: string,
    houseNumber: string,
    neighborhood: string,
    city: string,
    state: string
  }
  setFormEdit: Dispatch<SetStateAction<{
    name: string,
    adress: string,
    houseNumber: string,
    neighborhood: string,
    city: string,
    state: string
  }>>
  saveId: number
}