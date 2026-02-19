import { mkdirSync, writeFileSync, existsSync } from 'fs'
import { join, dirname } from 'path'
import { fileURLToPath } from 'url'

const __dirname = dirname(fileURLToPath(import.meta.url))

const componentName = process.argv[2]

if (!componentName) {
  console.error('Usage: pnpm scaffold <component-name>')
  process.exit(1)
}

const pascalCase = (str: string) =>
  str.split('-').map((s) => s[0].toUpperCase() + s.slice(1)).join('')

const kebabCase = componentName
const PascalName = pascalCase(componentName)
const variantName = kebabCase.replace(/-/g, '')

const dir = join(__dirname, '../src/components', kebabCase)

if (existsSync(dir)) {
  console.error(`Component ${kebabCase} already exists`)
  process.exit(1)
}

mkdirSync(dir, { recursive: true })

// Component
writeFileSync(join(dir, `${PascalName}.tsx`), `import { forwardRef } from 'react'
import { cva, type VariantProps } from 'class-variance-authority'
import { cn } from '../../utils/cn'

/**
 * TODO: Review source component at components/${kebabCase}/
 * - index.ts: Component logic
 * - template.html: HTML structure and CSS
 * - types.ts: TypeScript types
 */

const ${variantName}Variants = cva(
  // Base styles
  '',
  {
    variants: {
      // TODO: Add variants based on source component
    },
    defaultVariants: {},
  }
)

export interface ${PascalName}Props
  extends React.HTMLAttributes<HTMLDivElement>,
    VariantProps<typeof ${variantName}Variants> {
  // TODO: Add props from source types.ts
}

export const ${PascalName} = forwardRef<HTMLDivElement, ${PascalName}Props>(
  ({ className, children, ...props }, ref) => {
    return (
      <div
        ref={ref}
        className={cn(${variantName}Variants({}), className)}
        {...props}
      >
        {children}
      </div>
    )
  }
)
${PascalName}.displayName = '${PascalName}'
`)

// Stories
writeFileSync(join(dir, `${PascalName}.stories.tsx`), `import type { Meta, StoryObj } from '@storybook/react'
import { ${PascalName} } from './${PascalName}'

const meta: Meta<typeof ${PascalName}> = {
  title: 'Components/${PascalName}',
  component: ${PascalName},
  tags: ['autodocs'],
}

export default meta
type Story = StoryObj<typeof ${PascalName}>

export const Default: Story = {
  args: {},
}
`)

// Tests
writeFileSync(join(dir, `${PascalName}.test.tsx`), `import { render, screen } from '@testing-library/react'
import { describe, it, expect } from 'vitest'
import { ${PascalName} } from './${PascalName}'

describe('${PascalName}', () => {
  it('renders', () => {
    render(<${PascalName}>Test</${PascalName}>)
    expect(screen.getByText('Test')).toBeInTheDocument()
  })

  it('forwards ref', () => {
    const ref = { current: null }
    render(<${PascalName} ref={ref}>Test</${PascalName}>)
    expect(ref.current).toBeInstanceOf(HTMLElement)
  })

  it('applies custom className', () => {
    render(<${PascalName} className="custom">Test</${PascalName}>)
    expect(screen.getByText('Test')).toHaveClass('custom')
  })
})
`)

// Index
writeFileSync(join(dir, 'index.ts'), `export * from './${PascalName}'\n`)

console.log(`
Created: src/components/${kebabCase}/
  - ${PascalName}.tsx
  - ${PascalName}.stories.tsx
  - ${PascalName}.test.tsx
  - index.ts

Next: Review components/${kebabCase}/ and implement the component.
`)
