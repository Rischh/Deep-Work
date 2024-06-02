export interface Action {
  type: 'home' | 'create' | 'blocked' | 'session' | 'edit'
}

const contentReducer = (content: string, action: Action): string => {
  if (action.type === 'home') return 'home'
  if (action.type === 'blocked') return 'blocked'
  if (action.type === 'create') return 'create'
  if (action.type === 'edit') return 'edit'
  return content
}

export default contentReducer
