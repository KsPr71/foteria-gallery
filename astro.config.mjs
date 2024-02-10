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
						{ label: 'Mes a mes', link: '/catalogo/months/' },
						{ label: 'Mi primer añito', link: '/catalogo/first/' },
						{ label: 'Primera infancia', link: '/catalogo/infancia/' },
						{ label: 'Ya voy a la escuela', link: '/catalogo/escuela/' },
						{ label: 'Adolescentes', link: '/catalogo/adolescentes/' },
						{ label: 'Recuerdos de mi embarazo', link: '/catalogo/embarazada/'},
						{ label: 'La familia', link: '/catalogo/familia/'}
						
					],
				},
				{
					label: 'Fotografías temáticas',
					items: [
						{label: 'Princesas de Disney', link: '/catalogo/disney/'},
						{label: 'Mi futura profesión', link: '/catalogo/profesiones/'},
						{label: 'Junto a mis mascotas', link: '/catalogo/mascotas/'}

				],
				},

				{
					label: 'Especiales de temporada',
					items: [
						{label: 'Halloween', link: '/catalogo/halloween/'},
						{label: 'Navidad', link: '/catalogo/navidad/'}

				],
				},
				{
					label: 'Nuestras ofertas',
					items: [
						{label: 'Newborns y bebés', link: '/catalogo/nb/'},
						{label: 'Fotografías individuales', link: '/catalogo/individuales/'},
						{label: 'Fotos y Books', link: '/catalogo/ofertas/'},
						{label: 'Detallitos', link: '/catalogo/detallitos/'},
						{label: 'Embarazada', link: '/catalogo/emb/'},
						{label: 'Términos', link: '/catalogo/terminos/'},
						{label: 'Aclaraciones', link: '/catalogo/aclaraciones/'},

				],
				},
			],
		}),
	],
});
