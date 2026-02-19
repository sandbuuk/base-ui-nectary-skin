import { render, screen, fireEvent } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import { describe, it, expect, vi } from 'vitest'
import { FileDrop } from './FileDrop'

// Helper to create mock File objects
const createFile = (name: string, size: number, type: string): File => {
  const content = new Array(size).fill('a').join('')
  return new File([content], name, { type })
}

// Helper to create a mock DataTransfer
const createDataTransfer = (files: File[]): DataTransfer => {
  const dataTransfer = {
    files: {
      length: files.length,
      item: (index: number) => files[index] ?? null,
      [Symbol.iterator]: function* () {
        for (const file of files) {
          yield file
        }
      },
    } as unknown as FileList,
    items: files.map((file) => ({
      kind: 'file',
      type: file.type,
      getAsFile: () => file,
    })) as unknown as DataTransferItemList,
  }
  return dataTransfer as unknown as DataTransfer
}

describe('FileDrop', () => {
  // Basic rendering
  describe('rendering', () => {
    it('renders with placeholder text', () => {
      render(<FileDrop placeholder="Drop files here" />)
      expect(screen.getByText('Drop files here')).toBeInTheDocument()
    })

    it('renders with default button text', () => {
      render(<FileDrop />)
      expect(screen.getByRole('button', { name: 'Choose file' })).toBeInTheDocument()
    })

    it('renders with custom button text', () => {
      render(<FileDrop buttonText="Upload" />)
      expect(screen.getByRole('button', { name: 'Upload' })).toBeInTheDocument()
    })

    it('renders with custom children instead of default button', () => {
      render(
        <FileDrop>
          <span data-testid="custom-content">Custom Upload</span>
        </FileDrop>
      )
      expect(screen.getByTestId('custom-content')).toBeInTheDocument()
      expect(screen.queryByRole('button', { name: 'Choose file' })).not.toBeInTheDocument()
    })

    it('renders hidden file input', () => {
      render(<FileDrop />)
      expect(screen.getByLabelText('File input')).toBeInTheDocument()
    })

    it('forwards ref correctly', () => {
      const ref = { current: null }
      render(<FileDrop ref={ref}>Test</FileDrop>)
      expect(ref.current).toBeInstanceOf(HTMLElement)
    })

    it('applies custom className', () => {
      render(<FileDrop className="custom-class" data-testid="file-drop" />)
      expect(screen.getByTestId('file-drop')).toHaveClass('custom-class')
    })
  })

  // Props
  describe('props', () => {
    it('passes multiple prop to file input', () => {
      render(<FileDrop multiple />)
      expect(screen.getByLabelText('File input')).toHaveAttribute('multiple')
    })

    it('passes accept prop to file input', () => {
      render(<FileDrop accept="image/*" />)
      expect(screen.getByLabelText('File input')).toHaveAttribute('accept', 'image/*')
    })

    it('sets disabled state on input and button', () => {
      render(<FileDrop disabled />)
      expect(screen.getByLabelText('File input')).toBeDisabled()
      expect(screen.getByRole('button')).toBeDisabled()
    })
  })

  // File input interactions
  describe('file input', () => {
    it('opens file picker when button is clicked', async () => {
      const user = userEvent.setup()
      render(<FileDrop />)

      const input = screen.getByLabelText('File input')
      const clickSpy = vi.spyOn(input, 'click')

      await user.click(screen.getByRole('button'))

      expect(clickSpy).toHaveBeenCalled()
    })

    it('opens file picker when custom children are clicked', async () => {
      const user = userEvent.setup()
      render(
        <FileDrop>
          <button>Custom Button</button>
        </FileDrop>
      )

      const input = screen.getByLabelText('File input')
      const clickSpy = vi.spyOn(input, 'click')

      await user.click(screen.getByText('Custom Button'))

      expect(clickSpy).toHaveBeenCalled()
    })

    it('does not open file picker when disabled', async () => {
      const user = userEvent.setup()
      render(<FileDrop disabled />)

      const input = screen.getByLabelText('File input')
      const clickSpy = vi.spyOn(input, 'click')

      await user.click(screen.getByRole('button'))

      expect(clickSpy).not.toHaveBeenCalled()
    })

    it('calls onChange when file is selected via input', () => {
      const onChange = vi.fn()
      render(<FileDrop onChange={onChange} />)

      const input = screen.getByLabelText('File input')
      const file = createFile('test.txt', 100, 'text/plain')

      fireEvent.change(input, { target: { files: [file] } })

      expect(onChange).toHaveBeenCalledWith([file])
    })

    it('calls onInvalid when file exceeds maxSize via input', () => {
      const onInvalid = vi.fn()
      const onChange = vi.fn()
      render(<FileDrop maxSize={100} onChange={onChange} onInvalid={onInvalid} />)

      const input = screen.getByLabelText('File input')
      const file = createFile('large.txt', 200, 'text/plain')

      fireEvent.change(input, { target: { files: [file] } })

      expect(onInvalid).toHaveBeenCalledWith('size')
      expect(onChange).not.toHaveBeenCalled()
    })
  })

  // Drag and drop
  describe('drag and drop', () => {
    it('calls onChange when valid file is dropped', () => {
      const onChange = vi.fn()
      render(<FileDrop onChange={onChange} data-testid="file-drop" />)

      const dropZone = screen.getByTestId('file-drop')
      const file = createFile('test.txt', 100, 'text/plain')
      const dataTransfer = createDataTransfer([file])

      fireEvent.drop(dropZone, { dataTransfer })

      expect(onChange).toHaveBeenCalledWith([file])
    })

    it('calls onInvalid with "multiple" when multiple files dropped but multiple=false', () => {
      const onInvalid = vi.fn()
      const onChange = vi.fn()
      render(
        <FileDrop
          multiple={false}
          onChange={onChange}
          onInvalid={onInvalid}
          data-testid="file-drop"
        />
      )

      const dropZone = screen.getByTestId('file-drop')
      const files = [
        createFile('test1.txt', 100, 'text/plain'),
        createFile('test2.txt', 100, 'text/plain'),
      ]
      const dataTransfer = createDataTransfer(files)

      fireEvent.drop(dropZone, { dataTransfer })

      expect(onInvalid).toHaveBeenCalledWith('multiple')
      expect(onChange).not.toHaveBeenCalled()
    })

    it('accepts multiple files when multiple=true', () => {
      const onChange = vi.fn()
      render(<FileDrop multiple onChange={onChange} data-testid="file-drop" />)

      const dropZone = screen.getByTestId('file-drop')
      const files = [
        createFile('test1.txt', 100, 'text/plain'),
        createFile('test2.txt', 100, 'text/plain'),
      ]
      const dataTransfer = createDataTransfer(files)

      fireEvent.drop(dropZone, { dataTransfer })

      expect(onChange).toHaveBeenCalledWith(files)
    })

    it('calls onInvalid with "accept" when file type not accepted', () => {
      const onInvalid = vi.fn()
      const onChange = vi.fn()
      render(
        <FileDrop
          accept="image/*"
          onChange={onChange}
          onInvalid={onInvalid}
          data-testid="file-drop"
        />
      )

      const dropZone = screen.getByTestId('file-drop')
      const file = createFile('test.txt', 100, 'text/plain')
      const dataTransfer = createDataTransfer([file])

      fireEvent.drop(dropZone, { dataTransfer })

      expect(onInvalid).toHaveBeenCalledWith('accept')
      expect(onChange).not.toHaveBeenCalled()
    })

    it('accepts files matching accept pattern', () => {
      const onChange = vi.fn()
      render(
        <FileDrop accept="image/*" onChange={onChange} data-testid="file-drop" />
      )

      const dropZone = screen.getByTestId('file-drop')
      const file = createFile('photo.png', 100, 'image/png')
      const dataTransfer = createDataTransfer([file])

      fireEvent.drop(dropZone, { dataTransfer })

      expect(onChange).toHaveBeenCalledWith([file])
    })

    it('calls onInvalid with "size" when file exceeds maxSize', () => {
      const onInvalid = vi.fn()
      const onChange = vi.fn()
      render(
        <FileDrop
          maxSize={100}
          onChange={onChange}
          onInvalid={onInvalid}
          data-testid="file-drop"
        />
      )

      const dropZone = screen.getByTestId('file-drop')
      const file = createFile('large.txt', 200, 'text/plain')
      const dataTransfer = createDataTransfer([file])

      fireEvent.drop(dropZone, { dataTransfer })

      expect(onInvalid).toHaveBeenCalledWith('size')
      expect(onChange).not.toHaveBeenCalled()
    })

    it('does not call onChange when disabled', () => {
      const onChange = vi.fn()
      render(<FileDrop disabled onChange={onChange} data-testid="file-drop" />)

      const dropZone = screen.getByTestId('file-drop')
      const file = createFile('test.txt', 100, 'text/plain')
      const dataTransfer = createDataTransfer([file])

      fireEvent.drop(dropZone, { dataTransfer })

      expect(onChange).not.toHaveBeenCalled()
    })

    it('prevents default on drag events', () => {
      render(<FileDrop data-testid="file-drop" />)

      const dropZone = screen.getByTestId('file-drop')

      const dragEnterEvent = new Event('dragenter', { bubbles: true })
      Object.defineProperty(dragEnterEvent, 'dataTransfer', {
        value: { items: [] },
      })
      dragEnterEvent.preventDefault = vi.fn()
      dragEnterEvent.stopPropagation = vi.fn()

      fireEvent(dropZone, dragEnterEvent)

      expect(dragEnterEvent.preventDefault).toHaveBeenCalled()
      expect(dragEnterEvent.stopPropagation).toHaveBeenCalled()
    })
  })

  // Accept patterns
  describe('accept patterns', () => {
    it('accepts files with matching extension', () => {
      const onChange = vi.fn()
      render(<FileDrop accept=".pdf" onChange={onChange} data-testid="file-drop" />)

      const dropZone = screen.getByTestId('file-drop')
      const file = createFile('document.pdf', 100, 'application/pdf')
      const dataTransfer = createDataTransfer([file])

      fireEvent.drop(dropZone, { dataTransfer })

      expect(onChange).toHaveBeenCalledWith([file])
    })

    it('accepts files with matching MIME type', () => {
      const onChange = vi.fn()
      render(
        <FileDrop accept="application/json" onChange={onChange} data-testid="file-drop" />
      )

      const dropZone = screen.getByTestId('file-drop')
      const file = createFile('data.json', 100, 'application/json')
      const dataTransfer = createDataTransfer([file])

      fireEvent.drop(dropZone, { dataTransfer })

      expect(onChange).toHaveBeenCalledWith([file])
    })

    it('accepts video/* wildcard', () => {
      const onChange = vi.fn()
      render(<FileDrop accept="video/*" onChange={onChange} data-testid="file-drop" />)

      const dropZone = screen.getByTestId('file-drop')
      const file = createFile('video.mp4', 100, 'video/mp4')
      const dataTransfer = createDataTransfer([file])

      fireEvent.drop(dropZone, { dataTransfer })

      expect(onChange).toHaveBeenCalledWith([file])
    })

    it('accepts audio/* wildcard', () => {
      const onChange = vi.fn()
      render(<FileDrop accept="audio/*" onChange={onChange} data-testid="file-drop" />)

      const dropZone = screen.getByTestId('file-drop')
      const file = createFile('sound.mp3', 100, 'audio/mpeg')
      const dataTransfer = createDataTransfer([file])

      fireEvent.drop(dropZone, { dataTransfer })

      expect(onChange).toHaveBeenCalledWith([file])
    })

    it('accepts multiple accept values', () => {
      const onChange = vi.fn()
      render(
        <FileDrop accept="image/*,.pdf" onChange={onChange} data-testid="file-drop" />
      )

      const dropZone = screen.getByTestId('file-drop')
      const pdfFile = createFile('document.pdf', 100, 'application/pdf')
      const dataTransfer = createDataTransfer([pdfFile])

      fireEvent.drop(dropZone, { dataTransfer })

      expect(onChange).toHaveBeenCalledWith([pdfFile])
    })
  })

  // Accessibility
  describe('accessibility', () => {
    it('has aria-hidden on placeholder', () => {
      render(<FileDrop placeholder="Drop here" />)
      expect(screen.getByText('Drop here')).toHaveAttribute('aria-hidden', 'true')
    })

    it('has aria-label on file input', () => {
      render(<FileDrop />)
      expect(screen.getByLabelText('File input')).toBeInTheDocument()
    })

    it('button is focusable', () => {
      render(<FileDrop />)
      const button = screen.getByRole('button')
      expect(button).not.toHaveAttribute('tabindex', '-1')
    })
  })
})
