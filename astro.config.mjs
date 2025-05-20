// @ts-check
import { defineConfig } from 'astro/config';
import starlight from '@astrojs/starlight';

// https://astro.build/config
export default defineConfig({
	integrations: [
		starlight({
			title: 'Documentación proyecto Gesture Battle Online',
			social: [{ icon: 'github', label: 'GitHub', href: 'https://github.com/withastro/starlight' }],
			sidebar: [
				{
					label: 'Requerimientos',
					items: [
						// Each item here is one entry in the navigation menu.
						{ label: 'Requerimientos seleccionados', slug: 'requerimientos/requerimiento' },
					],
				},
				{
					label: 'Diagramas',
					autogenerate: { directory: 'diagramas' },
				},			
				{
					label: 'Interfaces',
					autogenerate: { directory: 'interfaces' },
				},
			],
		}),
	],
});
