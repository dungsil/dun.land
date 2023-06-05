/// <reference no-default-lib="true" />
/// <reference lib="dom" />
/// <reference lib="dom.iterable" />
/// <reference lib="dom.asynciterable" />
/// <reference lib="deno.ns" />

import "$std/dotenv/load.ts";

import { start } from "$fresh/server.ts";
import manifest from "./fresh.gen.ts";

import twindPlugin from "$fresh/plugins/twind.ts";
import twindConfig from "./twind.config.ts";

const port = Deno.env.has('DL_PORT') ? Number(Deno.env.get('DL_PORT')) : 8000;

await start(
  manifest,
  {
    port,
    plugins: [twindPlugin(twindConfig)],
    render: (ctx, render) => {
      ctx.lang = 'ko-KR'

      render()
    }
  }
);
