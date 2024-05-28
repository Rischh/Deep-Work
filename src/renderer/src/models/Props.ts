import { ReactNode } from 'react'

export interface SectionProps {
  id: string
  children: ReactNode
  onSelectSection: (id: string) => void
}

export interface ContentProps {
  content: string
}

export interface SessionProps {
  onSelectSession: (session: string) => void
}

export type RendererProps = ContentProps & SessionProps
