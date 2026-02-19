import '@testing-library/jest-dom'

// Mock ResizeObserver for components that use it (like Popover)
global.ResizeObserver = class ResizeObserver {
  observe() {}
  unobserve() {}
  disconnect() {}
}
