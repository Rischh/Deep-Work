import React, { Dispatch } from 'react'
import { Action } from '../reducers/contentReducer'

interface ContentContextType {
  content: string
  dispatch: Dispatch<Action>
}

const ContentContext = React.createContext<ContentContextType>({} as ContentContextType)

export default ContentContext
