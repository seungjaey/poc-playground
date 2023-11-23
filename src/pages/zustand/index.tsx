import { useCountStore } from '@/store/count';
import { SomeChild } from '@/components/SomeChild';

const Page = () => {
  const { count, inc } = useCountStore();
  return (
    <div>
      <section>
        {count}
        <button type="button" onClick={inc}>
          테스트
        </button>
      </section>
      <section>
        <SomeChild />
      </section>
    </div>
  );
};

export default Page;
