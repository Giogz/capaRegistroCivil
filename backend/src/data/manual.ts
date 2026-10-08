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

const NAC_QUIEN: Requisito[] = [
  { texto: '**Quién puede registrar:** el registro lo realiza uno o ambos padres. Si ello fuera comprobadamente imposible, o el menor es huérfano de ambos progenitores, podrán hacerlo los **abuelos**, **hermanos mayores de edad**, **tíos consanguíneos**, o cualquier persona o entidad que tenga al menor bajo su tenencia.' },
  { texto: '**Importante:** el proceso **no puede ser realizado solo por el padre extranjero**. Los menores **adoptados** en el exterior, o hijos de nacionalizados peruanos, **no podrán ser registrados**.' },
  { texto: '**Nietos:** si tiene nietos nacidos en el exterior, también puede solicitarse la **nacionalidad peruana**.' },
];

export const MANUAL: ManualData = {
  meta: {
    actualizado: '08/10/2026',
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
      requisitos: [...NAC_QUIEN, ...NAC_BASE],
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
        { texto: '**Quién lo solicita:** en cualquier momento, el **cónyuge peruano** o un **apoderado** suyo. No puede efectuarse a pedido únicamente del cónyuge extranjero.' },
        { texto: '**Alcance:** no implica una nueva celebración del matrimonio; reconoce el matrimonio **desde su fecha de celebración** ante la autoridad extranjera.' },
        { texto: '**Acta de matrimonio:** del estado de **Florida, Puerto Rico o Islas Vírgenes**, original, expedida en los **últimos 3 meses** y en buenas condiciones, donde se compruebe que uno o ambos cónyuges son peruanos. El acta **queda en los archivos** del consulado. Si el matrimonio ocurrió en otro estado, debe estar **legalizada** por el consulado peruano con jurisdicción sobre dicho estado.' },
        {
          texto: '**Presencia de ambos cónyuges:**',
          sub: [
            'si ambos son peruanos, presentan su DNI;',
            'si uno es extranjero, presenta el documento con el que lo identifican las autoridades del país (con los mismos nombres y apellidos del acta) y el cónyuge peruano presenta su DNI.',
          ],
        },
        { texto: '**De forma individual (solo el cónyuge peruano, con DNI):** también puede hacerlo; debe presentar el documento del cónyuge ausente. El reconocimiento a pedido de la **parte extranjera** se hace por **vía judicial en el Perú**.' },
        { texto: '**Por apoderado:** puede hacerlo un apoderado del (de los) cónyuge(s) peruano(s), con poder otorgado ante notario o cónsul (por escritura pública o fuera de registro) que lo autorice a registrar el matrimonio.' },
        { texto: '**Constitución:** una parte peruana y otra extranjera, o ambas peruanas; **nunca dos extranjeras**. Aún **no se acepta** matrimonio del mismo sexo.' },
        { texto: '**Estado civil:** los peruanos cuyo DNI indique estado civil **"casado"** no podrán registrar su matrimonio hasta **actualizar o rectificar** su estado civil.' },
        { texto: '**Acta Generada de Oficio:** cuando solo una parte inscribe, el acta se genera de oficio; siempre la solicita la parte peruana. La parte extranjera siempre indica dónde nació y cuántos años tiene.' },
      ],
    },
    {
      codigo: '1 / 3A',
      categoria: 'Defunción',
      titulo: 'Inscripción de defunción',
      costo: 'Gratis',
      requisitos: [
        { texto: '**Quién la realiza:** toda persona interesada (peruana o extranjera), en cualquier momento. Puede ser o no familiar del fallecido.' },
        { texto: '**Persona inscrita:** debe ser peruana y contar con acta de nacimiento, libreta electoral y/o DNI. Presentar el **DNI peruano del fallecido**.' },
        { texto: '**Edad:** es la que figura en el **acta de defunción de Florida**, no la que figura en la ficha RENIEC.' },
        { texto: '**Acta de defunción:** del estado de **Florida, Puerto Rico o Islas Vírgenes**, original y en buenas condiciones; **queda en los archivos** del consulado. Si la defunción ocurrió en otro estado, debe estar **legalizada** por el consulado con jurisdicción sobre dicho estado.' },
        { texto: '**Coincidencia de nombres:** los nombres del acta deben coincidir con los del **DNI peruano**. Si lo inscribieron con otro nombre, deben hacer el trámite **A.K.A.** ("also known as", "también conocido como") con la funeraria, para agregar el nombre como figura en el Perú.' },
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
    { color: 'amber', icono: 'swap', titulo: 'Matrimonio', texto: 'Lo solicita el **cónyuge peruano** o su apoderado, nunca solo el extranjero. Nunca **dos partes extranjeras**. Aún **no se acepta** matrimonio del mismo sexo. El DNI "casado" debe regularizarse antes.' },
    { color: 'amber', icono: 'stamp', titulo: 'Actas (original y vigencia)', texto: 'Actas de **Florida, PR o Islas Vírgenes** originales y en buen estado; la de matrimonio, de los **últimos 3 meses**. Quedan en archivos. De otro estado: **legalizadas** por el consulado con jurisdicción; de otro país: **apostilladas** y aprobadas por Cancillería.' },
    { color: 'ok', icono: 'check', titulo: 'Defunción', texto: 'La **edad** es la del acta de defunción de Florida, **no** la de la ficha RENIEC. Si el nombre no coincide con el DNI peruano, hacer el trámite **A.K.A.** con la funeraria.' },
    { color: 'ok', icono: 'cash', titulo: 'Valores', texto: 'La **inscripción** es gratuita (código 1 / 3A). La **copia** de una inscripción cuesta **$6** (USD o soles consulares), código 3.' },
  ],
};
