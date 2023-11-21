import { SubmitHandler, useForm } from 'react-hook-form';
import { z } from 'zod';
import { useLogRenderCount } from '@/hooks/useLogRenderCount';

const formScheme = z.object({
  id: z.string(),
  pw: z.string(),
});

type Inputs = z.infer<typeof formScheme>;

const Page = () => {
  useLogRenderCount('react-hook-form');

  const { register, handleSubmit } = useForm<Inputs>({});

  const onSubmit: SubmitHandler<Inputs> = (data) => {
    console.log('onSubmit');
    console.log(data);
  };

  return (
    <main className="container">
      <section className="w-[640px] m-auto p-4">
        <form className="flex flex-col items-start gap-4" onSubmit={handleSubmit(onSubmit)}>
          <input className="border-2 rounded-md p-2" type="text" {...register('id')} />
          <input className="border-2 rounded-md p-2" type="text" {...register('pw')} />
          <button type="submit">저장</button>
        </form>
      </section>
    </main>
  );
};

export default Page;
