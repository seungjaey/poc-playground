import { useFormik } from 'formik';
import { z } from 'zod';
import { useLogRenderCount } from '@/hooks/useLogRenderCount';

const formScheme = z.object({
  id: z.string(),
  pw: z.string(),
});

type Inputs = z.infer<typeof formScheme>;

const Page = () => {
  useLogRenderCount('formik');

  const formik = useFormik<Inputs>({
    initialValues: {
      id: '',
      pw: '',
    },
    onSubmit: (values) => {
      console.log('onSubmit');
      console.log(values);
    },
  });

  return (
    <main className="container">
      <section className="w-[640px] m-auto p-4">
        <form className="flex flex-col items-start gap-4" onSubmit={formik.handleSubmit}>
          <input
            className="border-2 rounded-md p-2"
            type="text"
            name="id"
            onChange={formik.handleChange}
            value={formik.values.id}
          />
          <input
            className="border-2 rounded-md p-2"
            type="text"
            name="pw"
            onChange={formik.handleChange}
            value={formik.values.pw}
          />
          <button type="submit">저장</button>
        </form>
      </section>
    </main>
  );
};

export default Page;
