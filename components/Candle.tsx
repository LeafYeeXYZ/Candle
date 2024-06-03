import type { ReactElement } from 'react'
import type { JSXElement } from 'solid-js'

export function Candle(): ReactElement | JSXElement {
  return (
    <a
      href='https://zh.wikipedia.org/wiki/%E5%85%AD%E5%9B%9B%E4%BA%8B%E4%BB%B6'
      target='_blank'
      rel='noreferrer'
      style={{
        textDecoration: 'none',
        position: 'fixed',
        bottom: '1rem',
        left: '1rem',
        zIndex: 99999,
        fontSize: '2rem',
      }}
    >
      🕯️
    </a>
  )
}