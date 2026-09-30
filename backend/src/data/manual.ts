import type { ManualData, Requisito } from '../types';

const NAC_BASE: Requisito[] = [
  { texto: '**Solicitantes (padres):** Solicitante 1, de preferencia la madre; Solicitante 2, de preferencia el padre.' },
  { texto: '**Parte peruana:** DNI del padre o de la madre. Los nombres del registro deben coincidir con la ficha RENIEC; no usar nombres "americanos", sobre todo en madres con apellido o nombre cambiado.' },
  { texto: '**Parte extranjera:** licencia de conducir o pasaporte del padre o madre extranjero.' },
  {
    texto: '**Datos del titular (menor):**',
    sub: [
      'apellido del padre primero y luego el de la madre, según la ley peruana;',
      'nombre tal como figura en su partida de nacimiento;',
      'sexo según su acta de nacimiento;',
      'fecha de nacimiento (día, mes y año);',
      'lugar y hora de nacimiento: el nombre del hospital y la hora (por lo general en hora militar del acta);',
      'dirección del hospital donde nació (se obtiene de internet o de la declaración jurada del padre o madre).',
    ],
  },
  { texto: '**Datos del padre y de la madre:** el padre peruano con su DNI; el padre extranjero, indicar su edad y el estado de nacimiento junto a su nombre y nacionalidad.' },
  { texto: '**Firma y huella:** la parte peruana firma como en su DNI; el extranjero firma según quién llena la solicitud (Solicitante 1 y 2). Huella del índice derecho dentro del recuadro (si no tiene índice derecho, usar el izquierdo). Indicar la fecha (día, mes y año).' },
  {
    texto: '**Expediente registral (documentos a emitir):**',
    sub: [
      'copia del DNI del padre peruano;',
      'impresión de la ficha RENIEC;',
      'licencia de conducir o pasaporte del padre extranjero;',
      'acta de nacimiento de Florida del titular. Si no es de Florida, debe estar legalizada por el estado que corresponda según la jurisdicción; si es de fuera del país, debe estar apostillada y enviarse por correo a Cancillería para su aprobación previa, con el file de los padres adjunto.',
    ],
  },
];

export const MANUAL: ManualData = {
  meta: {
    actualizado: '23/09/2026',
    presenta: 'Consulado General del Perú en Miami',
    dirigidoA: 'Conper Honorario de Tampa',
  },

  tarifas: [
    { grupo: 'Inscripción', codigo: '1 / 3A', descripcion: 'Inscripción de nacimiento, matrimonio o defunción (autoadhesivo consular)', costo: 'Gratis' },
    { grupo: 'Copias', codigo: '3', descripcion: 'Copia de inscripción (nacimiento, matrimonio o defunción); en USD o su equivalente en soles consulares', costo: '$6' },
  ],

  tramites: [
    {
      codigo: '1 / 3A',
      categoria: 'Nacimiento',
      titulo: 'Inscripción de nacimiento (menor de edad)',
      costo: 'Gratis',
      requisitos: NAC_BASE,
    },
    {
      codigo: '1 / 3A',
      categoria: 'Nacimiento',
      titulo: 'Inscripción de nacimiento (mayor de edad)',
      costo: 'Gratis',
      requisitos: [
        ...NAC_BASE,
        { texto: '**Adicional:** el titular mayor de edad presenta su licencia de conducir.' },
      ],
    },
    {
      codigo: '1 / 3A',
      categoria: 'Nacimiento',
      titulo: 'Inscripción de nacimiento (mayor de edad con poder)',
      costo: 'Gratis',
      requisitos: [
        ...NAC_BASE,
        { texto: '**Adicional:** el trámite se realiza mediante poder; el apoderado presenta el poder correspondiente.' },
      ],
    },
    {
      codigo: '1 / 3A',
      categoria: 'Matrimonio',
      titulo: 'Inscripción de matrimonio',
      costo: 'Gratis',
      requisitos: [
        { texto: '**Partes:** debe estar constituido por una parte peruana y otra extranjera, o por ambas partes peruanas. Nunca por dos partes extranjeras.' },
        { texto: '**Presencia:** de preferencia vienen ambos, esposo y esposa. Aún no se acepta matrimonio del mismo sexo.' },
        { texto: '**Si solo una parte inscribe:** se genera como **Acta Generada de Oficio**; siempre es la parte peruana quien solicita.' },
        { texto: '**Solicitante 1 (la cónyuge, esposa):** peruana (se identifica como en su DNI) o extranjera (licencia de conducir o pasaporte). La parte peruana debe figurar como **soltera o divorciada** en el registro RENIEC.' },
        { texto: '**Estado civil:** si la parte peruana aparece como casada de un matrimonio anterior, no se puede hacer el registro; primero debe regularizar su estatus en el DNI (pasar a divorciada o viuda, según el caso).' },
        { texto: '**Parte extranjera:** siempre indicar dónde nació y cuántos años tiene.' },
        { texto: '**Solicitante 2 (el cónyuge, esposo):** peruano (se identifica como en su DNI) o extranjero (licencia de conducir o pasaporte, indicando lugar de nacimiento y edad).' },
      ],
    },
    {
      codigo: '1 / 3A',
      categoria: 'Defunción',
      titulo: 'Inscripción de defunción',
      costo: 'Gratis',
      requisitos: [
        { texto: '**Persona inscrita:** debe ser peruana y contar con acta de nacimiento, libreta electoral y/o DNI.' },
        { texto: '**Quien inscribe:** puede ser o no peruana, y puede ser o no familiar del fallecido.' },
        { texto: '**Edad:** es la que figura en el acta de defunción de Florida.' },
        { texto: '**Coincidencia:** el acta debe coincidir con el nombre de la persona peruana.' },
        { texto: '**Padres:** indicar el primer nombre y apellido del padre y de la madre del fallecido.' },
      ],
    },
    {
      codigo: '3',
      categoria: 'Copias',
      titulo: 'Copia de inscripción',
      costo: '$6',
      requisitos: [
        { texto: '**Requisito:** identificarse; se emite la copia de la inscripción de nacimiento, matrimonio o defunción ya registrada.' },
        { texto: '**Valor:** $6 (USD o su equivalente en soles consulares), código 3.' },
      ],
    },
  ],

  recordatorios: [
    { color: 'red', icono: 'id', titulo: 'Apellidos y nombres', texto: 'Apellido del **padre primero** y luego el de la **madre** (ley peruana). Los nombres deben coincidir con la **ficha RENIEC**; no usar nombres "americanos".' },
    { color: 'red', icono: 'sign', titulo: 'Firma y huella', texto: 'La parte peruana firma **como en su DNI**. Huella del **índice derecho** en el recuadro; si no tiene, usar el **izquierdo**.' },
    { color: 'amber', icono: 'swap', titulo: 'Matrimonio', texto: 'Nunca **dos partes extranjeras**: siempre una parte peruana. Aún **no se acepta** matrimonio del mismo sexo. La parte peruana debe figurar **soltera o divorciada** en RENIEC.' },
    { color: 'amber', icono: 'stamp', titulo: 'Actas de otros estados o países', texto: 'Actas fuera de **Florida**: legalizadas por el estado que corresponda. Fuera del **país**: apostilladas y enviadas por correo a **Cancillería** para aprobación previa (con el file de los padres).' },
    { color: 'ok', icono: 'check', titulo: 'Defunción', texto: 'La persona **inscrita** debe ser peruana. La **edad** es la que figura en el acta de defunción de Florida; indicar los **padres** del fallecido.' },
    { color: 'ok', icono: 'cash', titulo: 'Valores', texto: 'La **inscripción** es gratuita (código 1 / 3A). La **copia** de una inscripción cuesta **$6** (USD o soles consulares), código 3.' },
  ],
};
