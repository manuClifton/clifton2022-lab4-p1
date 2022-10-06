import { Paises } from './paises';

export interface Producto {
    codigo: string;
    descripcion: string;
    precio: number;
    stock: number;
    pais: Paises;
    comestible: true;
}