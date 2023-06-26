import {useRef, useEffect} from 'react'

export const useDidUpdateEffect = (callback: () => void , dependencies: readonly any[]) => {
    const previousDependenciesRef = useRef(dependencies)

    useEffect(() => {
      const isUpdated = dependencies.some(
        (dependency: any, index: number) => dependency !== previousDependenciesRef.current[index]
      )
      if (isUpdated) {
        callback();
      }
      previousDependenciesRef.current = dependencies
    }, dependencies);
  }