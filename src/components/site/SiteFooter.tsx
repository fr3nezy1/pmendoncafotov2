import { Link } from '@tanstack/react-router'

const navLinks = [
  { label: 'Home', to: '/' },
  { label: 'Ensaios', to: '/ensaios' },
  { label: 'Sobre', to: '/sobre' },
  { label: 'Contato', to: '/contato' },
] as const

export function SiteFooter() {
  return (
    <footer
      style={{
        paddingBlock: '56px 32px',
        borderTop: '1px solid var(--color-ink-faint)',
      }}
    >
      <style>{`
        .footer-cols {
          display: grid;
          grid-template-columns: 1fr;
          gap: 32px;
        }
        @media (min-width: 768px) {
          .footer-cols {
            grid-template-columns: 1.4fr 1fr 1fr;
          }
        }
        .footer-link {
          font-size: 14px;
          color: var(--color-ink-soft);
          transition: color 0.15s ease;
        }
        .footer-link:hover {
          color: var(--color-caramel);
        }
      `}</style>

      <div className="container">
        <div className="footer-cols">
          {/* Col 1 */}
          <div>
            <div
              className="font-display-lower"
              style={{ fontSize: 28, marginBottom: 12 }}
            >
              pedro mendonça
            </div>
            <p
              style={{
                fontSize: 14,
                color: 'var(--color-ink-soft)',
                maxWidth: 280,
                lineHeight: 1.55,
                margin: 0,
              }}
            >
              Fotografia em luz natural no Rio de Janeiro. Retratos, casais e ativações de marca.
            </p>
          </div>

          {/* Col 2 — Navegação */}
          <div>
            <div className="pre-title" style={{ marginBottom: 8 }}>
              Navegação
            </div>
            <div style={{ display: 'flex', flexDirection: 'column', gap: 8 }}>
              {navLinks.map(({ label, to }) => (
                <Link key={to} to={to} className="footer-link">
                  {label}
                </Link>
              ))}
            </div>
          </div>

          {/* Col 3 — Contato */}
          <div>
            <div className="pre-title" style={{ marginBottom: 8 }}>
              Contato
            </div>
            <div style={{ display: 'flex', flexDirection: 'column', gap: 8 }}>
              <a
                href="https://instagram.com/drope.png"
                target="_blank"
                rel="noopener noreferrer"
                className="footer-link"
              >
                @drope.png
              </a>
              <a
                href="mailto:contato@pmendoncafoto.com.br"
                className="footer-link"
              >
                contato@pmendoncafoto.com.br
              </a>
            </div>
          </div>
        </div>

        {/* Copyright */}
        <div
          style={{
            marginTop: 40,
            paddingTop: 24,
            borderTop: '1px solid var(--color-ink-faint)',
            display: 'flex',
            justifyContent: 'space-between',
            flexWrap: 'wrap',
            gap: 12,
            fontSize: 12,
            color: 'var(--color-ink-mute)',
          }}
        >
          <span>© 2026 Pedro Mendonça</span>
          <span>Rio de Janeiro · pmendoncafoto.com.br</span>
        </div>
      </div>
    </footer>
  )
}
