export const DEFAULT_CODE = `// Welcome to the Nectary Playground!
// Write React components using Nectary and see the live preview.

function App() {
  const [count, setCount] = React.useState(0);

  return (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
      <sinch-text>You clicked {count} times</sinch-text>
      <div style={{ display: 'flex', gap: '8px' }}>
        <sinch-button
          type="cta-primary"
          text="Increment"
          on-click={() => setCount(count + 1)}
        />
        <sinch-button
          type="secondary"
          text="Reset"
          on-click={() => setCount(0)}
        />
      </div>
    </div>
  );
}
`

export const EXAMPLES: Record<string, string> = {
  Counter: DEFAULT_CODE,

  'Toggle State': `function App() {
  const [enabled, setEnabled] = React.useState(false);

  return (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
          <sinch-toggle
      text="Toggle"
      aria-label="Toggle"
      small
      checked={enabled}
      on-change={(e) => setEnabled(e.detail)}
    />
      <sinch-alert type={enabled ? 'info' : 'warn'} text={\`Feature is \${enabled ? 'enabled' : 'disabled'}\`}>
      </sinch-alert>
    </div>
  );
}`,

  'Form Input': `function App() {
  const [name, setName] = React.useState('');

  return (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '16px', maxWidth: '300px' }}>
      <sinch-field label="Your name">
        <sinch-input
          slot="input"
          placeholder="Enter your name"
          value={name}
          on-change={(e) => setName(e.detail)}
        />
      </sinch-field>
      <sinch-text>
        {name ? \`Hello, \${name}!\` : 'Enter your name above'}
      </sinch-text>
    </div>
  );
}
`,

  'Dynamic List': `function App() {
  const [items, setItems] = React.useState(['Item 1', 'Item 2']);
  const [newItem, setNewItem] = React.useState('');

  const addItem = () => {
    if (newItem.trim()) {
      setItems([...items, newItem]);
      setNewItem('');
    }
  };

  const removeItem = (index) => {
    setItems(items.filter((_, i) => i !== index));
  };

  return (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '16px', maxWidth: '400px' }}>
      <div style={{ display: 'flex', gap: '8px' }}>
        <sinch-input
          placeholder="Add new item"
          value={newItem}
          on-change={(e) => setNewItem(e.detail)}
          style={{ flex: 1 }}
        />
        <sinch-button type="cta-primary" text="Add" on-click={addItem} />
      </div>
      <div style={{ display: 'flex', flexDirection: 'column', gap: '8px' }}>
        {items.map((item, index) => (
          <div key={index} style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
            <sinch-chip text={item} on-click={() => removeItem(index)}></sinch-chip>
          </div>
        ))}
      </div>
    </div>
  );
}
`,

  'Dialog Control': `function App() {
  const [open, setOpen] = React.useState(false);

  return (
    <div>
      <sinch-button
        type="cta-primary"
        text="Open Dialog"
        on-click={() => setOpen(true)}
      />
      <sinch-dialog
        open={open}
        caption="React-controlled Dialog"
        on-close={() => setOpen(false)}
      >
        <div slot="content">
          <sinch-text>
            This dialog is controlled by React state.
          </sinch-text>
        </div>
        <div slot="buttons" style={{ display: 'flex', gap: '8px', justifyContent: 'flex-end' }}>
          <sinch-button type="secondary" text="Cancel" on-click={() => setOpen(false)} />
          <sinch-button type="cta-primary" text="Confirm" on-click={() => setOpen(false)} />
        </div>
      </sinch-dialog>
    </div>
  );
}
`,
}
