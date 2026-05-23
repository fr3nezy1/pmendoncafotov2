import { createFileRoute } from '@tanstack/react-router'
import { SectionHead } from '../components/ui/SectionHead'

export const Route = createFileRoute('/sobre')({
  component: SobrePage,
})

function SobrePage() {
  return (
    <main className="section-y">
      <div className="container">
        <SectionHead pre="Em construção" title="sobre" />
      </div>
    </main>
  )
}
