# @nectary/react — Component API Reference

> Use this reference to build prototypes with the Nectary design system.
> All components are imported from `@nectary/react`. Styles from `@nectary/react/styles.css`.
> Wrap your app root in `<div className="nectary-theme-base">`.

```tsx
import { Button, Card, Dialog, Text } from '@nectary/react'
import '@nectary/react/styles.css'
```

---

## Buttons & Actions

### Button

Interactive button with variants and sizes.

```tsx
<Button variant="primary" size="m" text="Save" />
<Button variant="destructive" leftIcon={<Icon name="fa-trash" iconsVersion="2" />} text="Delete" />
<Button loading text="Submitting..." />
<Button variant="subtle-secondary" icon={<Icon name="fa-ellipsis" iconsVersion="2" />} />
```

| Prop | Type | Default | Description |
|------|------|---------|-------------|
| `variant` | `'primary' \| 'secondary' \| 'subtle-primary' \| 'subtle-secondary' \| 'cta-primary' \| 'cta-secondary' \| 'destructive'` | `'secondary'` | Visual style |
| `size` | `'xs' \| 's' \| 'm' \| 'l'` | `'m'` | Size |
| `text` | `string` | — | Button label |
| `icon` | `ReactNode` | — | Icon-only button |
| `leftIcon` | `ReactNode` | — | Icon before text |
| `rightIcon` | `ReactNode` | — | Icon after text |
| `loading` | `boolean` | `false` | Shows spinner, disables |
| `toggled` | `boolean` | `false` | Pressed state (subtle variants) |
| `formType` | `'button' \| 'submit' \| 'reset'` | `'button'` | Form behavior |
| `disabled` | `boolean` | `false` | Disabled state |

### ButtonGroup

Groups buttons with shared size/variant.

```tsx
<ButtonGroup variant="secondary" size="s">
  <Button text="Left" />
  <Button text="Center" />
  <Button text="Right" />
</ButtonGroup>
```

| Prop | Type | Default |
|------|------|---------|
| `size` | `ButtonSize` | `'m'` |
| `variant` | `ButtonVariant` | `'secondary'` |

### Link

Anchor element with external/standalone modes.

```tsx
<Link href="/about" text="About us" />
<Link href="https://example.com" text="Docs" external />
<Link href="/features" text="See all features" standalone />
```

| Prop | Type | Default | Description |
|------|------|---------|-------------|
| `href` | `string` | — | Target URL (required) |
| `text` | `string` | — | Display text |
| `external` | `boolean` | `false` | New tab + external icon |
| `standalone` | `boolean` | `false` | Block display with arrow |
| `disabled` | `boolean` | `false` | Renders as `<span>` |
| `useHistory` | `boolean` | `false` | SPA navigation |
| `preventDefault` | `boolean` | — | Prevent default behavior |

---

## Typography

### Text

Body text with size variants.

```tsx
<Text>Default paragraph text</Text>
<Text type="s" emphasized>Small bold text</Text>
<Text type="xs" inline>Inline small text</Text>
<Text ellipsis>This very long text will be truncated...</Text>
```

| Prop | Type | Default | Description |
|------|------|---------|-------------|
| `type` | `'m' \| 's' \| 'xs' \| 'xxs'` | `'m'` | Text size |
| `inline` | `boolean` | `false` | Renders as `<span>` |
| `emphasized` | `boolean` | `false` | Bold weight (m & s only) |
| `ellipsis` | `boolean` | `false` | Truncate with ellipsis |
| `as` | `'p' \| 'span' \| 'div' \| 'label'` | auto | HTML element |

### Title

Heading component with semantic levels.

```tsx
<Title type="xl">Page Title</Title>
<Title type="m" level="2">Section Heading</Title>
<Title type="s">Card Title</Title>
```

| Prop | Type | Default | Description |
|------|------|---------|-------------|
| `type` | `'xl' \| 'l' \| 'm' \| 's' \| 'xs'` | `'m'` | Size |
| `level` | `'1'-'6'` | auto | Semantic heading level |
| `ellipsis` | `boolean` | `false` | Truncate |
| `as` | `'h1'-'h6' \| 'span' \| 'div'` | auto | HTML element |

---

## Form Controls

### Input

Text input with icon and addon slots.

```tsx
<Input placeholder="Email address" />
<Input type="password" placeholder="Password" size="l" />
<Input icon={<Icon name="fa-search" iconsVersion="2" />} placeholder="Search..." />
<Input invalid rightAddon={<Icon name="fa-circle-exclamation" iconsVersion="2" />} />
```

| Prop | Type | Default | Description |
|------|------|---------|-------------|
| `type` | `'text' \| 'password' \| 'number'` | `'text'` | Input type |
| `value` | `string` | — | Controlled value |
| `placeholder` | `string` | — | Placeholder text |
| `size` | `'s' \| 'm' \| 'l'` | `'m'` | Size |
| `invalid` | `boolean` | `false` | Error state |
| `disabled` | `boolean` | `false` | Disabled |
| `readOnly` | `boolean` | `false` | Read-only |
| `icon` | `ReactNode` | — | Left icon |
| `leftAddon` | `ReactNode` | — | Left addon |
| `rightAddon` | `ReactNode` | — | Right addon |
| `maxLength` | `number` | — | Max characters |
| `onChange` | `(value: string) => void` | — | Change handler |

### Textarea

Multi-line text input with auto-resize.

```tsx
<Textarea placeholder="Write a message..." />
<Textarea minRows={3} maxRows={8} resizable />
<Textarea invalid bottomContent={<Text type="xs">0/500</Text>} />
```

| Prop | Type | Default | Description |
|------|------|---------|-------------|
| `value` | `string` | — | Controlled value |
| `placeholder` | `string` | — | Placeholder |
| `invalid` | `boolean` | `false` | Error state |
| `disabled` | `boolean` | `false` | Disabled |
| `rows` | `number` | — | Fixed visible rows |
| `minRows` | `number` | — | Min rows (auto-resize) |
| `maxRows` | `number` | — | Max rows (auto-resize) |
| `resizable` | `boolean` | `false` | Drag resize |
| `bottomContent` | `ReactNode` | — | Content below textarea |
| `onChange` | `(value: string) => void` | — | Change handler |

### Field

Form field wrapper with label, helper text, and validation.

```tsx
<Field label="Email" invalidText="Invalid email address">
  <Input type="text" invalid />
</Field>

<Field label="Bio" optionalText="Optional" additionalText="Max 500 characters">
  <Textarea />
</Field>
```

| Prop | Type | Default | Description |
|------|------|---------|-------------|
| `label` | `string` | — | Label text |
| `optionalText` | `string` | — | Text top-right |
| `additionalText` | `string` | — | Helper text below |
| `invalidText` | `string` | — | Error message |
| `disabled` | `boolean` | `false` | Disabled state |
| `tooltip` | `ReactNode` | — | Tooltip next to label |
| `htmlFor` | `string` | — | Label `for` attribute |

### Checkbox

Checkbox with checked/indeterminate states.

```tsx
<Checkbox text="Accept terms" />
<Checkbox checked text="Selected" />
<Checkbox indeterminate text="Partial" />
<Checkbox disabled text="Disabled" />
```

| Prop | Type | Default | Description |
|------|------|---------|-------------|
| `checked` | `boolean` | — | Controlled checked |
| `defaultChecked` | `boolean` | `false` | Initial state |
| `indeterminate` | `boolean` | `false` | Mixed state |
| `text` | `string` | — | Label text |
| `disabled` | `boolean` | `false` | Disabled |
| `invalid` | `boolean` | `false` | Error state |
| `onChange` | `(checked: boolean) => void` | — | Change handler |

### Radio / RadioGroup

Radio buttons for single selection.

```tsx
<RadioGroup name="plan" defaultValue="pro" aria-label="Select plan" onChange={setValue}>
  <RadioGroup.Option value="free" text="Free" />
  <RadioGroup.Option value="pro" text="Pro" />
  <RadioGroup.Option value="enterprise" text="Enterprise" />
</RadioGroup>
```

| Prop (RadioGroup) | Type | Default | Description |
|------|------|---------|-------------|
| `name` | `string` | — | Form name |
| `value` | `string` | — | Controlled value |
| `defaultValue` | `string` | `''` | Initial value |
| `direction` | `'column' \| 'row'` | `'column'` | Layout direction |
| `invalid` | `boolean` | `false` | Error state |
| `onChange` | `(value: string) => void` | — | Change handler |

| Prop (RadioGroup.Option) | Type | Default |
|------|------|---------|
| `value` | `string` | required |
| `text` | `string` | — |
| `disabled` | `boolean` | `false` |

### Toggle

Switch control for boolean values.

```tsx
<Toggle text="Dark mode" />
<Toggle checked labeled />
<Toggle small text="Compact" />
```

| Prop | Type | Default | Description |
|------|------|---------|-------------|
| `checked` | `boolean` | — | Controlled state |
| `defaultChecked` | `boolean` | `false` | Initial state |
| `text` | `string` | — | Label text |
| `small` | `boolean` | `false` | Small variant |
| `labeled` | `boolean` | `false` | Show on/off labels |
| `disabled` | `boolean` | `false` | Disabled |
| `onChange` | `(checked: boolean) => void` | — | Change handler |

### SelectMenu

Dropdown select with search, multi-select, and keyboard navigation.

```tsx
{/* Simple usage */}
<SelectMenu aria-label="Country" value={value} onChange={setValue}>
  <SelectMenuOption value="us" text="United States" />
  <SelectMenuOption value="uk" text="United Kingdom" />
  <SelectMenuOption value="ca" text="Canada" />
</SelectMenu>

{/* With trigger button */}
<Select aria-label="Fruit" value={value} onChange={setValue}>
  <SelectButton text={value || 'Pick a fruit...'} />
  <SelectMenu aria-label="Fruits">
    <SelectMenuOption value="apple" text="Apple" />
    <SelectMenuOption value="banana" text="Banana" />
  </SelectMenu>
</Select>

{/* Multi-select with search */}
<SelectMenu aria-label="Tags" multiple searchable value={value} onChange={setValue}>
  <SelectMenuOption value="bug" text="Bug" />
  <SelectMenuOption value="feature" text="Feature" />
  <SelectMenuOption value="docs" text="Documentation" />
</SelectMenu>
```

| Prop (SelectMenu) | Type | Default | Description |
|------|------|---------|-------------|
| `value` | `string` | `''` | Selected value (CSV for multiple) |
| `multiple` | `boolean` | `false` | Multi-select |
| `searchable` | `boolean \| null` | `null` | Search input (auto if >5 options) |
| `rows` | `number` | — | Visible rows before scroll |
| `aria-label` | `string` | — | Required |
| `onChange` | `(value: string) => void` | — | Change handler |

| Prop (SelectMenuOption) | Type | Default |
|------|------|---------|
| `value` | `string` | required |
| `text` | `string` | required |
| `disabled` | `boolean` | `false` |
| `icon` | `ReactNode` | — |

| Prop (SelectButton) | Type | Default | Description |
|------|------|---------|-------------|
| `text` | `string` | — | Display text |
| `placeholder` | `string` | — | Placeholder |
| `size` | `'s' \| 'm' \| 'l'` | `'m'` | Size |
| `invalid` | `boolean` | `false` | Error state |
| `disabled` | `boolean` | `false` | Disabled |
| `icon` | `ReactNode` | — | Left icon |
| `clearable` | `boolean` | `false` | Show clear button |
| `onClear` | `() => void` | — | Clear callback |

### DatePicker

Calendar date picker with range support.

```tsx
<DatePicker value={date} onChange={setDate} />
<DatePicker range value={range} onChange={setRange} />
<DatePicker min="2024-01-01" max="2024-12-31" locale="en-GB" />
<DatePicker clearable onClear={() => setDate('')} />
```

| Prop | Type | Default | Description |
|------|------|---------|-------------|
| `value` | `string` | `''` | ISO date (YYYY-MM-DD, CSV for range) |
| `range` | `boolean` | `false` | Date range selection |
| `min` | `string` | `'1900-01-01'` | Earliest date |
| `max` | `string` | `'2100-12-31'` | Latest date |
| `locale` | `string` | `'en-US'` | Date locale |
| `clearable` | `boolean` | `false` | Clear button |
| `onClear` | `() => void` | — | Clear callback |
| `onChange` | `(value: string) => void` | — | Change handler |

### TimePicker

Clock-face time picker.

```tsx
<TimePicker value={time} onChange={setTime} />
<TimePicker ampm />
<TimePicker clearable onClear={() => setTime('')} />
```

| Prop | Type | Default | Description |
|------|------|---------|-------------|
| `value` | `string` | `'00:00:00'` | Time (HH:mm:ss) |
| `ampm` | `boolean` | `false` | 12-hour format |
| `clearable` | `boolean` | `false` | Clear button |
| `onClear` | `() => void` | — | Clear callback |
| `onChange` | `(value: string) => void` | — | Returns HH:mm:ss |

### ColorMenu

Color swatch picker grid.

```tsx
<ColorMenuCompound value={color} onChange={setColor} cols={6}>
  <ColorMenuCompound.Option value="#FF0000" />
  <ColorMenuCompound.Option value="#00FF00" />
  <ColorMenuCompound.Option value="#0000FF" />
</ColorMenuCompound>
```

| Prop | Type | Default |
|------|------|---------|
| `value` | `string` | `''` |
| `rows` | `number` | — |
| `cols` | `number` | — |
| `onChange` | `(value: string) => void` | — |

### EmojiPicker

Emoji selection panel with categories.

```tsx
<EmojiPicker onChange={(emoji) => console.log(emoji)} />
```

| Prop | Type | Default |
|------|------|---------|
| `emojiBaseUrl` | `string` | — |
| `onChange` | `(emoji: string) => void` | — |

### FileDrop

Drag-and-drop file upload zone.

```tsx
<FileDrop
  accept="image/*"
  maxSize={5_000_000}
  placeholder="Drop an image here"
  buttonText="Browse"
  onChange={(files) => handleFiles(files)}
/>
```

| Prop | Type | Default | Description |
|------|------|---------|-------------|
| `accept` | `string` | — | Accepted file types |
| `multiple` | `boolean` | `false` | Multiple files |
| `maxSize` | `number` | — | Max bytes |
| `disabled` | `boolean` | `false` | Disabled |
| `invalid` | `boolean` | `false` | Error state |
| `placeholder` | `string` | — | Drop zone text |
| `buttonText` | `string` | `'Choose file'` | Button label |
| `onChange` | `(files: File[]) => void` | — | Files selected |
| `onInvalid` | `(type: 'accept'\|'multiple'\|'size') => void` | — | Validation error |

### FilePicker

Hidden file input triggered by children.

```tsx
<FilePicker accept=".csv" onChange={(files) => handleFiles(files)}>
  <Button text="Upload CSV" />
</FilePicker>
```

---

## Navigation

### Tabs

Tab navigation with text and icon options.

```tsx
<TabsGroup aria-label="Settings" value={tab} onChange={setTab}>
  <TabsGroup.Option value="general" text="General" />
  <TabsGroup.Option value="security" text="Security" />
  <TabsGroup.Option value="billing" text="Billing" disabled />
</TabsGroup>

{/* Icon tabs */}
<TabsGroup aria-label="View" value={view} onChange={setView}>
  <TabsGroup.IconOption value="grid" aria-label="Grid view" icon={<Icon name="fa-grid" iconsVersion="2" />} />
  <TabsGroup.IconOption value="list" aria-label="List view" icon={<Icon name="fa-list" iconsVersion="2" />} />
</TabsGroup>
```

| Prop (TabsGroup) | Type | Default |
|------|------|---------|
| `value` | `string` | — |
| `defaultValue` | `string` | `''` |
| `aria-label` | `string` | required |
| `onChange` | `(value: string) => void` | — |

| Prop (TabsGroup.Option) | Type | Default |
|------|------|---------|
| `value` | `string` | required |
| `text` | `string` | required |
| `disabled` | `boolean` | `false` |
| `icon` | `ReactNode` | — |

### SegmentedControl

Horizontal toggle group for single/multi selection.

```tsx
<SegmentedControl aria-label="Period" value={period} onChange={setPeriod}>
  <SegmentedControl.Option value="daily" text="Daily" />
  <SegmentedControl.Option value="weekly" text="Weekly" />
  <SegmentedControl.Option value="monthly" text="Monthly" />
</SegmentedControl>
```

### SegmentedIconControl

Icon-only segmented control.

```tsx
<SegmentedIconControlGroup aria-label="Alignment" value={align} onChange={setAlign}>
  <SegmentedIconControlGroup.Option value="left" aria-label="Left" icon={<Icon name="fa-align-left" iconsVersion="2" />} />
  <SegmentedIconControlGroup.Option value="center" aria-label="Center" icon={<Icon name="fa-align-center" iconsVersion="2" />} />
  <SegmentedIconControlGroup.Option value="right" aria-label="Right" icon={<Icon name="fa-align-right" iconsVersion="2" />} />
</SegmentedIconControlGroup>
```

### Pagination

Page navigation with previous/next and page numbers.

```tsx
<Pagination value={page} max={10} onChange={setPage} />
```

| Prop | Type | Default |
|------|------|---------|
| `value` | `number` | required (1-indexed) |
| `max` | `number` | required |
| `onChange` | `(value: number) => void` | — |

### ActionMenu

Dropdown action list.

```tsx
<ActionMenu aria-label="Actions" rows={5}>
  <ActionMenuOption text="Edit" icon={<Icon name="fa-pen" iconsVersion="2" />} onClick={handleEdit} />
  <ActionMenuOption text="Duplicate" onClick={handleDuplicate} />
  <ActionMenuOption text="Delete" onClick={handleDelete} />
</ActionMenu>
```

| Prop (ActionMenu) | Type | Default |
|------|------|---------|
| `aria-label` | `string` | required |
| `rows` | `number` | — |

| Prop (ActionMenuOption) | Type | Default |
|------|------|---------|
| `text` | `string` | required |
| `disabled` | `boolean` | `false` |
| `icon` | `ReactNode` | — |
| `rightIcon` | `ReactNode` | — |
| `onClick` | `() => void` | — |

---

## Layout & Structure

### Card

Content card with media, title, content, and footer slots.

```tsx
<Card
  title={<CardTitle text="Project Alpha" icon={<Icon name="fa-folder" iconsVersion="2" />} />}
  content={<Text>A brief description of the project.</Text>}
  footer={<Button text="View Details" size="s" />}
/>

<Card clickable onClick={handleClick} selected>
  <Text>Selectable card content</Text>
</Card>
```

| Prop | Type | Default | Description |
|------|------|---------|-------------|
| `media` | `ReactNode` | — | Top media slot |
| `title` | `ReactNode` | — | Use CardTitle |
| `content` | `ReactNode` | — | Main content |
| `footer` | `ReactNode` | — | Bottom slot |
| `clickable` | `boolean` | auto | Clickable card |
| `selected` | `boolean` | `false` | Selected state |
| `disabled` | `boolean` | `false` | Disabled |
| `onClick` | `(e) => void` | — | Click handler |

### List

Simple list container.

```tsx
<List>
  <ListItem text="Item 1" />
  <ListItem text="Item 2" />
</List>
```

### Grid

Responsive grid with CSS variable breakpoints.

```tsx
<Grid style={{ '--grid-cols-xl': 4, '--grid-cols-m': 2, '--grid-cols-s': 1 }}>
  <Card>...</Card>
  <Card>...</Card>
  <Card>...</Card>
  <Card>...</Card>
</Grid>
```

### Accordion

Expandable content sections.

```tsx
<AccordionGroup multiple onChange={setExpanded}>
  <AccordionGroup.Item value="faq1" label="What is Nectary?">
    <Text>Nectary is Sinch's design system.</Text>
  </AccordionGroup.Item>
  <AccordionGroup.Item value="faq2" label="How do I install it?">
    <Text>npm install @nectary/react</Text>
  </AccordionGroup.Item>
</AccordionGroup>
```

| Prop (AccordionGroup) | Type | Default |
|------|------|---------|
| `value` | `string` | — |
| `defaultValue` | `string` | `''` |
| `multiple` | `boolean` | `false` |
| `onChange` | `(value: string) => void` | — |

| Prop (AccordionGroup.Item) | Type | Default |
|------|------|---------|
| `value` | `string` | required |
| `label` | `string` | required |
| `optionalText` | `string` | — |
| `status` | `'info' \| 'success' \| 'warn' \| 'error'` | — |
| `disabled` | `boolean` | `false` |
| `icon` | `ReactNode` | — |

### ProgressStepper

Multi-step progress indicator.

```tsx
<ProgressStepperGroup value={step} progressValue="step2" onChange={setStep}>
  <ProgressStepperGroup.Item value="step1" text="Account" />
  <ProgressStepperGroup.Item value="step2" text="Profile" />
  <ProgressStepperGroup.Item value="step3" text="Review" />
</ProgressStepperGroup>
```

### TableCell

Table cell with alignment.

```tsx
<table>
  <tr>
    <TableCell>Name</TableCell>
    <TableCell align="center">Status</TableCell>
    <TableCell align="end">Actions</TableCell>
  </tr>
</table>
```

| Prop | Type | Default |
|------|------|---------|
| `align` | `'start' \| 'center' \| 'end'` | `'start'` |

---

## Feedback & Status

### Alert

Banner alert with action and close slots.

```tsx
<Alert type="info" text="Your changes have been saved." />
<Alert type="error" text="Something went wrong." action={<Button text="Retry" size="s" />} />
<Alert type="warn" text="Low disk space." close={<Button icon={<Icon name="fa-xmark" iconsVersion="2" />} />} />
```

| Prop | Type | Default |
|------|------|---------|
| `type` | `'info' \| 'warn' \| 'error'` | `'info'` |
| `text` | `string` | — |
| `action` | `ReactNode` | — |
| `close` | `ReactNode` | — |

### InlineAlert

Compact inline alert with caption and icon.

```tsx
<InlineAlert type="success" caption="Done!" text="Your file has been uploaded." />
<InlineAlert type="error" text="Invalid credentials." />
```

| Prop | Type | Default |
|------|------|---------|
| `type` | `'info' \| 'success' \| 'warn' \| 'error'` | `'info'` |
| `text` | `string` | — |
| `caption` | `string` | — |
| `icon` | `string` | auto |
| `action` | `ReactNode` | — |
| `close` | `ReactNode` | — |

### Toast

Temporary notification. Use with ToastProvider and useToast hook.

```tsx
// Wrap app
<ToastProvider origin="bottom-right">
  <App />
</ToastProvider>

// In any component
const { addToast } = useToast()
addToast({ type: 'success', text: 'Saved!' })
addToast({ type: 'error', text: 'Failed.', persistent: true })
```

| Prop (Toast) | Type | Default |
|------|------|---------|
| `type` | `'info' \| 'success' \| 'warn' \| 'error'` | `'info'` |
| `text` | `string` | — |
| `persistent` | `boolean` | `false` |
| `action` | `ReactNode` | — |
| `close` | `ReactNode` | — |

### Progress

Progress bar.

```tsx
<Progress value={65} />
<Progress value={100} detailed />
```

| Prop | Type | Default |
|------|------|---------|
| `value` | `number` | `0` |
| `detailed` | `boolean` | `false` |

### FileStatus

File upload status indicator.

```tsx
<FileStatus type="loading" filename="report.pdf" />
<FileStatus type="error" filename="image.png" action={<Button text="Retry" size="s" />} />
```

| Prop | Type | Default |
|------|------|---------|
| `type` | `'pending' \| 'loading' \| 'progress' \| 'success' \| 'error'` | `'pending'` |
| `filename` | `string` | — |
| `content` | `ReactNode` | — |
| `action` | `ReactNode` | — |

### Spinner

Loading spinner.

```tsx
<Spinner />
<Spinner size="l" />
```

| Prop | Type | Default |
|------|------|---------|
| `size` | `'s' \| 'm' \| 'l'` | `'m'` |

### SkeletonItem

Loading placeholder.

```tsx
<SkeletonItem size="lg" />
<SkeletonItem width="200px" />
```

| Prop | Type | Default |
|------|------|---------|
| `size` | `'xs' \| 'sm' \| 'md' \| 'lg'` | `'md'` |
| `width` | `string \| number` | — |

---

## Overlays

### Dialog

Modal dialog with backdrop, focus trap, and escape-to-close.

```tsx
<Dialog
  open={isOpen}
  onClose={(detail) => setIsOpen(false)}
  caption="Confirm Delete"
  size="sm"
  icon={<Icon name="fa-trash" iconsVersion="2" size="md" />}
  buttons={
    <>
      <Button text="Cancel" onClick={() => setIsOpen(false)} />
      <Button variant="destructive" text="Delete" onClick={handleDelete} />
    </>
  }
>
  <Text>Are you sure? This cannot be undone.</Text>
</Dialog>
```

| Prop | Type | Default | Description |
|------|------|---------|-------------|
| `open` | `boolean` | `false` | Visibility |
| `caption` | `string` | — | Title |
| `size` | `'sm' \| 'md' \| 'lg' \| 'fullscreen'` | `'md'` | Width |
| `icon` | `ReactNode` | — | Header icon |
| `buttons` | `ReactNode` | — | Footer actions |
| `hideCloseButton` | `boolean` | `false` | Hide X button |
| `onClose` | `(detail: 'close'\|'escape'\|'backdrop') => void` | — | Close handler |
| `container` | `HTMLElement` | — | Portal target |

### Sheet

Slide-in panel from any edge.

```tsx
<Sheet
  open={isOpen}
  onClose={() => setIsOpen(false)}
  placement="right"
  title={<SheetTitle title="Settings" onClose={() => setIsOpen(false)} />}
  footer={<Button variant="primary" text="Save" />}
>
  <Text>Sheet content here.</Text>
</Sheet>
```

| Prop | Type | Default | Description |
|------|------|---------|-------------|
| `open` | `boolean` | `false` | Visibility |
| `placement` | `'left' \| 'right' \| 'top' \| 'bottom'` | `'right'` | Slide direction |
| `overlay` | `'modal' \| 'push'` | `'modal'` | Overlay mode |
| `title` | `ReactNode` | — | Header (use SheetTitle) |
| `footer` | `ReactNode` | — | Footer slot |
| `onClose` | `(detail: 'close'\|'escape'\|'backdrop') => void` | — | Close handler |
| `aria-label` | `string` | — | Accessible label |

### Popover

Floating content anchored to a trigger.

```tsx
<Popover
  content={<Text>Popover content</Text>}
  orientation="bottom-left"
  tip
>
  <Button text="Show Info" />
</Popover>
```

| Prop | Type | Default | Description |
|------|------|---------|-------------|
| `open` | `boolean` | `false` | Controlled visibility |
| `orientation` | `'top' \| 'bottom' \| 'left' \| 'right' \| 'top-left' \| 'top-right' \| 'bottom-left' \| 'bottom-right'` | `'bottom-left'` | Position |
| `tip` | `boolean` | `false` | Show arrow |
| `modal` | `boolean` | `false` | Modal mode |
| `content` | `ReactNode` | required | Popover content |
| `onClose` | `() => void` | — | Close handler |

### Tooltip

Hover/focus tooltip.

```tsx
<Tooltip text="Copy to clipboard" orientation="top">
  <Button icon={<Icon name="fa-copy" iconsVersion="2" />} />
</Tooltip>
```

| Prop | Type | Default | Description |
|------|------|---------|-------------|
| `text` | `string` | required | Tooltip content |
| `orientation` | `'top' \| 'bottom' \| 'left' \| 'right' \| 'top-left' \| 'top-right' \| 'bottom-left' \| 'bottom-right'` | `'top'` | Position |
| `textAlign` | `'left' \| 'center' \| 'right'` | `'left'` | Alignment |
| `type` | `'slow' \| 'fast'` | `'slow'` | Delay (1000ms / 250ms) |
| `isOpen` | `boolean` | — | Controlled |
| `onShow` | `() => void` | — | Shown callback |
| `onHide` | `() => void` | — | Hidden callback |

### HelpTooltip

Question-mark icon with tooltip.

```tsx
<Field label="API Key" tooltip={<HelpTooltip text="Your secret API key from the dashboard." />}>
  <Input type="password" />
</Field>
```

| Prop | Type | Default |
|------|------|---------|
| `text` | `string` | required |
| `orientation` | `TooltipOrientation` | `'top'` |

---

## Display

### Badge

Notification badge overlaid on content.

```tsx
<Badge text="3">
  <Icon name="fa-bell" iconsVersion="2" size="lg" />
</Badge>
<Badge text="99+" size="s" />
<Badge hidden><Icon name="fa-envelope" iconsVersion="2" /></Badge>
```

| Prop | Type | Default |
|------|------|---------|
| `text` | `string` | — |
| `size` | `'s' \| 'm' \| 'l'` | `'m'` |
| `mode` | `'square' \| 'circle'` | `'square'` |
| `hidden` | `boolean` | `false` |

### Avatar

User avatar with image, initials, and status.

```tsx
<Avatar src="/photo.jpg" alt="Jane Doe" size="l" />
<Avatar alt="JD" color="blue" status="online" />
```

| Prop | Type | Default |
|------|------|---------|
| `src` | `string` | — |
| `alt` | `string` | — |
| `color` | `AvatarColor` | — |
| `size` | `'s' \| 'm' \| 'l'` | `'m'` |
| `status` | `'online' \| 'busy' \| 'away' \| 'offline'` | — |

### Tag

Label/classification tag with 29 color options.

```tsx
<Tag text="Active" color="green" />
<Tag text="Draft" color="gray" size="s" />
<Tag text="Priority" color="red" icon={<Icon name="fa-flag" iconsVersion="2" />} />
```

| Prop | Type | Default |
|------|------|---------|
| `text` | `string` | — |
| `color` | `'default' \| 'gray' \| 'blue' \| 'green' \| 'yellow' \| 'orange' \| 'red' \| 'pink' \| 'violet' \| 'danger' \| 'warning' \| 'success' \| 'info'` + light/dark variants | `'default'` |
| `size` | `'s' \| 'm'` | `'m'` |
| `ellipsis` | `boolean` | `false` |
| `icon` | `ReactNode` | — |

### Chip

Interactive chip/pill.

```tsx
<Chip text="React" color="blue" />
<Chip text="Removable" rightIcon={<Icon name="fa-xmark" iconsVersion="2" />} onClick={handleRemove} />
```

| Prop | Type | Default |
|------|------|---------|
| `text` | `string` | required |
| `color` | `ChipColor` | `'neutral'` |
| `size` | `'s' \| 'm'` | `'m'` |
| `icon` | `ReactNode` | — |
| `rightIcon` | `ReactNode` | — |
| `onClick` | `(e) => void` | — |

### Icon

Icon from Sinch icon font.

```tsx
<Icon name="fa-check" iconsVersion="2" />
<Icon name="fa-arrow-right" iconsVersion="2" size="lg" />
```

| Prop | Type | Default |
|------|------|---------|
| `name` | `string` | required |
| `iconsVersion` | `'1' \| '2'` | `'1'` |
| `size` | `'xs' \| 'sm' \| 'md' \| 'lg' \| 'xl'` | `'md'` |

### Flag

Country flag image.

```tsx
<Flag code="US" size="md" />
<Flag code="GB" size="lg" />
```

| Prop | Type | Default |
|------|------|---------|
| `code` | `string` | required (ISO 3166-1 alpha-2) |
| `size` | `'xs' \| 'sm' \| 'md' \| 'lg' \| 'xl'` | `'md'` |

### ColorSwatch

Single color preview dot.

```tsx
<ColorSwatch name="#FF5733" />
<ColorSwatch name={null} /> {/* "No color" state */}
```

### Emoji

Emoji character display.

```tsx
<Emoji char="👋" size="lg" />
```

| Prop | Type | Default |
|------|------|---------|
| `char` | `string` | required |
| `size` | `'xs' \| 'sm' \| 'md' \| 'lg' \| 'xl'` | `'md'` |
| `customSize` | `number` | — |

### CodeTag

Inline code display.

```tsx
<CodeTag text="npm install" />
```

---

## Utility Components

### StopEvents

Prevents event propagation from children.

```tsx
<StopEvents>
  <Button text="Won't bubble" onClick={handleClick} />
</StopEvents>
```

### PersistentOverlay

Dialog that re-appears if externally hidden (e.g. by other modals).

```tsx
<PersistentOverlay
  open={showNotice}
  caption="Important Notice"
  content={<Text>This will persist.</Text>}
  buttons={<Button variant="primary" text="OK" />}
/>
```

---

## Tailwind Token Classes

These Tailwind utility classes map to the Nectary design tokens:

### Colors
- **Primary:** `bg-primary`, `text-primary`, `bg-primary-hover`, `bg-primary-active`
- **Surface:** `bg-surface-canvas`, `bg-surface-primary`, `bg-surface-secondary`, `bg-surface-tertiary`
- **Text:** `text-foreground`, `text-foreground-muted`, `text-foreground-caption`, `text-foreground-disabled`
- **Border:** `border-border`, `border-border-subtle`, `border-border-strong`
- **Feedback:** `bg-feedback-danger`, `bg-feedback-success`, `bg-feedback-warning`, `bg-feedback-info`
- **Pure:** `bg-pure` (white), `bg-pure-inverted` (black)

### Spacing & Radius
- **Border radius:** `rounded-xs`, `rounded-sm`, `rounded-md`, `rounded-lg`, `rounded-xl`, `rounded-full`

### Typography
- **Font family:** `font-sans` (DM Sans), `font-mono` (DM Mono)
