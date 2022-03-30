declare module '*.module.css' {
  const classes: { readonly [key: string]: string }
  export default classes
}

declare module 'Quickstarts/Container' {
  type MFERenderFunc = (element: HTMLDivElement, x: {basePath: string}) => undefined | (() => void)
  const renderFunc: MFERenderFunc
  export default renderFunc
}
