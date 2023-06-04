import { Head } from '$fresh/runtime.ts';
import { AppProps } from '$fresh/server.ts';
import Navbar from '../components/Navbar.tsx';
import Footer from '../components/Footer.tsx';

export default function App({ Component }: AppProps) {
  return (
    <>
      <Head>
        <title>DUN</title>
        <script src='https://code.iconify.design/iconify-icon/1.0.7/iconify-icon.min.js' defer></script>
      </Head>
      <div class='w-full min-h-screen bg-zinc-900 font-sans text-base text-gray-50'>
        <Navbar />
        <Component />

        <Footer />
      </div>
    </>
  );
}
