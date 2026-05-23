import { createFileRoute } from '@tanstack/react-router'
import { SectionHead } from '../components/ui/SectionHead'

export const Route = createFileRoute('/')({
  component: HomePage,
})

function HomePage() {
  return (
    <main className="section-y">
      <div className="container">
        <SectionHead pre="Em construção" title="home" />
      </div>
    </main>
  )
}
