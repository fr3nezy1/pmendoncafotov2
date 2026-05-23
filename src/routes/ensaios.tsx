import { createFileRoute } from '@tanstack/react-router'
import { SectionHead } from '../components/ui/SectionHead'

export const Route = createFileRoute('/ensaios')({
  component: EnsaiosPage,
})

function EnsaiosPage() {
  return (
    <main className="section-y">
      <div className="container">
        <SectionHead pre="Em construção" title="ensaios" />
      </div>
    </main>
  )
}
