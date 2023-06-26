import { Dispatch, SetStateAction } from "react";

export default interface PropsCustomButtonOpen {
  setOpenAddEditClient?: Dispatch<SetStateAction<boolean>>
  setOpenAddEditDriver?: Dispatch<SetStateAction<boolean>>
  setOpenAddEditCars?: Dispatch<SetStateAction<boolean>>
  setOpenAddEditDisplacement?: Dispatch<SetStateAction<boolean>>
  setTitleModal: Dispatch<SetStateAction<string>>
}