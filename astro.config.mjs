import tailwind from "@astrojs/tailwind";
import icon from "astro-icon";
import { defineConfig } from "astro/config";
import react from '@astrojs/react';

// https://astro.build/config
export default defineConfig({
  site: "https://femsenaccion.netlify.app/",
  integrations: [tailwind(), icon(), react()],
});
