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

export interface UserSettingsProps {
  onSelectUserSettings: (user: string) => void
}

interface ButtonUserSettingsProps {
  email: string
  image?: string
}

export type BtnUserSettingsProps = UserSettingsProps & ButtonUserSettingsProps

export interface AppSettingsProps {
  onSelectAppSettings: (app: string) => void
}

export type SelectSettings = UserSettingsProps & AppSettingsProps
