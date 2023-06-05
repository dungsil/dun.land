import { Head } from '$fresh/runtime.ts';
import { AppProps } from '$fresh/server.ts';
import Navbar from '../components/Navbar.tsx';
import Footer from '../components/Footer.tsx';

export default function App({ Component }: AppProps) {
  return (
    <>
      <Head>
        <title>DUN</title>

        <link rel='icon' href='/logo.svg' />
        <script src="https://code.iconify.design/3/3.1.0/iconify.min.js"></script>
      </Head>
      <div class='flex flex-col w-full min-h-screen bg-zinc-900 font-sans text-base text-gray-50'>
        <Navbar />

        <div class='flex-grow grid grid-place-center'>
          <Component />
        </div>

        <Footer />
      </div>
    </>
  );
}
