import { defineConfig } from 'astro/config';
import starlight from '@astrojs/starlight';

// https://astro.build/config
export default defineConfig({
	integrations: [
		starlight({
			title: 'La Fotería',
			social: {
				github: 'https://github.com/withastro/starlight',
			},
			sidebar: [
				{
					label: 'Catalogo',
					items: [
						// Each item here is one entry in the navigation menu.
						{ label: 'Newborns', link: '/catalogo/newborn/' },
						{ label: 'Recien nacidos', link: '/catalogo/recien-nacidos/' },
					],
				},
				{
					label: 'Fotografías temáticas',
					autogenerate: { directory: 'reference' },
				},
			],
		}),
	],
});
