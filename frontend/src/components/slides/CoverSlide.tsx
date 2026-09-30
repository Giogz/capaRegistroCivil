import { useManualStore } from '../../store/useManualStore';
import { ArrowRight } from '../icons';

export function CoverSlide() {
  const goTo = useManualStore((s) => s.goTo);
  const meta = useManualStore((s) => s.data?.meta);

  return (
    <div className="min-h-full grid lg:grid-cols-[1.15fr_.85fr]">
      {/* Columna izquierda */}
      <div className="relative flex flex-col justify-center bg-paper px-6 py-10 sm:px-12 sm:py-16">
        <span className="absolute left-0 top-0 bottom-0 w-2 bg-gradient-to-b from-peru to-peru-deep" />
        <p className="font-mono text-[12.5px] font-bold tracking-[1.4px] text-peru">CAPACITACIÓN TAMPA 2026</p>
        <p className="mt-1.5 text-[14.5px] font-semibold text-ink-2">{meta?.presenta ?? 'Consulado General del Perú en Miami'}</p>

        <h1 className="font-display font-semibold leading-none tracking-[-1px] text-[clamp(30px,5.2vw,54px)] mt-6 mb-1">
          Registros<br />
          <em className="not-italic text-peru italic">Civiles</em>
        </h1>
        <p className="text-[clamp(16px,2.4vw,20px)] font-semibold text-ink mt-3">
          Inscripción de nacimiento, matrimonio y defunción
        </p>
        <p className="mt-4 max-w-[48ch] text-[15.5px] leading-relaxed text-ink-2">
          Guía de referencia para el {meta?.dirigidoA ?? 'Conper Honorario de Tampa'}: el acta manual, las inscripciones
          con sus requisitos, los modelos de expediente y los recordatorios clave, en un solo lugar.
        </p>

        <div className="mt-6 inline-flex max-w-max flex-col rounded-xl border border-line bg-surface px-4 py-3">
          <span className="text-[11px] font-bold uppercase tracking-[.6px] text-ink-3">A cargo del área</span>
          <span className="mt-0.5 text-[15px] font-bold text-ink">Mey Ling Castañeda</span>
        </div>

        <div className="mt-6 flex flex-wrap gap-x-5 gap-y-2.5 text-[12.5px] text-ink-3">
          <span><b className="text-ink-2 font-semibold">Presenta:</b> Consulado de Miami</span>
          <span><b className="text-ink-2 font-semibold">Actualizado:</b> {meta?.actualizado ?? ''}</span>
        </div>

        <button
          onClick={() => goTo(1)}
          className="mt-7 self-start inline-flex items-center gap-2.5 rounded-xl bg-peru px-6 py-3.5 text-[15px] font-bold text-white shadow-[0_8px_22px_rgba(200,16,46,.4)] transition hover:-translate-y-0.5"
        >
          Comenzar <ArrowRight width={18} height={18} strokeWidth={2.2} />
        </button>
      </div>

      {/* Columna derecha: acta / libro de registro */}
      <div className="relative hidden lg:grid place-items-center overflow-hidden border-l border-line px-8 py-10 bg-surface [background-image:repeating-linear-gradient(135deg,var(--surface-2)_0_2px,transparent_2px_22px)]">
        <div className="relative w-[min(320px,80%)] aspect-[1/1.29] rounded-lg border border-line bg-paper p-6 shadow-lg2 -rotate-3 animate-floaty">
          <div className="mb-4 flex items-center gap-2">
            <span className="h-6 w-[18px] rounded-[2px] [background:linear-gradient(90deg,var(--red)_0_33%,#fff_33%_66%,var(--red)_66%_100%)] shadow-[inset_0_0_0_1px_rgba(0,0,0,.14)]" />
            <span className="font-display text-[12px] font-bold tracking-[.3px] text-ink-2">ACTA REGISTRAL</span>
          </div>
          <i className="block h-[8px] w-[64%] rounded bg-surface-2" />
          <div className="mt-3 grid grid-cols-2 gap-2.5">
            <i className="block h-[6px] w-full rounded bg-surface-2" />
            <i className="block h-[6px] w-full rounded bg-surface-2" />
            <i className="block h-[6px] w-[90%] rounded bg-surface-2" />
            <i className="block h-[6px] w-[80%] rounded bg-surface-2" />
            <i className="block h-[6px] w-full rounded bg-surface-2" />
            <i className="block h-[6px] w-[70%] rounded bg-surface-2" />
          </div>
          <div className="mt-4 flex gap-2">
            <span className="grid h-[54px] w-[46px] place-items-center rounded border border-line text-[8px] text-ink-3">HUELLA</span>
            <span className="grid h-[54px] w-[46px] place-items-center rounded border border-line text-[8px] text-ink-3">FIRMA</span>
          </div>
          <div className="absolute bottom-5 right-5 grid h-[76px] w-[76px] -rotate-12 place-items-center rounded-full border-[3px] border-peru text-center text-peru [border-style:double]">
            <div className="font-display text-[10px] font-bold leading-tight">RENIEC<br />PERÚ</div>
          </div>
        </div>
        <div className="absolute bottom-6 font-mono text-[11px] tracking-[.5px] text-ink-3">Nacimiento · Matrimonio · Defunción</div>
      </div>
    </div>
  );
}
