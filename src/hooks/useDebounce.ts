/**
 * Shared custom hooks (not feature-specific).
 *
 * Example: useDebounce, useMediaQuery, useLocalStorage, etc.
 */

import { useState, useEffect } from 'react'

/**
 * Debounce a value by the given delay.
 * Useful for search inputs that trigger API calls.
 */
export function useDebounce<T>(value: T, delay: number = 300): T {
  const [debouncedValue, setDebouncedValue] = useState<T>(value)

  useEffect(() => {
    const timer = setTimeout(() => setDebouncedValue(value), delay)
    return () => clearTimeout(timer)
  }, [value, delay])

  return debouncedValue
}
