import type { CSSProperties } from 'react'

interface ImgProps {
  src?: string
  alt?: string
  className?: string
  style?: CSSProperties
  label?: string
  eager?: boolean
}

export function Img({ src, alt = '', className = '', style, label = 'FOTO', eager }: ImgProps) {
  if (!src) {
    return (
      <div
        className={`img-ph${className ? ` ${className}` : ''}`}
        data-label={label}
        style={style}
      />
    )
  }

  return (
    <img
      src={src}
      alt={alt}
      loading={eager ? 'eager' : 'lazy'}
      className={`img-cover${className ? ` ${className}` : ''}`}
      style={style}
    />
  )
}
