import { useEffect } from 'react'
import { Link, useRouterState } from '@tanstack/react-router'

const drawerLinks = [
  { label: 'Ensaios', to: '/ensaios' },
  { label: 'Sobre', to: '/sobre' },
  { label: 'Contato', to: '/contato' },
] as const

interface SiteDrawerProps {
  open: boolean
  onClose: () => void
}

export function SiteDrawer({ open, onClose }: SiteDrawerProps) {
  const routerState = useRouterState()
  const pathname = routerState.location.pathname

  useEffect(() => {
    function handleKey(e: KeyboardEvent) {
      if (e.key === 'Escape') onClose()
    }
    document.addEventListener('keydown', handleKey)
    return () => document.removeEventListener('keydown', handleKey)
  }, [onClose])

  useEffect(() => {
    document.body.style.overflow = open ? 'hidden' : ''
    return () => { document.body.style.overflow = '' }
  }, [open])

  return (
    <>
      <style>{`
        @media (min-width: 768px) {
          .drawer-root { display: none !important; }
        }
      `}</style>
      <div className="drawer-root">
        {/* Backdrop */}
        <div
          onClick={onClose}
          style={{
            position: 'fixed',
            inset: 0,
            background: 'rgba(0,0,0,0.42)',
            zIndex: 60,
            opacity: open ? 1 : 0,
            pointerEvents: open ? 'auto' : 'none',
            transition: 'opacity 0.25s ease',
          }}
        />

        {/* Aside */}
        <aside
          style={{
            position: 'fixed',
            top: 0,
            right: 0,
            bottom: 0,
            width: 320,
            background: 'var(--color-cream)',
            zIndex: 61,
            transform: open ? 'translateX(0)' : 'translateX(100%)',
            transition: 'transform 0.28s cubic-bezier(.4,.2,.2,1)',
            display: 'flex',
            flexDirection: 'column',
          }}
        >
          {/* Header */}
          <div
            style={{
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'space-between',
              padding: '0 24px',
              height: 'var(--header-h)',
              borderBottom: '1px solid var(--color-ink-faint)',
            }}
          >
            <Link
              to="/"
              className="font-display-lower"
              onClick={onClose}
              style={{ fontSize: 22, lineHeight: 1, color: 'var(--color-ink)' }}
            >
              pedro mendonça
            </Link>
            <button
              onClick={onClose}
              aria-label="Fechar menu"
              style={{
                width: 24,
                height: 24,
                background: 'transparent',
                border: 'none',
                cursor: 'pointer',
                color: 'var(--color-ink)',
                fontSize: 20,
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                padding: 0,
              }}
            >
              &#x2715;
            </button>
          </div>

          {/* Nav */}
          <nav
            style={{
              display: 'flex',
              flexDirection: 'column',
              gap: 14,
              padding: '32px 24px',
            }}
          >
            {drawerLinks.map(({ label, to }) => {
              const isActive = pathname.startsWith(to)
              return (
                <Link
                  key={to}
                  to={to}
                  onClick={onClose}
                  className="font-display"
                  style={{
                    fontSize: 28,
                    color: isActive ? 'var(--color-caramel)' : 'var(--color-ink)',
                    transition: 'color 0.15s ease',
                  }}
                >
                  {label}
                </Link>
              )
            })}
          </nav>

          {/* Footer contact block */}
          <div
            style={{
              marginTop: 'auto',
              padding: 24,
              borderTop: '1px solid var(--color-ink-faint)',
            }}
          >
            <div className="pre-title" style={{ marginBottom: 12 }}>
              Fala comigo
            </div>
            <div style={{ display: 'flex', flexDirection: 'column', gap: 8 }}>
              <a
                href="https://instagram.com/drope.png"
                target="_blank"
                rel="noopener noreferrer"
                style={{
                  fontSize: 14,
                  color: 'var(--color-ink-soft)',
                  transition: 'color 0.15s ease',
                }}
                onMouseEnter={(e) => (e.currentTarget.style.color = 'var(--color-caramel)')}
                onMouseLeave={(e) => (e.currentTarget.style.color = 'var(--color-ink-soft)')}
              >
                @drope.png
              </a>
              <a
                href="mailto:contato@pmendoncafoto.com.br"
                style={{
                  fontSize: 14,
                  color: 'var(--color-ink-soft)',
                  transition: 'color 0.15s ease',
                }}
                onMouseEnter={(e) => (e.currentTarget.style.color = 'var(--color-caramel)')}
                onMouseLeave={(e) => (e.currentTarget.style.color = 'var(--color-ink-soft)')}
              >
                contato@pmendoncafoto.com.br
              </a>
            </div>
          </div>
        </aside>
      </div>
    </>
  )
}
