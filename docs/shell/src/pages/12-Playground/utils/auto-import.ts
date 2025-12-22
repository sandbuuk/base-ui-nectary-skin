// Static registry of component imports
// Webpack requires static import paths to properly bundle modules
const COMPONENT_IMPORTS: Record<string, () => Promise<unknown>> = {
  // Components
  accordion: () => import('@nectary/components/accordion'),
  'accordion-item': () => import('@nectary/components/accordion-item'),
  'action-menu': () => import('@nectary/components/action-menu'),
  'action-menu-option': () => import('@nectary/components/action-menu-option'),
  alert: () => import('@nectary/components/alert'),
  avatar: () => import('@nectary/components/avatar'),
  badge: () => import('@nectary/components/badge'),
  button: () => import('@nectary/components/button'),
  'button-group': () => import('@nectary/components/button-group'),
  'button-group-item': () => import('@nectary/components/button-group-item'),
  'card-container': () => import('@nectary/components/card-container'),
  'card-v2': () => import('@nectary/components/card-v2'),
  'card-v2-title': () => import('@nectary/components/card-v2-title'),
  checkbox: () => import('@nectary/components/checkbox'),
  chip: () => import('@nectary/components/chip'),
  'code-tag': () => import('@nectary/components/code-tag'),
  'color-menu': () => import('@nectary/components/color-menu'),
  'color-menu-option': () => import('@nectary/components/color-menu-option'),
  'color-swatch': () => import('@nectary/components/color-swatch'),
  'date-picker': () => import('@nectary/components/date-picker'),
  dialog: () => import('@nectary/components/dialog'),
  emoji: () => import('@nectary/components/emoji'),
  'emoji-picker': () => import('@nectary/components/emoji-picker'),
  field: () => import('@nectary/components/field'),
  'file-drop': () => import('@nectary/components/file-drop'),
  'file-picker': () => import('@nectary/components/file-picker'),
  'file-status': () => import('@nectary/components/file-status'),
  flag: () => import('@nectary/components/flag'),
  grid: () => import('@nectary/components/grid'),
  'grid-item': () => import('@nectary/components/grid-item'),
  'help-tooltip': () => import('@nectary/components/help-tooltip'),
  icon: () => import('@nectary/components/icon'),
  'inline-alert': () => import('@nectary/components/inline-alert'),
  input: () => import('@nectary/components/input'),
  link: () => import('@nectary/components/link'),
  list: () => import('@nectary/components/list'),
  'list-item': () => import('@nectary/components/list-item'),
  pagination: () => import('@nectary/components/pagination'),
  'persistent-overlay': () => import('@nectary/components/persistent-overlay'),
  pop: () => import('@nectary/components/pop'),
  popover: () => import('@nectary/components/popover'),
  progress: () => import('@nectary/components/progress'),
  'progress-stepper': () => import('@nectary/components/progress-stepper'),
  'progress-stepper-item': () => import('@nectary/components/progress-stepper-item'),
  radio: () => import('@nectary/components/radio'),
  'radio-option': () => import('@nectary/components/radio-option'),
  'rich-text': () => import('@nectary/components/rich-text'),
  'rich-textarea': () => import('@nectary/components/rich-textarea'),
  'segment-collapse': () => import('@nectary/components/segment-collapse'),
  'segmented-control': () => import('@nectary/components/segmented-control'),
  'segmented-control-option': () => import('@nectary/components/segmented-control-option'),
  'segmented-icon-control': () => import('@nectary/components/segmented-icon-control'),
  'segmented-icon-control-option': () => import('@nectary/components/segmented-icon-control-option'),
  'select-button': () => import('@nectary/components/select-button'),
  'select-menu': () => import('@nectary/components/select-menu'),
  'select-menu-option': () => import('@nectary/components/select-menu-option'),
  skeleton: () => import('@nectary/components/skeleton'),
  'skeleton-item': () => import('@nectary/components/skeleton-item'),
  spinner: () => import('@nectary/components/spinner'),
  'stop-events': () => import('@nectary/components/stop-events'),
  table: () => import('@nectary/components/table'),
  'table-body': () => import('@nectary/components/table-body'),
  'table-cell': () => import('@nectary/components/table-cell'),
  'table-head': () => import('@nectary/components/table-head'),
  'table-head-cell': () => import('@nectary/components/table-head-cell'),
  'table-row': () => import('@nectary/components/table-row'),
  tabs: () => import('@nectary/components/tabs'),
  'tabs-icon-option': () => import('@nectary/components/tabs-icon-option'),
  'tabs-option': () => import('@nectary/components/tabs-option'),
  tag: () => import('@nectary/components/tag'),
  text: () => import('@nectary/components/text'),
  textarea: () => import('@nectary/components/textarea'),
  'time-picker': () => import('@nectary/components/time-picker'),
  title: () => import('@nectary/components/title'),
  toast: () => import('@nectary/components/toast'),
  'toast-manager': () => import('@nectary/components/toast-manager'),
  toggle: () => import('@nectary/components/toggle'),
  tooltip: () => import('@nectary/components/tooltip'),
}

// Cache of already imported components to avoid duplicate imports
const importedComponents = new Set<string>()

/**
 * Extracts all sinch-* component names from the code and returns their suffixes
 */
const extractComponentSuffixes = (code: string): string[] => {
  // Match JSX-style <sinch-*> elements
  const regex = /<sinch-([a-z-]+)/g
  const suffixes = new Set<string>()

  let match

  while ((match = regex.exec(code)) !== null) {
    const suffix = match[1]

    if (suffix !== undefined) {
      suffixes.add(suffix)
    }
  }

  return Array.from(suffixes)
}

/**
 * Dynamically imports all sinch-* components found in the code
 */
export const importComponents = async (code: string): Promise<void> => {
  const suffixes = extractComponentSuffixes(code)
  const importsNeeded: Promise<unknown>[] = []

  for (const suffix of suffixes) {
    // Skip if already imported
    if (importedComponents.has(suffix)) {
      continue
    }

    const importer = COMPONENT_IMPORTS[suffix]

    if (importer !== undefined) {
      console.log(`Importing sinch-${suffix} component...`)
      importsNeeded.push(
        importer()
          .then(() => {
            console.log(`Imported sinch-${suffix} component`)
            importedComponents.add(suffix)
          })
          .catch((err) => {
            console.warn(`Failed to import sinch-${suffix}:`, err)
          })
      )
    }
  }

  await Promise.all(importsNeeded)
}
