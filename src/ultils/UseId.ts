import { useId } from 'react';

export default function useUId(prefix = 'id'): string {
  const id = useId();
  return `${prefix}-${id}`;
}
