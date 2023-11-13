import { createContext, useContext } from 'react'

const DocumentContext = createContext<Document>(document)

DocumentContext.displayName = 'DocumentContext'

export const DocumentProvider = DocumentContext.Provider

export const useDocument = () => {
  return useContext(DocumentContext)
}
