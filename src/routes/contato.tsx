import { createFileRoute } from '@tanstack/react-router'
import { SectionHead } from '../components/ui/SectionHead'

export const Route = createFileRoute('/contato')({
  component: ContatoPage,
})

function ContatoPage() {
  return (
    <main className="section-y">
      <div className="container">
        <SectionHead pre="Em construção" title="contato" />
      </div>
    </main>
  )
}
