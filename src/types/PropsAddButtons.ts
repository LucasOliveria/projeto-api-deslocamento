import { Dispatch, SetStateAction } from "react";

export default interface PropsAddButtons {
  setOpenAddEditModal?: Dispatch<SetStateAction<boolean>>
  setTitleModal?: Dispatch<SetStateAction<string>>
}