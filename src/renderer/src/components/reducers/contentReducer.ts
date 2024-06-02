interface Action {
  type: 'home' | 'create' | 'blocked' | 'session' | 'edit'
}

const contentReducer = (state: string, action: Action): string => {
  if (action.type === 'home') return 'home'
  if (action.type === 'blocked') return 'blocked'
  if (action.type === 'create') return 'create'
  if (action.type === 'edit') return 'edit'
  return state
}

export default contentReducer
