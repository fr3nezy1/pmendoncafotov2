import { useState } from 'react'
import { createRootRoute, HeadContent, Outlet } from '@tanstack/react-router'
import { SiteHeader } from '../components/site/SiteHeader'
import { SiteDrawer } from '../components/site/SiteDrawer'
import { SiteFooter } from '../components/site/SiteFooter'

function RootLayout() {
  const [drawerOpen, setDrawerOpen] = useState(false)

  return (
    <>
      <HeadContent />
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
