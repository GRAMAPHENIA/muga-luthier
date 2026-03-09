import Image from "next/image";
import Link from "next/link";
import PageIntroHeader from "@/components/PageIntroHeader";
import { MagicCard } from "@/components/ui/magic-card";
import { BlurFade } from "@/components/ui/blur-fade";

import LogoApellido from "/public/croquis/herramientas.svg";

export default function Reparaciones() { 
  return (
    <>
      <section id="reparaciones" className="animate w-full grid lg:grid-cols-5 my-2 seamless-grid seamless-grid-no-top">
        <figure className="relative flex flex-col align-middle justify-between p-0 lg:col-start-1 lg:col-end-3 bg-[var(--panel)] border border-[var(--border)] w-full lg:min-h-[320px]">
          <PageIntroHeader
            kicker="Sección"
            title="Reparaciones"
            description="Agendá ajustes, calibraciones y restauraciones para recuperar sonido, tacto y estabilidad."
            className="border-0 bg-transparent p-6 lg:p-10"
          />
          <section className="flex justify-start">
            <Link
              className="detalles mono-ui inline-flex items-center justify-center text-sm text-[var(--text)] text-center w-full max-w-[220px] m-0 px-4 py-3 border border-[var(--border)] border-l-0 border-b-0 hover:bg-[var(--panel-strong)] hover:text-[var(--accent)]"
              href="/reparaciones"
            >
              Ver Servicios
            </Link>
          </section>
        </figure>
        <aside className="flex justify-center align-middle lg:col-start-3 lg:col-end-6 bg-[var(--panel)] border border-[var(--border)] lg:min-h-[320px]">
          <MagicCard
            className="h-full w-full border-0"
            gradientSize={170}
            gradientOpacity={0.12}
            gradientColor="rgba(0, 255, 225, 0.22)"
            gradientFrom="var(--accent)"
            gradientTo="#7c818b"
          >
            <BlurFade inView delay={0.1} offset={12} className="flex h-full items-center justify-center">
              <Image
                width={380}
                height={270}
                src={LogoApellido}
                alt="Logo"
                className="my-8 md:my-10 w-full h-auto max-w-[280px] max-h-[200px] md:max-w-[340px] md:max-h-[240px] lg:max-w-[380px] lg:max-h-[270px] px-6 md:px-8 rotate-90"
              ></Image>
            </BlurFade>
          </MagicCard>
        </aside>
      </section>
    </>
  );
}
