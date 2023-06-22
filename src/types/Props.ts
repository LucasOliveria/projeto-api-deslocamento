// import { Dispatch, SetStateAction } from "react";

export default interface Props {
    valueNav?: number
    header?: {
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
    drivers?: {
        id: number,
        nome: string,
        numeroHabilitacao: string,
        catergoriaHabilitacao: string,
        vencimentoHabilitacao: string,
    }[]
}