import type { CSSProperties, ElementType, ReactNode, Ref } from 'react'
import { useFadeIn } from '../../hooks/use-fade-in'

interface RevealProps {
  children: ReactNode
  delay?: number
  as?: ElementType
  className?: string
  style?: CSSProperties
}

export function Reveal({ children, delay, as: Tag = 'div', className = '', style }: RevealProps) {
  const ref = useFadeIn()

  const combined: CSSProperties = {
    ...(delay !== undefined ? { transitionDelay: `${delay}ms` } : {}),
    ...style,
  }

  return (
    <Tag
      ref={ref as Ref<HTMLElement>}
      className={`fade-section${className ? ` ${className}` : ''}`}
      style={combined}
    >
      {children}
    </Tag>
  )
}
