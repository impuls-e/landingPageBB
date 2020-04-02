const config = require('./data/config')

module.exports = {
	siteMetadata: {
		title: 'Bela Belinda',
		titleTemplate: 'Bela Belinda Apliques - %s',
		description:
			'Além de cabelos perfeitos, nossa missāo é inspirar confiança e te transformar na melhor versāo de você mesma.',
		url: 'https://belabelinda.netlify.com/',
		siteUrl: 'https://belabelinda.netlify.com/', // No trailing slash allowed!
		image: `${__dirname}/src/images/logo-belabelinda.png`,
		author: `Impulse`,
		twitterUsername: '@belabelinda',
	},
	plugins: [
		`gatsby-plugin-react-helmet`,
		`gatsby-transformer-sharp`,
		`gatsby-plugin-sharp`,
		{
			resolve: `gatsby-source-filesystem`,
			options: {
				name: `images`,
				path: `${__dirname}/src/images`,
			},
		},
		{
			resolve: `gatsby-source-filesystem`,
			options: {
				name: `pages`,
				path: `${__dirname}/content/`,
			},
		},
		`gatsby-plugin-mdx`,
		{
			resolve: `gatsby-plugin-manifest`,
			options: {
				name: config.siteTitle,
				short_name: config.siteTitleShort,
				description: config.siteDescription,
				start_url: '/',
				background_color: config.backgroundColor,
				theme_color: config.themeColor,
				display: 'standalone',
				icon: 'src/images/favicon.webp', // This path is relative to the root of the site.
			},
		},
		{
			resolve: `gatsby-plugin-google-analytics`,
			options: {
				trackingId: 'UA-141117092-15',
				// this option places the tracking script into the head of the DOM
				head: true,
				// other options
			},
		},
		{
			resolve: 'gatsby-plugin-html-attributes',
			options: {
				lang: 'pt-BR',
			},
		},
		`gatsby-plugin-advanced-sitemap`,
		{
			resolve: 'gatsby-plugin-extract-schema',
			options: {
				dest: `${__dirname}/path/to/schema.json`,
			},
		},

		{
			resolve: 'gatsby-plugin-robots-txt',
			options: {
				host: 'https://belabelinda.com',
				sitemap: 'https://belabelinda.com/sitemap.xml',
				env: {
					development: {
						policy: [{ userAgent: '*', disallow: ['/'] }],
					},
					production: {
						policy: [{ userAgent: '*', allow: '/' }],
					},
				},
			},
		},
		// this (optional) plugin enables Progressive Web App + Offline functionality
		// To learn more, visit: https://gatsby.dev/offline
		// `gatsby-plugin-offline`,
	],
}
