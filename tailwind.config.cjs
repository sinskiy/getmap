/** @type {import('tailwindcss').Config}*/
const config = {
	content: ['./src/**/*.{html,js,svelte,ts}'],

	theme: {
		extend: {
			colors: {
				'background': 'hsl(var(--color-background) / <alpha-value)',
				'onBackground': 'hsl(var(--color-on-background)/ <alpha-value>)',
				'surface': 'hsl(var(--color-surface) / <alpha-value>)',
				'onSurface': 'hsl(var(--color-on-surface) / <alpha-value>)',
				'onSurfaceTransparent': 'hsl(var(--color-on-surface) / 38%)',
				'surfaceContainerHighest': 'hsl(var(--color-surface-container-highest) / <alpha-value>)',
				'surfaceContainerHigh': 'hsl(var(--color-surface-container-high) / <alpha-value)',
				'surfaceContainer': 'hsl(var(--color-surface-container) / <alpha-value)',
				'primary': 'hsl(var(--color-primary) / <alpha-value)',
				'onPrimary': 'hsl(var(--color-on-primary) / <alpha-value)',
				'secondary': 'hsl(var(--color-secondary) / <alpha-value)',
				'secondaryContainer': 'hsl(var(--color-secondary-container) / <alpha-value)',
				'onSecondaryContainer': 'hsl(var(--color-on-secondary-container) / <alpha-value)',
				'tertiaryContainer': 'hsl(var(--color-tertiary-container) / <alpha-value)',
				'onTertiaryContainer': 'hsl(var(--color-on-tertiary-container) / <alpha-value)',
				'outline': 'hsl(var(--color-outline) / <alpha-value)'
			}
		},
	},

	plugins: []
};

module.exports = config;
