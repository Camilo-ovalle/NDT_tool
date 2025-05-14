// @ts-check
import { defineConfig } from 'astro/config';
import starlight from '@astrojs/starlight';

// https://astro.build/config
export default defineConfig({
  integrations: [
    starlight({
      title: 'Network Diagnostics Tool',
      social: [
        {
          icon: 'github',
          label: 'GitHub',
          href: 'https://github.com/Camilo-ovalle',
        },
      ],
      sidebar: [
        {
          label: 'Guides',
          items: [
            // Each item here is one entry in the navigation menu.
            { label: 'Usage guide', slug: 'guides/usage' },
          ],
        },
        {
          label: 'Future updates',
          items: [
            { label: 'Planned features', slug: 'future/planned' },
            { label: 'Future updates', slug: 'future/updates' },
          ],
        },
        // {
        //   label: 'Reference',
        //   autogenerate: { directory: 'reference' },
        // },
      ],
    }),
  ],
});
