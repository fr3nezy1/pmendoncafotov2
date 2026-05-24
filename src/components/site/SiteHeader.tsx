import { useEffect, useState } from 'react'
import { Link, useRouterState } from '@tanstack/react-router'

const navLinks = [
  { label: 'Home', to: '/' },
  { label: 'Ensaios', to: '/ensaios' },
  { label: 'Sobre', to: '/sobre' },
  { label: 'Contato', to: '/contato' },
] as const

interface SiteHeaderProps {
  onOpenDrawer: () => void
}

export function SiteHeader({ onOpenDrawer }: SiteHeaderProps) {
  const [scrolled, setScrolled] = useState(false)
  const routerState = useRouterState()
  const pathname = routerState.location.pathname

  useEffect(() => {
    function handleScroll() {
      setScrolled(window.scrollY > 50)
    }
    window.addEventListener('scroll', handleScroll, { passive: true })
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <header
      style={{
        position: 'sticky',
        top: 0,
        zIndex: 50,
        height: 'var(--header-h)',
        background: 'rgba(250, 247, 242, 0.92)',
        WebkitBackdropFilter: 'blur(8px)',
        backdropFilter: 'blur(8px)',
        borderBottom: scrolled ? '1px solid var(--color-ink-faint)' : '1px solid transparent',
        boxShadow: scrolled ? '0 1px 0 rgba(0,0,0,0.02)' : 'none',
        transition: 'border-color 0.2s ease, box-shadow 0.2s ease',
      }}
    >
      <div
        className="inner"
        style={{
          height: '100%',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between',
          paddingInline: '30px',
        }}
      >
        <style>{`
          @media (min-width: 768px) {
            .inner {
              padding-inline: 30px !important;
            }
            .header-nav { display: flex !important; }
            .header-burger { display: none !important; }
          }
          .header-nav-link {
            position: relative;
            font-size: 14px;
            font-weight: 500;
            letter-spacing: 0.04em;
            font-family: var(--font-body);
            color: var(--color-ink);
            transition: color 0.15s ease;
            padding-bottom: 2px;
          }
          .header-nav-link:hover {
            color: var(--color-caramel);
          }
          .header-nav-link.active {
            color: var(--color-caramel);
          }
          .header-nav-link.active::after {
            content: '';
            position: absolute;
            left: 0;
            right: 0;
            bottom: -2px;
            height: 1.5px;
            background: var(--color-caramel);
          }
        `}</style>

        <Link
          to="/"
          className="font-display-lower"
          style={{ fontSize: 26, lineHeight: 1, color: 'var(--color-ink)', whiteSpace: 'nowrap' }}
        >
          pedro mendonça
        </Link>

        <nav
          className="header-nav"
          style={{ display: 'none', gap: 32, listStyle: 'none', margin: 0, padding: 0 }}
        >
          {navLinks.map(({ label, to }) => {
            const isActive = to === '/' ? pathname === '/' : pathname.startsWith(to)
            return (
              <Link
                key={to}
                to={to}
                className={`header-nav-link${isActive ? ' active' : ''}`}
              >
                {label}
              </Link>
            )
          })}
        </nav>

        <button
          className="header-burger"
          onClick={onOpenDrawer}
          aria-label="Abrir menu"
          style={{
            display: 'flex',
            flexDirection: 'column',
            gap: 6,
            background: 'none',
            border: 'none',
            cursor: 'pointer',
            padding: 4,
          }}
        >
          {[0, 1, 2].map((i) => (
            <span
              key={i}
              style={{
                display: 'block',
                width: 22,
                height: 1.5,
                background: 'var(--color-ink)',
              }}
            />
          ))}
        </button>
      </div>
    </header>
  )
}
