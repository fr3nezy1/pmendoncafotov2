import { useState } from 'react'
import { createFileRoute } from '@tanstack/react-router'
import { SectionHead } from '../components/ui/SectionHead'
import { Reveal } from '../components/ui/Reveal'

export const Route = createFileRoute('/contato')({
  component: PageContato,
})

// ─── ContatoHero ─────────────────────────────────────────────────────────────

function ContatoHero() {
  return (
    <section className="contato-hero">
      <style>{`
        .contato-hero {
          padding-block: var(--section-y-mobile) calc(var(--section-y-mobile) - 40px);
          padding-inline: var(--pad-x-mobile);
        }
        @media (min-width: 768px) {
          .contato-hero {
            padding-block: var(--section-y-desktop) calc(var(--section-y-desktop) - 40px);
            padding-inline: var(--pad-x-desktop);
          }
        }
      `}</style>

      <div className="container" style={{ paddingInline: 0 }}>
        <Reveal>
          <SectionHead
            pre="Vamos marcar?"
            title="me fala um pouco sobre você"
            subtitle="Em até 24h chamo no WhatsApp pra continuarmos. Sem robô, sem formulário automático."
            align="center"
            maxWidth={560}
          />
        </Reveal>
      </div>
    </section>
  )
}

// ─── ContatoForm ─────────────────────────────────────────────────────────────

function ContatoForm() {
  const [data, setData] = useState({
    nome: '',
    whatsapp: '',
    email: '',
    tipo: '',
    periodo: '',
    ideia: '',
  })
  const [sent, setSent] = useState(false)
  const [errors, setErrors] = useState<{ [k: string]: string }>({})

  const set =
    (k: string) =>
    (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) =>
      setData((d) => ({ ...d, [k]: e.target.value }))

  const submit = (e: React.FormEvent) => {
    e.preventDefault()
    const errs: { [k: string]: string } = {}
    if (!data.nome.trim()) errs.nome = 'Como te chamo?'
    if (!data.whatsapp.trim()) errs.whatsapp = 'Preciso de um número pra te chamar'
    setErrors(errs)
    if (Object.keys(errs).length) return
    console.log('[Pedro Mendonça] Novo contato:', data)
    setSent(true)
  }

  return (
    <section>
      <style>{`
        .contato-form-wrap {
          max-width: 560px;
          margin: 0 auto;
          padding-bottom: var(--section-y-mobile);
        }
        @media (min-width: 768px) {
          .contato-form-wrap {
            padding-bottom: var(--section-y-desktop);
          }
        }
        .form-grid {
          display: grid;
          gap: 20px;
        }
        .form-field {
          display: flex;
          flex-direction: column;
          gap: 8px;
        }
        .form-field label {
          font-family: var(--font-body);
          font-size: 13px;
          font-weight: 500;
          letter-spacing: 0.06em;
          text-transform: uppercase;
          color: var(--color-caramel);
        }
        .form-field input,
        .form-field select,
        .form-field textarea {
          font-family: var(--font-body);
          font-size: 15px;
          color: var(--color-ink);
          background: var(--color-cream);
          border: 1px solid var(--color-ink-faint);
          border-radius: 0;
          padding: 12px 14px;
          outline: none;
          transition: border-color 0.18s;
          width: 100%;
        }
        .form-field input:focus,
        .form-field select:focus,
        .form-field textarea:focus {
          border-color: var(--color-ink);
        }
        .form-field input[aria-invalid="true"],
        .form-field select[aria-invalid="true"],
        .form-field textarea[aria-invalid="true"] {
          border-color: #c0392b;
        }
        .form-field textarea {
          resize: vertical;
          min-height: 100px;
        }
        .form-error {
          font-size: 12px;
          color: #c0392b;
          font-family: var(--font-body);
        }
        .contato-sent {
          text-align: center;
          padding: 56px 24px;
          border: 1px solid var(--color-ink-faint);
          background: rgba(255, 255, 255, 0.4);
        }
        .contato-sent .pre-title { margin-bottom: 12px; }
        .contato-sent__t {
          font-size: clamp(40px, 5vw, 56px);
          margin: 0 0 14px;
        }
        .contato-sent__p {
          font-size: 16px;
          line-height: 1.6;
          color: var(--color-ink-soft);
          max-width: 380px;
          margin: 0 auto 28px;
        }
      `}</style>

      <div className="container">
        <div className="contato-form-wrap">
          {sent ? (
            <div className="contato-sent">
              <div className="pre-title">Recebido</div>
              <h3 className="font-display contato-sent__t">pronto.</h3>
              <p className="contato-sent__p">
                Em até 24h chamo no WhatsApp pra continuarmos nossa conversa.
              </p>
              <button
                type="button"
                className="btn-ghost"
                onClick={() => {
                  setSent(false)
                  setData({ nome: '', whatsapp: '', email: '', tipo: '', periodo: '', ideia: '' })
                  setErrors({})
                }}
              >
                Enviar outra mensagem
              </button>
            </div>
          ) : (
            <Reveal>
              <form onSubmit={submit} noValidate className="form-grid">
                <div className="form-field">
                  <label htmlFor="nome">Nome</label>
                  <input
                    id="nome"
                    type="text"
                    value={data.nome}
                    onChange={set('nome')}
                    aria-invalid={!!errors.nome}
                  />
                  {errors.nome && <span className="form-error">{errors.nome}</span>}
                </div>

                <div className="form-field">
                  <label htmlFor="whatsapp">WhatsApp</label>
                  <input
                    id="whatsapp"
                    type="tel"
                    value={data.whatsapp}
                    onChange={set('whatsapp')}
                    placeholder="(21) 9 9999-9999"
                    aria-invalid={!!errors.whatsapp}
                  />
                  {errors.whatsapp && <span className="form-error">{errors.whatsapp}</span>}
                </div>

                <div className="form-field">
                  <label htmlFor="email">E-mail (opcional)</label>
                  <input
                    id="email"
                    type="email"
                    value={data.email}
                    onChange={set('email')}
                  />
                </div>

                <div className="form-field">
                  <label htmlFor="tipo">Tipo de sessão</label>
                  <select id="tipo" value={data.tipo} onChange={set('tipo')}>
                    <option value="">Selecione...</option>
                    <option value="retratos">Retratos</option>
                    <option value="casais">Casais</option>
                    <option value="marcas">Marcas · esporte &amp; saúde</option>
                    <option value="outro">Outro / ainda não sei</option>
                  </select>
                </div>

                <div className="form-field">
                  <label htmlFor="periodo">Período aproximado</label>
                  <select id="periodo" value={data.periodo} onChange={set('periodo')}>
                    <option value="">Selecione...</option>
                    <option value="30dias">Próximos 30 dias</option>
                    <option value="3meses">Próximos 3 meses</option>
                    <option value="flexivel">Tenho flexibilidade</option>
                  </select>
                </div>

                <div className="form-field">
                  <label htmlFor="ideia">O que você está imaginando? (opcional)</label>
                  <textarea
                    id="ideia"
                    value={data.ideia}
                    onChange={set('ideia')}
                    rows={4}
                  />
                </div>

                <button
                  type="submit"
                  className="btn"
                  style={{ marginTop: 12, alignSelf: 'start' }}
                >
                  Enviar <span aria-hidden="true">→</span>
                </button>
              </form>
            </Reveal>
          )}
        </div>
      </div>
    </section>
  )
}

// ─── ContatoFaixa ─────────────────────────────────────────────────────────────

function ContatoFaixa() {
  return (
    <section className="contato-faixa">
      <style>{`
        .contato-faixa {
          background: var(--color-ink);
          color: var(--color-cream);
          padding-block: 64px;
          padding-inline: var(--pad-x-mobile);
        }
        @media (min-width: 768px) {
          .contato-faixa {
            padding-block: 80px;
            padding-inline: var(--pad-x-desktop);
          }
        }
        .contato-vias {
          display: grid;
          grid-template-columns: 1fr;
          gap: 32px;
        }
        @media (min-width: 480px) {
          .contato-vias {
            grid-template-columns: repeat(2, 1fr);
          }
        }
        @media (min-width: 768px) {
          .contato-vias {
            grid-template-columns: repeat(4, 1fr);
          }
        }
        .contato-via {
          display: flex;
          flex-direction: column;
          padding: 24px 0;
          border-top: 1px solid rgba(250, 247, 242, 0.18);
          text-decoration: none;
          transition: opacity 0.18s;
          color: var(--color-cream);
        }
        .contato-via:hover { opacity: 0.7; }
        .contato-via .pre-title {
          color: var(--color-caramel);
          margin-bottom: 14px;
        }
        .contato-via__label {
          font-family: var(--font-display);
          text-transform: uppercase;
          font-size: clamp(24px, 3vw, 32px);
          line-height: 1;
          margin-bottom: 12px;
          color: var(--color-cream);
          word-break: break-word;
        }
        .contato-via__sub {
          font-size: 14px;
          color: rgba(250, 247, 242, 0.7);
          line-height: 1.5;
        }
      `}</style>

      <div className="container" style={{ paddingInline: 0 }}>
        <Reveal>
          <div className="pre-title" style={{ color: 'var(--color-caramel)', textAlign: 'center', marginBottom: 12 }}>
            Outras formas
          </div>
          <h2
            className="font-display"
            style={{
              textAlign: 'center',
              color: 'var(--color-cream)',
              fontSize: 'clamp(32px, 4.5vw, 48px)',
              margin: '0 0 48px',
            }}
          >
            fala comigo direto
          </h2>

          <div className="contato-vias">
            {/* WhatsApp */}
            <a
              href="https://wa.me/55XXXXXXXXXXX" // TODO: substituir pelo número real do Pedro quando profissional estiver pronto
              target="_blank"
              rel="noopener noreferrer"
              className="contato-via"
            >
              <div className="pre-title">Mensagem rápida</div>
              <div className="contato-via__label">WhatsApp</div>
              <span className="contato-via__sub">Resposta em até 24h</span>
            </a>

            {/* Instagram */}
            <a
              href="https://instagram.com/drope.png"
              target="_blank"
              rel="noopener noreferrer"
              className="contato-via"
            >
              <div className="pre-title">Veja meu dia-a-dia</div>
              <div className="contato-via__label">@drope.png</div>
              <span className="contato-via__sub">DM aberto</span>
            </a>

            {/* E-mail */}
            <a
              href="mailto:contato@pmendoncafoto.com.br"
              className="contato-via"
            >
              <div className="pre-title">Para projetos e orçamentos</div>
              <div className="contato-via__label">E-mail</div>
              <span className="contato-via__sub">contato@pmendoncafoto.com.br</span>
            </a>

            {/* Localização — não é link */}
            <div className="contato-via" style={{ cursor: 'default' }}>
              <div className="pre-title">Onde fotografo</div>
              <div className="contato-via__label">Rio de Janeiro</div>
              <span className="contato-via__sub">e arredores, sob consulta</span>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  )
}

// ─── PageContato ─────────────────────────────────────────────────────────────

function PageContato() {
  return (
    <main>
      <ContatoHero />
      <ContatoForm />
      <ContatoFaixa />
    </main>
  )
}
