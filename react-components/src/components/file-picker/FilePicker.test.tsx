import { render, screen, fireEvent } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import { describe, it, expect, vi } from 'vitest'
import { FilePicker } from './FilePicker'

// Helper to create a mock File
const createMockFile = (name: string, size: number, type: string = 'text/plain'): File => {
  const file = new File(['x'.repeat(size)], name, { type })
  Object.defineProperty(file, 'size', { value: size })
  return file
}

describe('FilePicker', () => {
  describe('rendering', () => {
    it('renders children as the click target', () => {
      render(
        <FilePicker>
          <button>Upload</button>
        </FilePicker>
      )
      expect(screen.getByRole('button', { name: 'Upload' })).toBeInTheDocument()
    })

    it('renders with text content', () => {
      render(<FilePicker>Click to upload</FilePicker>)
      expect(screen.getByText('Click to upload')).toBeInTheDocument()
    })

    it('renders a hidden file input', () => {
      const { container } = render(<FilePicker>Upload</FilePicker>)
      const input = container.querySelector('input[type="file"]')
      expect(input).toBeInTheDocument()
      expect(input).toHaveClass('hidden')
    })
  })

  describe('ref forwarding', () => {
    it('forwards ref to the container div', () => {
      const ref = { current: null }
      render(<FilePicker ref={ref}>Upload</FilePicker>)
      expect(ref.current).toBeInstanceOf(HTMLDivElement)
    })
  })

  describe('className', () => {
    it('applies custom className to the container', () => {
      const { container } = render(
        <FilePicker className="custom-class">Upload</FilePicker>
      )
      expect(container.firstChild).toHaveClass('custom-class')
    })

    it('preserves base inline-block class', () => {
      const { container } = render(
        <FilePicker className="custom-class">Upload</FilePicker>
      )
      expect(container.firstChild).toHaveClass('inline-block')
    })
  })

  describe('file input attributes', () => {
    it('sets multiple attribute when multiple prop is true', () => {
      const { container } = render(<FilePicker multiple>Upload</FilePicker>)
      const input = container.querySelector('input[type="file"]')
      expect(input).toHaveAttribute('multiple')
    })

    it('does not set multiple attribute when multiple prop is false', () => {
      const { container } = render(<FilePicker multiple={false}>Upload</FilePicker>)
      const input = container.querySelector('input[type="file"]')
      expect(input).not.toHaveAttribute('multiple')
    })

    it('sets accept attribute from prop', () => {
      const { container } = render(<FilePicker accept="image/*">Upload</FilePicker>)
      const input = container.querySelector('input[type="file"]')
      expect(input).toHaveAttribute('accept', 'image/*')
    })

    it('sets accept attribute with multiple types', () => {
      const { container } = render(<FilePicker accept=".jpg,.png,.gif">Upload</FilePicker>)
      const input = container.querySelector('input[type="file"]')
      expect(input).toHaveAttribute('accept', '.jpg,.png,.gif')
    })
  })

  describe('click behavior', () => {
    it('opens file picker when child is clicked', async () => {
      const { container } = render(
        <FilePicker>
          <button>Upload</button>
        </FilePicker>
      )
      const input = container.querySelector('input[type="file"]') as HTMLInputElement
      const clickSpy = vi.spyOn(input, 'click')

      await userEvent.click(screen.getByRole('button', { name: 'Upload' }))

      expect(clickSpy).toHaveBeenCalled()
    })
  })

  describe('onChange callback', () => {
    it('calls onChange with selected files', () => {
      const onChange = vi.fn()
      const { container } = render(
        <FilePicker onChange={onChange}>Upload</FilePicker>
      )
      const input = container.querySelector('input[type="file"]') as HTMLInputElement
      const file = createMockFile('test.txt', 100)

      fireEvent.change(input, { target: { files: [file] } })

      expect(onChange).toHaveBeenCalledTimes(1)
      expect(onChange).toHaveBeenCalledWith([file])
    })

    it('calls onChange with multiple files when multiple is true', () => {
      const onChange = vi.fn()
      const { container } = render(
        <FilePicker multiple onChange={onChange}>Upload</FilePicker>
      )
      const input = container.querySelector('input[type="file"]') as HTMLInputElement
      const file1 = createMockFile('test1.txt', 100)
      const file2 = createMockFile('test2.txt', 200)

      fireEvent.change(input, { target: { files: [file1, file2] } })

      expect(onChange).toHaveBeenCalledTimes(1)
      expect(onChange).toHaveBeenCalledWith([file1, file2])
    })

    it('does not call onChange when files is null', () => {
      const onChange = vi.fn()
      const { container } = render(
        <FilePicker onChange={onChange}>Upload</FilePicker>
      )
      const input = container.querySelector('input[type="file"]') as HTMLInputElement

      fireEvent.change(input, { target: { files: null } })

      expect(onChange).not.toHaveBeenCalled()
    })

    it('resets input value after selection to allow re-selecting same file', () => {
      const onChange = vi.fn()
      const { container } = render(
        <FilePicker onChange={onChange}>Upload</FilePicker>
      )
      const input = container.querySelector('input[type="file"]') as HTMLInputElement
      const file = createMockFile('test.txt', 100)

      fireEvent.change(input, { target: { files: [file] } })

      expect(input.value).toBe('')
    })
  })

  describe('size validation', () => {
    it('calls onChange when file is within maxSize', () => {
      const onChange = vi.fn()
      const onInvalid = vi.fn()
      const { container } = render(
        <FilePicker maxSize={1000} onChange={onChange} onInvalid={onInvalid}>
          Upload
        </FilePicker>
      )
      const input = container.querySelector('input[type="file"]') as HTMLInputElement
      const file = createMockFile('test.txt', 500)

      fireEvent.change(input, { target: { files: [file] } })

      expect(onChange).toHaveBeenCalledWith([file])
      expect(onInvalid).not.toHaveBeenCalled()
    })

    it('calls onInvalid when file exceeds maxSize', () => {
      const onChange = vi.fn()
      const onInvalid = vi.fn()
      const { container } = render(
        <FilePicker maxSize={1000} onChange={onChange} onInvalid={onInvalid}>
          Upload
        </FilePicker>
      )
      const input = container.querySelector('input[type="file"]') as HTMLInputElement
      const file = createMockFile('test.txt', 2000)

      fireEvent.change(input, { target: { files: [file] } })

      expect(onChange).not.toHaveBeenCalled()
      expect(onInvalid).toHaveBeenCalledWith('size')
    })

    it('calls onInvalid when any file in multiple selection exceeds maxSize', () => {
      const onChange = vi.fn()
      const onInvalid = vi.fn()
      const { container } = render(
        <FilePicker multiple maxSize={1000} onChange={onChange} onInvalid={onInvalid}>
          Upload
        </FilePicker>
      )
      const input = container.querySelector('input[type="file"]') as HTMLInputElement
      const file1 = createMockFile('small.txt', 500)
      const file2 = createMockFile('large.txt', 2000)

      fireEvent.change(input, { target: { files: [file1, file2] } })

      expect(onChange).not.toHaveBeenCalled()
      expect(onInvalid).toHaveBeenCalledWith('size')
    })

    it('allows any file size when maxSize is not set', () => {
      const onChange = vi.fn()
      const onInvalid = vi.fn()
      const { container } = render(
        <FilePicker onChange={onChange} onInvalid={onInvalid}>
          Upload
        </FilePicker>
      )
      const input = container.querySelector('input[type="file"]') as HTMLInputElement
      const file = createMockFile('huge.txt', 10000000)

      fireEvent.change(input, { target: { files: [file] } })

      expect(onChange).toHaveBeenCalledWith([file])
      expect(onInvalid).not.toHaveBeenCalled()
    })

    it('allows any file size when maxSize is 0', () => {
      const onChange = vi.fn()
      const onInvalid = vi.fn()
      const { container } = render(
        <FilePicker maxSize={0} onChange={onChange} onInvalid={onInvalid}>
          Upload
        </FilePicker>
      )
      const input = container.querySelector('input[type="file"]') as HTMLInputElement
      const file = createMockFile('huge.txt', 10000000)

      fireEvent.change(input, { target: { files: [file] } })

      expect(onChange).toHaveBeenCalledWith([file])
      expect(onInvalid).not.toHaveBeenCalled()
    })

    it('allows file exactly at maxSize limit', () => {
      const onChange = vi.fn()
      const onInvalid = vi.fn()
      const { container } = render(
        <FilePicker maxSize={1000} onChange={onChange} onInvalid={onInvalid}>
          Upload
        </FilePicker>
      )
      const input = container.querySelector('input[type="file"]') as HTMLInputElement
      const file = createMockFile('exact.txt', 1000)

      fireEvent.change(input, { target: { files: [file] } })

      expect(onChange).toHaveBeenCalledWith([file])
      expect(onInvalid).not.toHaveBeenCalled()
    })
  })

  describe('HTML attributes', () => {
    it('passes through additional HTML attributes', () => {
      const { container } = render(
        <FilePicker data-testid="file-picker" aria-label="File upload">
          Upload
        </FilePicker>
      )
      expect(container.firstChild).toHaveAttribute('data-testid', 'file-picker')
      expect(container.firstChild).toHaveAttribute('aria-label', 'File upload')
    })
  })
})
