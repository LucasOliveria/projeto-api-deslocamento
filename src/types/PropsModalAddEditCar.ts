import { Dispatch, SetStateAction } from "react";

export default interface PropsModalAddEditCar {
  openAddEditCars: boolean
  setOpenAddEditCars: Dispatch<SetStateAction<boolean>>
  titleModal: string

  getCars: () => Promise<void>

  formEdit: {
    brandModel: string
    year: number
    currentKm: number
  }
  setFormEdit: Dispatch<SetStateAction<{
    brandModel: string
    year: number
    currentKm: number
  }>>
  saveId: number
}