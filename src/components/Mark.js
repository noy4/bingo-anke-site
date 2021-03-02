import React from 'react'

function Mark({ children, color }) {
  return (
    <code
      style={{
        background: color,
        color: '#111',
        borderRadius: '2px',
        padding: '1px 3px',
      }}
    >
      {children}
    </code>
  )
}

export function Red({ children }) {
  return <Mark color="pink">{children}</Mark>
}
export function Blue({ children }) {
  return <Mark color="cyan">{children}</Mark>
}
export function Gray({ children }) {
  return <Mark color="#f0f0f0">{children}</Mark>
}
