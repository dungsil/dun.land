import { Head } from "$fresh/runtime.ts";
import {AppProps} from "$fresh/server.ts";
import Navbar from '../components/Navbar.tsx'

export default function App({Component}: AppProps) {
  return (
    <>
      <Head>
        <title>DUN</title>
      </Head>
      <div class="w-full min-h-screen bg-zinc-900 font-sans text-base text-gray-50">
        <Navbar />
        <Component />
      </div>
    </>
  )
}
