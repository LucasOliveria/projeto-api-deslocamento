import { Dispatch, SetStateAction } from "react";

export default interface PropsModalAddEditDisplacement {
  openAddEditDisplacement: boolean
  setOpenAddEditDisplacement: Dispatch<SetStateAction<boolean>>
  titleModal: string

  getDisplacements: () => Promise<void>

  formEdit: {
    finalKm: string
    endTripDate: string
    endTripHours: string
    observation: string
  }
  setFormEdit: Dispatch<SetStateAction<{
    finalKm: string
    endTripDate: string
    endTripHours: string
    observation: string
  }>>
  saveId: number
}