'use client'
import Image from "next/image";
import { useRouter } from "next/navigation";

export default function Home() {
  const router = useRouter();

  return (
    <div className='bg-[url(/auth-bg.jpg)] bg-cover bg-center flex items-center justify-center w-screen h-screen'>
      <main className='p-5'>
        <section className='mx-auto max-w-xl'>
          <h1 className='text-center text-2xl font-bold'>Boilerplate Next Panel 1.0.0</h1>
          <div className='grid md:grid-cols-3 gap-3 mt-3'>
            <button
              onClick={() => router.push('/auth/login')}
              className='btn btn-neutral'>
              Login
            </button>
          </div>
        </section>
      </main>
    </div>
  );
}
