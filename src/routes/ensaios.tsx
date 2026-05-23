import { useState, useRef } from 'react'
import { createFileRoute, Link } from '@tanstack/react-router'
import { SectionHead } from '../components/ui/SectionHead'
import { Reveal } from '../components/ui/Reveal'
import { PHOTOS } from '../data/photos'

export const Route = createFileRoute('/ensaios')({
  component: PageEnsaios,
})

// ─── Types ───────────────────────────────────────────────────────────────────

type Foto = { src: string; cliente: string; local: string }

type Ensaio = {
  id: 'retratos' | 'casais' | 'marcas'
  tag: string
  title: string
  preco: string
  descricao: string
  inclui: string[]
  cta: string
  fotos: Foto[]
}

// ─── Data ────────────────────────────────────────────────────────────────────

const ENSAIOS_DATA: Ensaio[] = [
  {
    id: 'retratos',
    tag: 'Presença · Autenticidade · Olhar',
    title: 'retratos',
    preco: 'R$ 450',
    descricao:
      'Sessões individuais ao ar livre, em uma paisagem do Rio que converse com você e com a sua ideia. A gente caminha, conversa, e vai entendendo junto como você se encaixa naquele cenário, porque o Rio reserva algo único pra cada dia, cada horário. O resultado é a união entre você e a cidade.',
    inclui: [
      '1h de sessão',
      '1 locação',
      '30 fotos pré-seleção',
      '15 fotos finais editadas',
      'Entrega em até 15 dias',
    ],
    cta: 'Quero uma sessão de retratos',
    fotos: [
      // TODO: substituir por foto Cloudinary do Pedro
      { src: PHOTOS.retrato1, cliente: 'Marina', local: 'Parque Lage' },
      { src: PHOTOS.retrato2, cliente: 'Ana', local: 'Pedra do Sal' },
      { src: PHOTOS.retrato3, cliente: 'Júlia', local: 'Mirante Dona Marta' },
      { src: PHOTOS.retrato4, cliente: 'Bia', local: 'Praia Vermelha' },
      { src: PHOTOS.retrato5, cliente: 'Letícia', local: 'Floresta da Tijuca' },
    ],
  },
  {
    id: 'casais',
    tag: 'Cumplicidade · Toque · Afeto',
    title: 'casais',
    preco: 'R$ 450',
    descricao:
      'Um momento real entre vocês em um lugar do Rio escolhido com cuidado pra dialogar com a história do casal. Durante uma hora e meia, fico atento às interações de vocês, pra registrar o sentimento que envolve a relação. Prefiro trabalhar no início da manhã, quando a luz do Rio é mais bonita pra esse tipo de sessão. As fotos ajudam a reviver esse momento sempre que quiserem.',
    inclui: [
      '1h30 de sessão',
      '1 locação',
      '30 fotos pré-seleção',
      '15 fotos finais editadas',
      'Entrega em até 15 dias',
    ],
    cta: 'Quero uma sessão de casal',
    fotos: [
      // TODO: substituir por foto Cloudinary do Pedro
      { src: PHOTOS.casal1, cliente: 'Manu & Rafa', local: 'Arpoador' },
      { src: PHOTOS.casal2, cliente: 'Lara & João', local: 'Urca' },
      { src: PHOTOS.casal3, cliente: 'Bia & Pedro', local: 'Lagoa Rodrigo de Freitas' },
      { src: PHOTOS.casal4, cliente: 'Carol & Felipe', local: 'Jardim Botânico' },
      { src: PHOTOS.casal5, cliente: 'Marina & Lucas', local: 'Praia Vermelha' },
    ],
  },
  {
    id: 'marcas',
    tag: 'Movimento · Ritmo · Energia',
    title: 'marcas · esporte & saúde',
    preco: 'sob consulta',
    descricao:
      'Cobertura de ativações de marca, eventos esportivos e ações voltadas para saúde e bem-estar. Cada foto traduz em imagem o que aquela experiência teve de melhor, o que a marca defende e o que o público viveu. É o que mantém o evento vivo depois que ele acaba, e o que posiciona quem fez acontecer.',
    inclui: [
      'Cobertura de evento ou ativação',
      'Briefing prévio alinhado à marca',
      'Pacote de imagens em alta',
      'Entrega ágil para divulgação',
    ],
    cta: 'Quero falar sobre um evento',
    fotos: [
      // TODO: substituir por foto Cloudinary do Pedro
      { src: PHOTOS.marca1, cliente: 'BT Experience', local: 'Praia de Copacabana' },
      { src: PHOTOS.marca2, cliente: 'Brand X', local: 'Aterro do Flamengo' },
      { src: PHOTOS.marca3, cliente: 'Run Series', local: 'Lagoa' },
      { src: PHOTOS.marca4, cliente: 'Wellness Day', local: 'Parque Madureira' },
      { src: PHOTOS.marca5, cliente: 'Beach Tour', local: 'Barra da Tijuca' },
    ],
  },
]

// ─── Carousel ────────────────────────────────────────────────────────────────

function Carousel({ fotos, blockId }: { fotos: Foto[]; blockId: string }) {
  const [current, setCurrent] = useState(0)
  const touchStartX = useRef<number | null>(null)

  function goTo(i: number) {
    setCurrent(Math.max(0, Math.min(i, fotos.length - 1)))
  }

  const foto = fotos[current]
  const atStart = current === 0
  const atEnd = current === fotos.length - 1

  return (
    <div>
      <style>{`
        .carousel-wrap {
          position: relative;
          aspect-ratio: 4 / 5;
          overflow: hidden;
          background: var(--color-ink);
        }
        .carousel-img {
          position: absolute;
          top: 0; left: 0; right: 0; bottom: 0;
          width: 100%; height: 100%;
          object-fit: cover;
          transition: opacity 350ms ease;
        }
        .carousel-btn {
          position: absolute;
          top: 50%;
          transform: translateY(-50%);
          width: 44px;
          height: 44px;
          background: rgba(250,247,242,0.86);
          color: var(--color-ink);
          border: none;
          border-radius: 50%;
          cursor: pointer;
          font-size: 18px;
          display: flex;
          align-items: center;
          justify-content: center;
          transition: background 0.18s ease, transform 0.18s ease;
          z-index: 2;
          line-height: 1;
        }
        .carousel-btn:hover:not(:disabled) {
          background: var(--color-cream);
          transform: translateY(-50%) scale(1.05);
        }
        .carousel-btn:disabled {
          opacity: 0.3;
          cursor: default;
        }
        .carousel-btn--prev { left: 12px; }
        .carousel-btn--next { right: 12px; }
      `}</style>

      <div
        id={`carousel-${blockId}`}
        className="carousel-wrap"
        onTouchStart={(e) => {
          touchStartX.current = e.touches[0].clientX
        }}
        onTouchEnd={(e) => {
          if (touchStartX.current === null) return
          const delta = touchStartX.current - e.changedTouches[0].clientX
          if (Math.abs(delta) > 50) goTo(current + (delta > 0 ? 1 : -1))
          touchStartX.current = null
        }}
      >
        {fotos.map((f, i) => (
          <img
            key={i}
            src={f.src}
            alt={`${f.cliente} — ${f.local}`}
            className="carousel-img"
            style={{ opacity: i === current ? 1 : 0 }}
            loading="lazy"
          />
        ))}

        <button
          className="carousel-btn carousel-btn--prev"
          onClick={() => goTo(current - 1)}
          disabled={atStart}
          aria-label="Foto anterior"
        >
          &#9664;
        </button>

        <button
          className="carousel-btn carousel-btn--next"
          onClick={() => goTo(current + 1)}
          disabled={atEnd}
          aria-label="Próxima foto"
        >
          &#9654;
        </button>
      </div>

      <div style={{ display: 'flex', justifyContent: 'space-between', paddingTop: 12 }}>
        <span style={{ fontSize: 12, color: 'var(--color-ink-soft)' }}>
          {foto.cliente} · {foto.local}
        </span>
        <span style={{ fontSize: 12, color: 'var(--color-ink-mute)' }}>4:5</span>
      </div>
    </div>
  )
}

// ─── EnsaioBlock ─────────────────────────────────────────────────────────────

function EnsaioBlock({ ensaio, index }: { ensaio: Ensaio; index: number }) {
  return (
    <section className="section-y" id={ensaio.id} data-index={index}>
      <style>{`
        .ensaio-block-grid {
          display: grid;
          grid-template-columns: 1fr;
          gap: 32px;
        }
        @media (min-width: 900px) {
          .ensaio-block-grid {
            grid-template-columns: minmax(0, 1fr) minmax(0, 1.1fr);
            gap: 64px;
            align-items: start;
          }
        }
        .ensaio-card {
          padding: 32px;
          border-left: 3px solid var(--color-caramel);
        }
        @media (min-width: 900px) {
          .ensaio-card {
            position: sticky;
            top: calc(var(--header-h) + 32px);
          }
        }
        .ensaio-card ul {
          list-style: none;
          padding: 0;
          margin: 0 0 32px;
        }
        .ensaio-card li {
          font-size: 15px;
          line-height: 1.6;
          padding-left: 20px;
          position: relative;
          color: var(--color-ink-soft);
          margin-bottom: 8px;
        }
        .ensaio-card li::before {
          position: absolute;
          left: 0;
          top: 0;
          content: '·';
          color: var(--color-caramel);
          font-weight: 700;
          font-size: 20px;
        }
        .ensaio-inclui-title {
          font-size: 14px;
          font-weight: 600;
          letter-spacing: 0.04em;
          text-transform: uppercase;
          color: var(--color-ink);
          margin-bottom: 16px;
        }
      `}</style>

      <div className="container">
        <div className="ensaio-block-grid">
          {/* Card esquerda */}
          <div className="ensaio-card">
            <Reveal>
              <div className="pre-title" style={{ marginBottom: 16 }}>
                {ensaio.tag}
              </div>
              <h2
                className="font-display"
                style={{ fontSize: 'clamp(40px, 5vw, 64px)', margin: '0 0 8px', lineHeight: 0.95 }}
              >
                {ensaio.title}
              </h2>
              <div style={{ fontSize: 18, fontWeight: 600, color: 'var(--color-ink)', marginBottom: 24 }}>
                {ensaio.preco}
              </div>
              <p style={{ fontSize: 16, lineHeight: 1.7, color: 'var(--color-ink-soft)', margin: '0 0 32px' }}>
                {ensaio.descricao}
              </p>
              <div className="ensaio-inclui-title">O que está incluso</div>
              <ul>
                {ensaio.inclui.map((item) => (
                  <li key={item}>{item}</li>
                ))}
              </ul>
              <Link to="/contato" className="btn">
                {ensaio.cta} <span aria-hidden="true">→</span>
              </Link>
            </Reveal>
          </div>

          {/* Carrossel direita */}
          <Reveal>
            <Carousel fotos={ensaio.fotos} blockId={ensaio.id} />
          </Reveal>
        </div>
      </div>
    </section>
  )
}

// ─── EnsaiosHero ─────────────────────────────────────────────────────────────

function EnsaiosHero() {
  return (
    <section className="ensaios-hero">
      <style>{`
        .ensaios-hero {
          padding-block: var(--section-y-mobile) calc(var(--section-y-mobile) - 32px);
          padding-inline: var(--pad-x-mobile);
        }
        @media (min-width: 768px) {
          .ensaios-hero {
            padding-block: var(--section-y-desktop) calc(var(--section-y-desktop) - 32px);
            padding-inline: var(--pad-x-desktop);
          }
        }
      `}</style>

      <div className="container" style={{ paddingInline: 0 }}>
        <Reveal>
          <SectionHead
            pre="O que eu fotografo"
            title="ensaios"
            subtitle="Três caminhos. Cada um pensado pro tipo de sessão que você está imaginando."
            maxWidth={520}
          />
        </Reveal>
      </div>
    </section>
  )
}

// ─── EnsaiosCta ──────────────────────────────────────────────────────────────

function EnsaiosCta() {
  return (
    <section className="ensaios-cta">
      <style>{`
        .ensaios-cta {
          padding-block: var(--section-y-mobile) calc(var(--section-y-mobile) - 16px);
          padding-inline: var(--pad-x-mobile);
          text-align: center;
          border-top: 1px solid var(--color-ink-faint);
        }
        @media (min-width: 768px) {
          .ensaios-cta {
            padding-block: var(--section-y-desktop) calc(var(--section-y-desktop) - 16px);
            padding-inline: var(--pad-x-desktop);
          }
        }
        .ensaios-cta__btn-wrap {
          display: flex;
          justify-content: center;
          margin-top: 32px;
        }
      `}</style>

      <Reveal>
        <SectionHead pre="Vamos marcar?" title="me chama" align="center" />
        <div className="ensaios-cta__btn-wrap">
          <Link to="/contato" className="btn">
            Quero fotografar com você <span aria-hidden="true">→</span>
          </Link>
        </div>
      </Reveal>
    </section>
  )
}

// ─── PageEnsaios ─────────────────────────────────────────────────────────────

function PageEnsaios() {
  return (
    <main>
      <EnsaiosHero />
      {ENSAIOS_DATA.map((ensaio, i) => (
        <EnsaioBlock key={ensaio.id} ensaio={ensaio} index={i} />
      ))}
      <EnsaiosCta />
    </main>
  )
}
