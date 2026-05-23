import { createFileRoute, Link } from '@tanstack/react-router'
import { SectionHead } from '../components/ui/SectionHead'
import { Img } from '../components/ui/Img'
import { Reveal } from '../components/ui/Reveal'
import { PHOTOS } from '../data/photos'

export const Route = createFileRoute('/sobre')({
  component: PageSobre,
})

// ─── Data ────────────────────────────────────────────────────────────────────

const PASSOS = [
  {
    num: '01',
    t: 'me conta sua ideia',
    d: 'Preenche o formulário com o tipo de sessão e qualquer coisa que você já tenha imaginado pro dia.',
  },
  {
    num: '02',
    t: 'a gente ajusta os detalhes',
    d: 'Te chamo no WhatsApp em até 24h pra falarmos de data, locação e o que faz sentido pra você.',
  },
  {
    num: '03',
    t: 'reservamos a data',
    d: 'Fechamos tudo por contrato — data, valor, entregáveis. Sem surpresa depois.',
  },
  {
    num: '04',
    t: 'o dia da sessão',
    d: 'Você só precisa aparecer e ser você. Da luz e do enquadramento, eu cuido.',
  },
  {
    num: '05',
    t: 'escolhemos juntos',
    d: 'Apresento uma pré-seleção tratada e a gente escolhe as fotos finais juntos. Você participa da curadoria.',
  },
  {
    num: '06',
    t: 'entrega',
    d: 'As fotos finalizadas chegam em até 15 dias após o dia da sessão.',
  },
]

// ─── SobreQuem ───────────────────────────────────────────────────────────────

function SobreQuem() {
  return (
    <section className="section-y">
      <style>{`
        .sobre-quem-grid {
          display: grid;
          grid-template-columns: 1fr;
          gap: 32px;
        }
        @media (min-width: 900px) {
          .sobre-quem-grid {
            grid-template-columns: minmax(0, 0.85fr) minmax(0, 1.15fr);
            gap: 64px;
            align-items: center;
          }
        }
        .sobre-texto p {
          font-size: 17px;
          line-height: 1.75;
          color: var(--color-ink-soft);
        }
      `}</style>

      <div className="container">
        <div className="sobre-quem-grid">
          {/* Foto esquerda */}
          <Reveal>
            <div className="img-wrap ratio-4-5">
              {/* TODO: substituir por foto colorida do Pedro em ambiente (Cloudinary) */}
              <Img src={PHOTOS.pedro} alt="Pedro Mendonça em ambiente, luz natural no Rio" />
            </div>
          </Reveal>

          {/* Texto direita */}
          <Reveal>
            <div className="sobre-texto">
              <div className="pre-title" style={{ marginBottom: 14 }}>
                Quem eu sou
              </div>
              <h1
                className="font-display"
                style={{ fontSize: 'clamp(40px, 5.6vw, 72px)', lineHeight: 1.02, margin: 0 }}
              >
                a vida não espera.
                <br />
                a foto não esquece.
              </h1>
              <div style={{ marginTop: 32, maxWidth: 540 }}>
                <p style={{ marginBottom: 18 }}>
                  A vida acontece de forma espontânea. Os momentos mais marcantes acontecem sem ser
                  milimetricamente programados, e é justamente nesse fato que encontro a beleza
                  deles. Pra ser bom fotógrafo, é preciso ser bom observador — uma foto boa não
                  precisa estar tecnicamente perfeita, ela precisa te transportar pro momento.
                </p>
                <p style={{ margin: 0 }}>
                  O que busco é o sorriso que sai por algo sussurrado ao pé do ouvido, o brilho no
                  olhar diante de uma paisagem, tudo que surge do acaso e traz consigo sentimento.
                  Por isso escolhi a fotografia, e me dedico todos os dias pra estar pronto quando
                  a emoção aparece.
                </p>
              </div>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  )
}

// ─── SobreComo ───────────────────────────────────────────────────────────────

function SobreComo() {
  return (
    <section className="sobre-como">
      <style>{`
        .sobre-como {
          padding-block: 0 var(--section-y-mobile);
        }
        @media (min-width: 768px) {
          .sobre-como {
            padding-block: calc(var(--section-y-desktop) - 40px) var(--section-y-desktop);
          }
        }
        .passos-grid {
          display: grid;
          grid-template-columns: 1fr;
          gap: 40px;
          margin-top: 56px;
        }
        @media (min-width: 768px) {
          .passos-grid {
            grid-template-columns: repeat(2, 1fr);
            gap: 48px 64px;
          }
        }
        .passo-num {
          font-family: var(--font-display);
          font-size: clamp(52px, 5vw, 64px);
          color: var(--color-caramel);
          line-height: 1;
          margin-bottom: 12px;
        }
        .passo-title {
          font-size: 22px;
          margin: 0 0 10px;
          line-height: 1.15;
        }
        @media (min-width: 768px) {
          .passo-title {
            font-size: 24px;
          }
        }
      `}</style>

      <div className="container">
        <Reveal>
          <SectionHead
            pre="O caminho"
            title="como funciona"
            subtitle="Do primeiro contato à entrega das fotos, sem mistério."
            maxWidth={520}
          />
        </Reveal>

        <div className="passos-grid">
          {PASSOS.map((passo, i) => (
            <Reveal key={passo.num} delay={i * 60}>
              <div style={{ display: 'flex', flexDirection: 'column' }}>
                <div className="passo-num">{passo.num}</div>
                <h3 className="font-display passo-title">{passo.t}</h3>
                <p
                  style={{
                    fontSize: 15,
                    lineHeight: 1.6,
                    color: 'var(--color-ink-soft)',
                    margin: 0,
                    maxWidth: '38ch',
                  }}
                >
                  {passo.d}
                </p>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  )
}

// ─── SobreCta ────────────────────────────────────────────────────────────────

function SobreCta() {
  return (
    <section className="sobre-cta">
      <style>{`
        .sobre-cta {
          padding-block: var(--section-y-mobile) calc(var(--section-y-mobile) - 16px);
          padding-inline: var(--pad-x-mobile);
          text-align: center;
          border-top: 1px solid var(--color-ink-faint);
        }
        @media (min-width: 768px) {
          .sobre-cta {
            padding-block: var(--section-y-desktop) calc(var(--section-y-desktop) - 16px);
            padding-inline: var(--pad-x-desktop);
          }
        }
        .sobre-cta__btn-wrap {
          display: flex;
          justify-content: center;
          margin-top: 32px;
        }
      `}</style>

      <Reveal>
        <SectionHead pre="Vamos marcar?" title="bora fotografar" align="center" />
        <div className="sobre-cta__btn-wrap">
          <Link to="/contato" className="btn">
            Quero fotografar com você <span aria-hidden="true">→</span>
          </Link>
        </div>
      </Reveal>
    </section>
  )
}

// ─── PageSobre ───────────────────────────────────────────────────────────────

function PageSobre() {
  return (
    <main>
      <SobreQuem />
      <SobreComo />
      <SobreCta />
    </main>
  )
}
