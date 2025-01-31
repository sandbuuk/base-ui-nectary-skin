declare module '*.html' {
  const value: string
  export default value
}

declare module '*.css?theme' {
  const obj: {
    use(): void,
    unuse(): void,
  }
  export default obj
}

declare module '*.css?stringify' {
  const val: string
  export default val
}
