import { useCountStore } from '@/store/count';

export const SomeChild = () => {
  const { count, inc } = useCountStore();
  return (
    <div>
      {count}
      <button type="button" onClick={inc}>
        테스트
      </button>
    </div>
  );
};
