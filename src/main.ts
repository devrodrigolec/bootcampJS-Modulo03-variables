interface Banda {
  nombre: string;
  anio: number;
  activo: boolean;
}

const theBeatles: Banda = {
  nombre: "The Beatles",
  anio: 1960,
  activo: false,
};
const acdc: Banda = {
  nombre: "ACDC",
  anio: 1973,
  activo: true,
};
const queen: Banda = {
  nombre: "Queen",
  anio: 1970,
  activo: false,
};
const theRollingStones: Banda = {
  nombre: "The Rolling Stones",
  anio: 1962,
  activo: true,
};

const Beethoven: Banda = {
  nombre: "Ludwig van Beethoven",
  anio: 1770,
  activo: false,
};

const popRock: string = "🎵 Pop Rock";
const rock: string = "🎸 Rock";
const hardRock: string = "🤘 Hard Rock";
const clasica: string = "🎼 Clásica";

const estiloNombreDeGrupo: string =
  "font-weight: bold; font-size: 18px; background-color: green; padding: 5px 10px; border: 2px dashed black";

/* The Beatles*/

console.log(`%c${theBeatles.nombre}`, estiloNombreDeGrupo);
console.log(`Año: ${theBeatles.anio}`);
console.log(`Activo: ${theBeatles.activo}`);
console.log(`Género: ${popRock}`);

/* Queen */

console.log(`%c${queen.nombre}`, estiloNombreDeGrupo);
console.log(`Año: ${queen.anio}`);
console.log(`Activo: ${queen.activo}`);
console.log(`Género: ${rock}`);

/* AC DC */

console.log(`%c${acdc.nombre}`, estiloNombreDeGrupo);
console.log(`Año: ${acdc.anio}`);
console.log(`Activo: ${acdc.activo}`);
console.log(`Género: ${hardRock}`);

/* Beethoven */

console.log(`%c${Beethoven.nombre}`, estiloNombreDeGrupo);
console.log(`Año: ${Beethoven.anio}`);
console.log(`Activo: ${Beethoven.activo}`);
console.log(`Género: ${clasica}`);

/* The Rolling Stones */

console.log(`%c${theRollingStones.nombre}`, estiloNombreDeGrupo);
console.log(`Año: ${theRollingStones.anio}`);
console.log(`Activo: ${theRollingStones.activo}`);
console.log(`Género: ${rock}`);