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
