import { Dispatch, SetStateAction } from "react";

export default interface PropsModalAddEditDriver {
  openAddEditDriver: boolean
  setOpenAddEditDriver: Dispatch<SetStateAction<boolean>>
  titleModal: string

  getDrivers: () => Promise<void>

  formEdit: {
    category: string
    expiresIn: string
  }

  setFormEdit: Dispatch<SetStateAction<{
    category: string
    expiresIn: string
  }>>

  saveId: number
}