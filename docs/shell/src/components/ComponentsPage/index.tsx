import { useEffect, useRef } from 'react'
import { versions } from '../../utils'
import type { FC } from 'react'
import './styles.css'
import { useNavigateVersion } from '~/hooks'

type TComponentsPage = {}

export const ComponentsPage: FC<TComponentsPage> = () => {
  const { versionValue } = useNavigateVersion()
  const ref = useRef<HTMLDivElement | null>(null)

  useEffect(() => {
    if (versionValue.length === 0) {
      return
    }

    let unmount = () => {}
    let mounted = true

    void (async () => {
      try {
        const { bootstrap } = await Reflect.get(versions, versionValue).bootstrap()

        if (mounted) {
          unmount = bootstrap(ref.current!)
        }
      } catch (e) {
        console.error(e)
      }
    })()

    return () => {
      mounted = false
      unmount()
    }
  }, [versionValue])

  return (
    <div id="app-components" ref={ref}/>
  )
}
