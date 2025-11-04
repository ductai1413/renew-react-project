import { useId } from 'react';

export function useUId(prefix = 'id'): string {
  const id = useId();
  return `${prefix}-${id}`;
}
