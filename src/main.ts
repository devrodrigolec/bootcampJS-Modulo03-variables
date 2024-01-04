interface GrupoMusical {
  nombreGrupoMusical: string | null;
  compositor: string | null
  anio: number;
  activo: boolean;
}

const theBeatles: GrupoMusical = {
  nombreGrupoMusical: "The Beatles",
  compositor: null,
  anio: 1960,
  activo: false,
};
const acdc: GrupoMusical = {
  nombreGrupoMusical: "ACDC",
  compositor: null,
  anio: 1973,
  activo: true,
};
const queen: GrupoMusical = {
  nombreGrupoMusical: "Queen",
  compositor: null,
  anio: 1970,
  activo: false,
};
const theRollingStones: GrupoMusical = {
  nombreGrupoMusical: "The Rolling Stones",
  compositor: null,
  anio: 1962,
  activo: true,
};

const Beethoven: GrupoMusical = {
  nombreGrupoMusical: null,
  compositor: "Ludwig van Beethoven",
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

console.log(`%c${theBeatles.nombreGrupoMusical}`, estiloNombreDeGrupo);
console.log(`Año: ${theBeatles.anio}`);
console.log(`Activo: ${theBeatles.activo}`);
console.log(`Género: ${popRock}`);

/* Queen */

console.log(`%c${queen.nombreGrupoMusical}`, estiloNombreDeGrupo);
console.log(`Año: ${queen.anio}`);
console.log(`Activo: ${queen.activo}`);
console.log(`Género: ${rock}`);

/* AC DC */

console.log(`%c${acdc.nombreGrupoMusical}`, estiloNombreDeGrupo);
console.log(`Año: ${acdc.anio}`);
console.log(`Activo: ${acdc.activo}`);
console.log(`Género: ${hardRock}`);

/* Beethoven */

console.log(`%c${Beethoven.compositor}`, estiloNombreDeGrupo);
console.log(`Año: ${Beethoven.anio}`);
console.log(`Activo: ${Beethoven.activo}`);
console.log(`Género: ${clasica}`);

/* The Rolling Stones */

console.log(`%c${theRollingStones.nombreGrupoMusical}`, estiloNombreDeGrupo);
console.log(`Año: ${theRollingStones.anio}`);
console.log(`Activo: ${theRollingStones.activo}`);
console.log(`Género: ${rock}`);