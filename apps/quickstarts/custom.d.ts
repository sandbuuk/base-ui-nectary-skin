declare module '*.jpg' {
  export default '' as string
}
declare module '*.png' {
  export default '' as string
}
declare module '*.jpeg' {
  export default '' as string
}
declare module '*.gif' {
  export default '' as string
}

declare module '*.module.css' {
  const classes: { readonly [key: string]: string }
  export default classes
}
