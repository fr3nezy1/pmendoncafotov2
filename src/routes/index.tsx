import { createFileRoute, Link } from '@tanstack/react-router'
import { SectionHead } from '../components/ui/SectionHead'
import { Img } from '../components/ui/Img'
import { Reveal } from '../components/ui/Reveal'
import { PHOTOS } from '../data/photos'

export const Route = createFileRoute('/')({
  component: HomePage,
})

// ─── HomeHero ────────────────────────────────────────────────────────────────

function HomeHero() {
  return (
    <section className="hero">
      <style>{`
        .hero {
          display: grid;
          grid-template-columns: 1fr;
          min-height: calc(100svh - var(--header-h));
        }
        @media (min-width: 900px) {
          .hero {
            grid-template-columns: minmax(0, 1fr) minmax(0, 1.05fr);
          }
        }
        .hero__text {
          display: flex;
          flex-direction: column;
          justify-content: center;
          padding: 48px var(--pad-x-mobile) 56px;
        }
        @media (min-width: 900px) {
          .hero__text {
            padding: 64px var(--pad-x-desktop) 72px;
          }
        }
        .hero__photo {
          position: relative;
          min-height: 60svh;
          background: var(--color-ink);
        }
        @media (min-width: 900px) {
          .hero__photo {
            min-height: 0;
          }
        }
        .hero__cta {
          display: flex;
          gap: 12px;
          flex-wrap: wrap;
          margin-top: 32px;
        }
      `}</style>

      <div className="hero__text">
        <div className="pre-title" style={{ marginBottom: 22 }}>
          Fotografia · Rio de Janeiro
        </div>
        <h1
          className="font-display"
          style={{ fontSize: 'clamp(48px, 7.6vw, 104px)', margin: 0, lineHeight: 0.96 }}
        >
          você sendo você.
          <br />
          o rio sendo o rio.
        </h1>
        <p
          className="subtitle"
          style={{ margin: '22px 0 0', maxWidth: 360, fontSize: 17 }}
        >
          Ensaios, casais e ativações de marca, em luz natural.
        </p>
        <div className="hero__cta">
          <Link to="/contato" className="btn">
            Quero fotografar com você <span aria-hidden="true">→</span>
          </Link>
          <Link to="/ensaios" className="btn-ghost">
            Ver ensaios
          </Link>
        </div>
      </div>

      <div className="hero__photo">
        {/* TODO: substituir por foto Cloudinary do Pedro */}
        <Img
          src={PHOTOS.hero}
          alt="Retrato em luz natural no Rio"
          eager
          style={{
            position: 'absolute',
            top: 0,
            left: 0,
            right: 0,
            bottom: 0,
            width: '100%',
            height: '100%',
            objectFit: 'cover',
          }}
        />
      </div>
    </section>
  )
}

// ─── HomeVisao ────────────────────────────────────────────────────────────────

const visaoLines = [
  'a vida não combina com roteiro.',
  'a luz natural diz mais que qualquer cenário montado.',
  'o rio não é fundo. é co-autor.',
]

function HomeVisao() {
  return (
    <section className="visao">
      <style>{`
        .visao {
          position: relative;
          padding-block: 56px;
          display: flex;
          align-items: center;
          justify-content: center;
          overflow: hidden;
        }
        @media (min-width: 768px) {
          .visao {
            padding-block: 80px;
          }
        }
        .visao__overlay {
          position: absolute;
          top: 0; left: 0; right: 0; bottom: 0;
          background:
            radial-gradient(ellipse at center, rgba(0,0,0,0.55) 0%, rgba(0,0,0,0.82) 90%),
            rgba(0,0,0,0.2);
        }
        .visao__content {
          position: relative;
          z-index: 2;
          color: var(--color-cream);
          text-align: center;
          padding-inline: var(--pad-x-mobile);
          max-width: 1000px;
          display: flex;
          flex-direction: column;
          gap: 12px;
        }
        @media (min-width: 768px) {
          .visao__content {
            padding-inline: var(--pad-x-desktop);
          }
        }
      `}</style>

      {/* TODO: substituir por foto Cloudinary do Pedro */}
      <Img
        src={PHOTOS.visao}
        alt="Rio de Janeiro ao amanhecer"
        style={{
          position: 'absolute',
          top: 0,
          left: 0,
          right: 0,
          bottom: 0,
          width: '100%',
          height: '100%',
          objectFit: 'cover',
        }}
      />

      <div className="visao__overlay" />

      <Reveal className="visao__content">
        {visaoLines.map((line) => (
          <p
            key={line}
            className="font-display"
            style={{
              fontSize: 'clamp(28px, 4vw, 54px)',
              lineHeight: 1.12,
              margin: 0,
              color: 'var(--color-cream)',
            }}
          >
            {line}
          </p>
        ))}
      </Reveal>
    </section>
  )
}

// ─── HomeRecentes ─────────────────────────────────────────────────────────────

const gridItems = [
  // TODO: substituir por foto Cloudinary do Pedro
  { src: PHOTOS.rec1, col: 'span 2', row: 'span 2' },
  { src: PHOTOS.rec2, col: 'span 2', row: 'span 1' },
  { src: PHOTOS.rec3, col: 'span 1', row: 'span 1' },
  { src: PHOTOS.rec4, col: 'span 1', row: 'span 1' },
  { src: PHOTOS.rec5, col: 'span 2', row: 'span 1' },
  { src: PHOTOS.rec6, col: 'span 1', row: 'span 2' },
  { src: PHOTOS.rec7, col: 'span 1', row: 'span 1' },
  { src: PHOTOS.rec8, col: 'span 2', row: 'span 1' },
]

function HomeRecentes() {
  return (
    <section className="section-y">
      <style>{`
        .recentes-grid {
          display: grid;
          grid-template-columns: repeat(2, 1fr);
          grid-auto-rows: 38vw;
          gap: 8px;
          margin-top: 40px;
        }
        @media (min-width: 768px) {
          .recentes-grid {
            grid-template-columns: repeat(4, 1fr);
            grid-auto-rows: 160px;
            gap: 10px;
          }
        }
        @media (min-width: 1100px) {
          .recentes-grid {
            grid-auto-rows: 200px;
          }
        }
        .home-recentes__cell {
          overflow: hidden;
          position: relative;
          background: var(--color-ink-faint);
        }
        .home-recentes__cell:hover {
          opacity: 0.92;
          transition: opacity 0.3s;
        }
      `}</style>

      <div className="container">
        <Reveal>
          <SectionHead pre="Trabalhos recentes" title="Recentes" />
        </Reveal>

        <div className="recentes-grid">
          {gridItems.map((g, i) => (
            <div
              key={i}
              className="img-wrap home-recentes__cell"
              style={{ gridColumn: g.col, gridRow: g.row }}
            >
              <Img src={g.src} alt={`recente ${i + 1}`} />
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

// ─── HomeCaminhos ─────────────────────────────────────────────────────────────

const caminhos = [
  {
    tag: 'Presença · Autenticidade · Olhar',
    title: 'retratos',
    hash: 'retratos',
    body: 'Sessões individuais ao ar livre, em uma paisagem do Rio escolhida pra você. A foto acontece no caminho.',
  },
  {
    tag: 'Cumplicidade · Toque · Afeto',
    title: 'casais',
    hash: 'casais',
    body: 'Vocês juntos, no início da manhã, em um lugar do Rio que faça sentido pra história de vocês.',
  },
  {
    tag: 'Movimento · Ritmo · Energia',
    title: 'marcas · esporte & saúde',
    hash: 'marcas-esporte-saude',
    body: 'Ativações de marca, eventos esportivos e ações de bem-estar. Imagens que mantêm o evento vivo depois.',
  },
]

function HomeCaminhos() {
  return (
    <section className="section-y">
      <style>{`
        .caminhos-grid {
          display: grid;
          grid-template-columns: 1fr;
          gap: 40px;
          margin-top: 56px;
        }
        @media (min-width: 768px) {
          .caminhos-grid {
            grid-template-columns: repeat(3, 1fr);
            gap: 48px;
          }
        }
        .caminhos-col {
          padding-top: 28px;
          border-top: 1.5px solid var(--color-ink);
          display: flex;
          flex-direction: column;
        }
        .caminhos-footer {
          margin-top: 56px;
          padding-top: 24px;
          border-top: 1px solid var(--color-ink-faint);
          font-size: 14px;
        }
        .caminhos-link {
          font-weight: 500;
          color: var(--color-ink);
          border-bottom: 1.5px solid var(--color-caramel);
          padding-bottom: 2px;
          transition: color 0.18s ease;
        }
        .caminhos-link:hover {
          color: var(--color-caramel);
        }
        .caminhos-title-link {
          display: block;
          color: inherit;
          transition: color 0.15s ease;
        }
        .caminhos-title-link:hover {
          color: var(--color-caramel);
        }
      `}</style>

      <div className="container">
        <Reveal>
          <SectionHead pre="O que eu fotografo" title="três caminhos" />
        </Reveal>

        <div className="caminhos-grid">
          {caminhos.map((c, i) => (
            <Reveal key={c.title} delay={i * 80} className="caminhos-col">
              <div className="pre-title" style={{ fontSize: 12, marginBottom: 18 }}>
                {c.tag}
              </div>
              <Link to="/ensaios" hash={c.hash} className="caminhos-title-link">
                <h3
                  className="font-display"
                  style={{ fontSize: 'clamp(34px, 4vw, 52px)', margin: '0 0 18px', lineHeight: 0.95 }}
                >
                  {c.title}
                </h3>
              </Link>
              <p
                style={{
                  fontSize: 16,
                  lineHeight: 1.6,
                  color: 'var(--color-ink-soft)',
                  margin: 0,
                  maxWidth: '36ch',
                }}
              >
                {c.body}
              </p>
            </Reveal>
          ))}
        </div>

        <Reveal>
          <div className="caminhos-footer">
            <span className="muted">A partir de R$ 450 · Detalhes e fotos em </span>
            <Link to="/ensaios" className="caminhos-link">
              Ensaios →
            </Link>
          </div>
        </Reveal>
      </div>
    </section>
  )
}

// ─── HomePage ─────────────────────────────────────────────────────────────────

function HomePage() {
  return (
    <main>
      <HomeHero />
      <HomeVisao />
      <HomeRecentes />
      <div className="container">
        <div style={{ borderTop: '1px solid var(--color-ink-faint)' }} />
      </div>
      <HomeCaminhos />
    </main>
  )
}
