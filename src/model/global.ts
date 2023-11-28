import masajes from '../data/masajes.json';
import tarifas from '../data/tarifas.json';


export interface MasajeData {
    titulo: string;
    subtitulo: string;
    resumen: string;
    src: string;
    descripcion: string;
  }
  /**
   * {
      "nombre": "MASAJE RELAJANTE",
      "primerTiempo": "1h",
      "precioPrimerTiempo": "35€",
      "segundoTiempo": "90min",
      "precioSegundoTiempo": "50€",
      "primerBono": "100€",
      "segundoBono": "140€"
    },
   */
  export interface MassagePrice {
    nombre: string;
    primerTiempo: string;
    precioPrimerTiempo: string;
    segundoTiempo: string;
    precioSegundoTiempo: string;
    primerBono: string;
    segundoBono: string;

  }

  

export const masajeTarifa: MassagePrice[] = tarifas;
export const masajeInfo: MasajeData[] = masajes;
