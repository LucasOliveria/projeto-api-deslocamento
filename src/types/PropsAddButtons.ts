import { Dispatch, SetStateAction } from "react";

export default interface PropsAddButtons {
  setOpenAddEditClient?: Dispatch<SetStateAction<boolean>>
  setOpenAddEditDriver?: Dispatch<SetStateAction<boolean>>
  setOpenAddEditCars?: Dispatch<SetStateAction<boolean>>
  setTitleModal: Dispatch<SetStateAction<string>>
}