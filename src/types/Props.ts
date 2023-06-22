import { Dispatch, SetStateAction } from "react";

export default interface Props {
    valueNav: number
    setValueNav?: Dispatch<SetStateAction<number>>
}