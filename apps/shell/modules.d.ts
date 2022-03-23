declare module '*.module.css' {
  const classes: { readonly [key: string]: string }
  export default classes
}

type MFERenderFunc = (element: ShadowRoot | HTMLElement) => undefined | (() => void)

declare module 'Quickstarts/Container' {
  const renderFunc: MFERenderFunc
  export default renderFunc
}
