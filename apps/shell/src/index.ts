import '@saas/components/theme.css'
import './index.css'

const stepsElement = document.querySelector('.steps')!
const reactApp2Element = document.createElement('sinch-react-2-app')
const vueAppElement = document.createElement('sinch-vue-app')
const angularAppElement = document.createElement('sinch-angular-app')

stepsElement.appendChild(reactApp2Element)

const bus = new BroadcastChannel('TEST_CHANNEL')
let firstName = ''
let lastName = ''

bus.addEventListener('message', (e) => {
  switch (e.data.type) {
    case 'FIRST_STEP_DONE': {
      firstName = e.data.value

      reactApp2Element.remove()
      stepsElement.appendChild(vueAppElement)

      import('VueApp/Container').catch(console.error)

      break
    }

    case 'SECOND_STEP_READY': {
      bus.postMessage({ type: 'SECOND_STEP_DATA', value: firstName })

      break
    }

    case 'SECOND_STEP_DONE': {
      lastName = e.data.value

      vueAppElement.remove()
      stepsElement.appendChild(angularAppElement)

      import('AngularApp/Container').catch(console.error)

      break
    }

    case 'THIRD_STEP_READY': {
      bus.postMessage({
        type: 'THIRD_STEP_DATA',
        value: {
          firstName,
          lastName
        }
      })

      break
    }

    case 'THIRD_STEP_DONE': {
      angularAppElement.remove()

      firstName = ''
      lastName = ''

      break
    }

    default: {
      console.log(e)
    }
  }
})

Promise.all([
  import('ReactApp1/Container'),
  import('ReactApp2/Container')
]).catch(console.error)
