import { ReactNode } from 'react'

export interface ButtonProps {
  children: ReactNode
  id: 'home' | 'create' | 'blocked'
  onSelectSection: (id: 'home' | 'create' | 'blocked') => void
}

export interface ContentProps {
  value: string
  onSelectSession: (session: 'create' | 'edit') => void
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
