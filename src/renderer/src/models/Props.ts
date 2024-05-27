export interface SectionProps {
  children: string
  onSelectSection: (children: string) => void
}

export interface ContentProps {
  content: string
}

export interface SessionProps {
  onSelectSession: (session: string) => void
}

export type RendererProps = ContentProps & SessionProps
