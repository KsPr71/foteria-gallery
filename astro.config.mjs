import { defineConfig } from 'astro/config';
import starlight from '@astrojs/starlight';

// https://astro.build/config
export default defineConfig({
	integrations: [
		starlight({
			title: 'La Foteria',
			social: {
				github: 'https://github.com/withastro/starlight',
			},
			sidebar: [
				{
					label: 'Etapas de la vida',
					items: [
						// Each item here is one entry in the navigation menu.
						{ label: 'Newborns', link: '/catalogo/newborn/' },
						{ label: 'Mes a mes', link: '/reference/example/' },
						{ label: 'Mi primer añito', link: '/catalogo/first-year/' },
						{ label: 'Primera infancia', link: '/catalogo/infancia/' },
						{ label: 'Ya voy a la escuela', link: '/catalogo/escuela/' },
						{ label: 'Adolescentes', link: '/catalogo/adolescentes/' },
						{ label: 'Nuestra boda', link: '/catalogo/boda/' },
						{ label: 'Recuerdos de mi embarazo', link: '/catalogo/embarazo/' },
						
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
						{label: 'Día del amor', link: '/catalogo/amor/'},
						{label: 'Para mamá', link: '/catalogo/mama/'},
						{label: 'Con mi papi', link: '/catalogo/papa/'},
						{label: 'Halloween', link: '/catalogo/halloween/'},
						{label: 'Navidad', link: '/catalogo/navidad/'}

				],
				},
			],
		}),
	],
});
