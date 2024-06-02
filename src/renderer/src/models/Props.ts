import { ReactNode } from 'react'

export interface ButtonProps {
  children: ReactNode
  id: string
  onSelectSection: (id: string) => void
}

export interface SessionProps {
  value?: string
  onSelectSession: (session: string) => void
}

export interface CardProps {
  children: ReactNode
  span?: string
  color?: string
  hover?: string
}

export interface NodeTemplateProps {
  name: string
  date: string
  img: string
}
