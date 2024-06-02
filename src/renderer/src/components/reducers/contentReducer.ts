interface Action {
  type: string
}

const contentReducer = (state: string, action: Action): string => {
  if (action.type === 'home') return 'home'
  if (action.type === 'session') return 'session'
  if (action.type === 'blocked') return 'blocked'
  if (action.type === 'create') return 'create'
  if (action.type === 'edit') return 'edit'
  return state
}

export default contentReducer
