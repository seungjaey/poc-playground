import { useEffect, useRef } from 'react';

export const useLogRenderCount = (name: string) => {
  const renderCount = useRef(0);
  useEffect(() => {
    renderCount.current += 1;
    console.log(`[${name}] : %c${renderCount.current}`, 'color: #5f0080');
  });
};
