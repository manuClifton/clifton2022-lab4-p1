import { Paises } from './paises';

export interface Repartidor {
    dni: string;
    nombre: string;
    email: string;
    edad: string;
    capacidadTransporte: number;
    unidadPropia: string;
    nacionalidad: Paises;
}