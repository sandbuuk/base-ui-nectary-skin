import { Loading } from 'docs-common'
import { useEffect, useRef, useState } from 'react'
import { versions } from '../../utils'
import type { FC } from 'react'
import './styles.css'
import { useThemeName } from '~/context/ThemeNameProvider'
import { useNavigateVersion } from '~/hooks'

export const ComponentsPage: FC = () => {
  const { versionValue } = useNavigateVersion()
  const { themeName } = useThemeName()
  const ref = useRef<HTMLDivElement | null>(null)
  const [isLoading, setLoading] = useState(true)

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
          const res = bootstrap(ref.current!, { themeName })

          unmount = res.unmount
          res.ready.finally(() => {
            if (mounted) {
              setLoading(false)
            }
          })
        }
      } catch (e) {
        console.error(e)
        setLoading(false)
      }
    })()

    return () => {
      mounted = false
      unmount()
    }
  }, [versionValue])

  return (
    <>
      <div
        id="app-components"
        key={versionValue}
        ref={ref}
        className={isLoading ? 'loading' : ''}
      />
      {isLoading && (
        <div id="app-components-loading">
          <Loading/>
        </div>
      )}
    </>
  )
}
