import('./container')
  .then(({ default: mount }) => {
    mount(
      document.querySelector<HTMLDivElement>('#sinch-quickstarts-app')!,
      { basePath: '/' }
    )
  })
  .catch(console.error)
