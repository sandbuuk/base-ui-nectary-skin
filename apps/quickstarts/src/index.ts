// @ts-nocheck
window.addEventListener('load', () => {
  Quickstarts
    .get('./Container')
    .then((module) => module())
    .then(({ default: mount }) => {
      mount(document.querySelector('#sinch-quickstarts-app'), { basePath: '/' })
    })
})
