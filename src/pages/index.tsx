import Link from 'next/link';

export default function Home() {
  return (
    <main>
      <section>
        <ul>
          <li>
            <Link href="/form/formik">Formik</Link>
          </li>
          <li>
            <Link href="/form/react-hook-form">react-hook-form</Link>
          </li>
        </ul>
      </section>
    </main>
  );
}
