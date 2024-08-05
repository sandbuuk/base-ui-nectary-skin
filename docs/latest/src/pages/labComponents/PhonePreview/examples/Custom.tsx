import '@nectary/labs/phone-preview-skeleton'
import { useState } from 'react'

export const CustomExample = () => {
  const [inlineSize, setInlineSize] = useState(288)
  const [baseSize, setBaseSize] = useState(288)
  const [aspectRatio, setAspectRatio] = useState(1 / 2.1)
  const [locale, setLocale] = useState('en-US')

  return (
    <section>
      <div>
        <label>Inline size: </label>
        <span>{inlineSize}</span>
        <input
          type="range"
          min="100"
          max="600"
          value={inlineSize}
          onChange={(e) => setInlineSize(e.target.valueAsNumber)}
        />
      </div>
      <div>
        <label>Base size: </label>
        <span>{baseSize}</span>
        <input
          type="range"
          min="100"
          max="600"
          value={baseSize}
          onChange={(e) => setBaseSize(e.target.valueAsNumber)}
        />
      </div>
      <div>
        <label>Aspect ratio: </label>
        <span>{`${aspectRatio.toFixed(2)}`}</span>
        <input
          type="range"
          min="0.35"
          max="1"
          step={'0.01'}
          value={aspectRatio}
          onChange={(e) => setAspectRatio(e.target.valueAsNumber)}
        />
      </div>
      <div>
        <label>Clock locale: </label>
        <select //
          value={locale}
          onChange={(e) => setLocale(e.target.value)}
        >
          <option value="en-US">en-US</option>
          <option value="pt-BR">pt-BR</option>
          <option value="ar-EG">ar-EG</option>
        </select>
      </div>
      <hr/>
      <sinch-labs-phone-preview-skeleton
        style={{
          inlineSize: `${inlineSize}px`,
          '--base-size': `${baseSize}px`,
          '--aspect-ratio': aspectRatio,
        } as any}
        locale={locale}
      >
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed suscipit
        condimentum vestibulum. Nulla vitae dictum lacus, at tempor diam.
        Integer tristique mauris id bibendum elementum. Suspendisse varius
        facilisis fringilla. Praesent eu ante id velit maximus aliquam.
        Curabitur imperdiet scelerisque ex vitae lobortis. Donec dictum orci sed
        cursus placerat. Proin eu odio accumsan quam hendrerit imperdiet. Nam
        volutpat odio et vulputate varius.
        <br/>
        <br/>
        Curabitur interdum urna vel quam luctus lacinia. Fusce lacinia felis et
        quam laoreet tincidunt. Cras et euismod nunc. Donec placerat luctus
        gravida. Mauris eu mauris ac mauris fermentum tempor. Donec viverra
        imperdiet sapien, sit amet pretium lectus convallis ut. Etiam tincidunt
        lectus non urna tincidunt, rhoncus malesuada nulla interdum.
        <br/>
        <br/>
        Vestibulum id fermentum urna. In in eleifend arcu. Phasellus est est,
        scelerisque et posuere sed, condimentum dictum elit. Sed mauris augue,
        auctor id nisl ac, rutrum sagittis nulla. Praesent purus eros, mattis id
        sodales eu, dignissim non nisi. Duis fringilla scelerisque risus sed
        accumsan. Mauris ac sapien velit. Ut quis mi ipsum. Nullam in augue
        hendrerit, eleifend magna sit amet, feugiat sapien. Aliquam id lorem
        arcu.
      </sinch-labs-phone-preview-skeleton>
    </section>
  )
}
