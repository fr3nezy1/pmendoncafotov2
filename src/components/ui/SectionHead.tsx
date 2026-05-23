import type { CSSProperties } from 'react'

interface SectionHeadProps {
  pre?: string
  title?: string
  subtitle?: string
  align?: 'left' | 'center'
  maxWidth?: number
  style?: CSSProperties
}

export function SectionHead({
  pre,
  title,
  subtitle,
  align = 'left',
  maxWidth = 560,
  style,
}: SectionHeadProps) {
  return (
    <div
      style={{
        display: 'flex',
        flexDirection: 'column',
        alignItems: align === 'center' ? 'center' : 'flex-start',
        textAlign: align,
        ...style,
      }}
    >
      {pre && (
        <div className="pre-title" style={{ marginBottom: 14 }}>
          {pre}
        </div>
      )}
      {title && (
        <h2
          className="font-display"
          style={{
            fontSize: 'clamp(36px, 5.4vw, 64px)',
            margin: 0,
          }}
        >
          {title}
        </h2>
      )}
      {subtitle && (
        <p
          className="subtitle"
          style={{ margin: '12px 0 0', maxWidth }}
        >
          {subtitle}
        </p>
      )}
    </div>
  )
}
