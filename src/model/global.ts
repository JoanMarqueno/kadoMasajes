import masajes from '../data/masajes.json';
import tarifas from '../data/tarifas.json';


export interface MasajeData {
    titulo: string;
    recomendado: boolean;
    subtitulo: string;
    resumen: string;
    src: string;
    descripcion: string;
  }

  export interface MassagePrice {
    nombre: string;
    primerTiempo?: string | null;
    precioPrimerTiempo?: string | null;
    segundoTiempo: string;
    precioSegundoTiempo: string;
    primerBono?: string | null;
    segundoBono: string;

  }

  

export const masajeTarifa: MassagePrice[] = tarifas;
export const masajeInfo: MasajeData[] = masajes;
