import { ReactNode } from 'react'

export interface ButtonProps {
  children: ReactNode
  id: 'home' | 'create'
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
}
