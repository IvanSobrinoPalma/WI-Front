import preprocess from 'svelte-preprocess';
import adapter from '@sveltejs/adapter-node';
// import adapter from '@sveltejs/adapter-auto';

/** @type {import('@sveltejs/kit').Config} */
const config = {
	kit: {
		adapter: adapter()
			// {
			// pages: 'build',
			// assets: 'build',
			// fallback: undefined,
			// precompress: false,
			// strict: true
		// })
	},

	preprocess: [
		preprocess({
			scss: {
				prependData: '@use "src/lib/styles/variables.scss" as *;'
			}
		})
	]
};

export default config;
