---
title: Uset `set` as a state primitive in useState
description: >-
  There comes times when you'd like to use a `Set` as the primitive data type in React. Specially with even simpler hooks such as `useState` that can be challenging
publishedAt: "2024-11-17"
tags:
  - javascript
  - typescript
  - react
  - set
id: a65819c4-3dbf-444f-81ed-418c5c3a495j
---

There comes times when you'd like to use a `Set` as the primitive data type in React. Specially with even simpler hooks such as `useState` that can be challenging.
The main challenge is because React defaults to immutable updates and `Set` (as well as `Map`) are mutative data types by design. Therefore there needs to be a small abstraction
that tells React to treat the data type as if it's immutable while keeping the underlying data type as a mutative `Set`.
In other words, make an abstraction with immutable interface while the underlying data type is mutative.

## `useStet` custom hook
```ts
const useSet = <T>(initialSet: Set<T> = new Set<T>()) => {
  const [state, _setState] = useState<Set<T>>(initialSet);
  const add = useCallback((value: T) => {
    _setState((prev) => {
      const newSet = new Set(prev);
      newSet.add(value);
      return newSet
    });
  }, []);
  const clear = useCallback(() => {
    _setState(new Set());
  }, []);
  return [state, add, clear] as const;
};
```
