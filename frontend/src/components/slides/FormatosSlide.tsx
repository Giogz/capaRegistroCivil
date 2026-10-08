import { useState } from 'react';
import type { ReactNode } from 'react';
import { SlideShell } from './SlideShell';
import ejNacimiento from '../../assets/originales/ej-nacimiento.jpg';
import ejUbigeos from '../../assets/originales/ej-ubigeos.jpg';
import ejMatrimonio from '../../assets/originales/ej-matrimonio.jpg';
import ejDefuncion from '../../assets/originales/ej-defuncion.jpg';

function Ejemplo({ titulo, desc, etiqueta, items }: { titulo: string; desc: string; etiqueta: string; items?: string[] }) {
  return (
    <div className="mx-auto max-w-[760px] rounded-2xl border border-line bg-paper p-5">
      <h3 className="text-[17px] font-bold leading-tight">{titulo}</h3>
      <p className="mt-2 text-[14.5px] leading-relaxed text-ink-2">{desc}</p>
      {items && (
        <ul className="mt-3 flex flex-col gap-1.5">
          {items.map((it, i) => (
            <li key={i} className="flex gap-2 text-[14px] leading-snug text-ink">
              <span className="mt-[7px] h-[6px] w-[6px] flex-none rotate-45 rounded-[2px] bg-peru" />
              <span>{it}</span>
            </li>
          ))}
        </ul>
      )}
      <span className="mt-3 inline-block rounded-full bg-peru-tint px-3 py-1 font-mono text-[13px] font-bold text-peru">
        {etiqueta}
      </span>
    </div>
  );
}

const DOCS: { id: string; label: string; src: string; el: ReactNode }[] = [
  {
    id: 'nacimiento',
    label: 'Nacimiento (acta y file)',
    src: ejNacimiento,
    el: (
      <Ejemplo
        titulo="Inscripción de nacimiento: acta, acta de nacimiento y file"
        desc="Ejemplo completo: el formato de solicitud, el acta de nacimiento del RENIEC ya emitida y el expediente registral (file) con sus documentos de sustento."
        etiqueta="Inscripción · código 1 / 3A"
        items={[
          'Copia del DNI del padre peruano.',
          'Impresión de la ficha RENIEC.',
          'Licencia de conducir o pasaporte del padre extranjero.',
          'Acta de nacimiento de Florida del titular.',
        ]}
      />
    ),
  },
  {
    id: 'ubigeos',
    label: 'Lista de Ubigeos',
    src: ejUbigeos,
    el: (
      <Ejemplo
        titulo="Lista de Ubigeos"
        desc="Tabla de referencia de los códigos de ubicación geográfica (Ubigeo) del RENIEC, que se usan para completar el lugar de registro en las actas e inscripciones."
        etiqueta="Referencia"
      />
    ),
  },
  {
    id: 'matrimonio',
    label: 'Matrimonio (file)',
    src: ejMatrimonio,
    el: (
      <Ejemplo
        titulo="File de inscripción de matrimonio"
        desc="Ejemplo del expediente de una inscripción de matrimonio (una parte peruana y otra extranjera, o ambas peruanas)."
        etiqueta="Inscripción · código 1 / 3A"
      />
    ),
  },
  {
    id: 'defuncion',
    label: 'Defunción (acta y file)',
    src: ejDefuncion,
    el: (
      <Ejemplo
        titulo="Acta e inscripción de defunción"
        desc="Ejemplo del acta de defunción y del expediente de inscripción de defunción de un connacional."
        etiqueta="Inscripción · código 1 / 3A"
      />
    ),
  },
];

export function FormatosSlide() {
  const [doc, setDoc] = useState(0);
  const stop = (e: React.TouchEvent) => e.stopPropagation();

  return (
    <SlideShell
      eyebrow="SECCIÓN 04"
      title="Modelos y ejemplos"
      lead="Ejemplos reales de las actas y expedientes (files) de cada inscripción, con datos de muestra. Elige un documento para verlo."
    >
      <div className="mt-5 flex flex-wrap gap-1.5">
        {DOCS.map((d, i) => (
          <button
            key={d.id}
            onClick={() => setDoc(i)}
            className={`rounded-full border px-3.5 py-2 text-[13px] font-semibold transition ${
              doc === i ? 'border-peru bg-peru text-white' : 'border-line bg-paper text-ink-2 hover:border-line-2'
            }`}
          >
            {d.label}
          </button>
        ))}
      </div>

      <div className="mt-4 pb-3" onTouchStart={stop} onTouchMove={stop} onTouchEnd={stop}>
        {DOCS[doc].el}

        <div className="mx-auto mt-6 max-w-[760px]">
          <details open className="overflow-hidden rounded-xl border border-line bg-paper">
            <summary className="cursor-pointer select-none px-4 py-3 text-sm font-semibold text-ink-2">
              Documento de ejemplo
            </summary>
            <div className="border-t border-line px-4 pb-4 pt-3">
              <img
                src={DOCS[doc].src}
                alt={`Ejemplo: ${DOCS[doc].label}`}
                className="mx-auto w-full rounded-md border border-line shadow-soft"
                loading="lazy"
              />
              <p className="mt-2.5 text-[12.5px] leading-relaxed text-ink-3">
                Documento de referencia con datos de ejemplo.
              </p>
            </div>
          </details>
        </div>
      </div>
    </SlideShell>
  );
}
