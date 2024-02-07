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
						{ label: 'Mes a mes', link: '/catalogo/meses/' },
						{ label: 'Mi primer añito', link: '/catalogo/first-year/' },
					],
				},
				{
					label: 'Fotografías temáticas',
					items: [
						{label: 'Princesas de Disney', link: '/catalogo/disney/'},
						{label: 'Mi futura profesión', link: '/catalogo/profesiones/'},
						{label: 'Superhéroes', link: '/catalogo/superheroes/'},
						{label: 'Junto a mis mascotas', link: '/catalogo/mascotas/'}

				],
				},
				{
					label: 'Especiales de temporada',
					items: [
						{label: 'Día del amor', link: '/catalogo/newborn/'},
						{label: 'Para mamá', link: '/catalogo/newborn/'},
						{label: 'Con mi papi', link: '/catalogo/newborn/'},
						{label: 'Halloween', link: '/catalogo/newborn/'},
						{label: 'Navidad', link: '/catalogo/newborn/'}

				],
				},
			],
		}),
	],
});
