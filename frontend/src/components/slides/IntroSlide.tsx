import { SlideShell } from './SlideShell';

const FUNCIONES = [
  'Asiste al cónsul en la inscripción de nacimiento, matrimonio y defunción de connacionales en el exterior, emitiendo los autoadhesivos consulares (código 1 y 3A) de valor 0 por la inscripción.',
  'Provee copias de las inscripciones de nacimiento, matrimonio y defunción (código 3, valor $6 en USD o soles consulares).',
  'Maneja el archivo digital y físico de cada inscripción: el acta según el caso (en su mayoría acta de Florida), la solicitud de inscripción y los documentos de sustento (ficha RENIEC, copia de DNI o documento extranjero requerido).',
];

export function IntroSlide() {
  return (
    <SlideShell
      eyebrow="SECCIÓN 01"
      title="El área de Registro Civil"
      lead="Qué hace el área y qué es un acta manual, antes de entrar a las inscripciones."
    >
      <div className="mt-6 rounded-2xl border border-line bg-paper p-5">
        <h3 className="text-[15px] font-bold tracking-[.2px] text-ink">Funciones del funcionario del área</h3>
        <ul className="mt-3 flex flex-col gap-3">
          {FUNCIONES.map((f, i) => (
            <li key={i} className="flex gap-3 text-[14.5px] leading-relaxed text-ink-2">
              <span className="mt-[7px] h-[7px] w-[7px] flex-none rotate-45 rounded-[2px] bg-peru" />
              <span>{f}</span>
            </li>
          ))}
        </ul>
      </div>

      <div className="mt-4 rounded-2xl border border-peru bg-peru-tint p-5">
        <h3 className="text-[15px] font-bold tracking-[.2px] text-peru">¿Qué es el acta manual?</h3>
        <p className="mt-2 text-[14.5px] leading-relaxed text-ink">
          Acta registral emitida en formatos preimpresos diseñados, impresos y distribuidos por el RENIEC, que son
          llenados a mano por el registrador civil y constan de dos ejemplares de igual valor y número. Solo se emplea
          en oficinas que aún no están automatizadas, o en casos de emergencia como contingencia.
        </p>
      </div>
    </SlideShell>
  );
}
