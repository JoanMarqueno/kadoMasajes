import masajes from "../data/masajes.json";

 export interface MasajeData {
    titulo: string;
    subtitulo: string;
    src: string;
    descripcion: string;
}

export const masajeInfo: MasajeData[] = masajes;