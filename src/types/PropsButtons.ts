import { Dispatch, SetStateAction } from "react";

export default interface PropsButtons {
    title: string,
    setOpen?: Dispatch<SetStateAction<boolean>>
}