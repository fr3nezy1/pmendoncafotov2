import { useState, useEffect } from 'react'
import { createRootRoute, Outlet, useRouterState } from '@tanstack/react-router'
import { SiteHeader } from '../components/site/SiteHeader'
import { SiteDrawer } from '../components/site/SiteDrawer'
import { SiteFooter } from '../components/site/SiteFooter'

const titles: Record<string, string> = {
  '/': 'Pedro Mendonça · Fotografia',
  '/ensaios': 'Ensaios · Pedro Mendonça',
  '/sobre': 'Sobre · Pedro Mendonça',
  '/contato': 'Contato · Pedro Mendonça',
}

function RootLayout() {
  const [drawerOpen, setDrawerOpen] = useState(false)
  const routerState = useRouterState()
  const pathname = routerState.location.pathname

  useEffect(() => {
    document.title = titles[pathname] ?? 'Pedro Mendonça · Fotografia'
  }, [pathname])

  return (
    <>
      <SiteHeader onOpenDrawer={() => setDrawerOpen(true)} />
      <SiteDrawer open={drawerOpen} onClose={() => setDrawerOpen(false)} />
      <Outlet />
      <SiteFooter />
    </>
  )
}

export const Route = createRootRoute({
  component: RootLayout,
})
