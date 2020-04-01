module.exports = {
	siteMetadata: {
		title: `BelaBelinda`,
		description: `BelaBelinda Description`,
		author: `Impulse`,
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
				name: `gatsby-starter-default`,
				short_name: `starter`,
				start_url: `/`,
				background_color: `#663399`,
				theme_color: `#663399`,
				icon: `src/images/favicon.webp`, // This path is relative to the root of the site.
				display: `minimal-ui`, // This path is relative to the root of the site.
			},
		},

		{
			resolve: 'gatsby-transformer-remark',
			options: {
				plugins: [
					{
						resolve: 'gatsby-remark-embed-video',
						options: {
							width: 800,
							ratio: 1.77, // Optional: Defaults to 16/9 = 1.77
							height: 400, // Optional: Overrides optional.ratio
							related: false, //Optional: Will remove related videos from the end of an embedded YouTube video.
							noIframeBorder: true, //Optional: Disable insertion of <style> border: 0
							urlOverrides: [
								{
									id: 'youtube',
									embedURL: videoId =>
										`https://www.youtube-nocookie.com/embed/${videoId}`,
								},
							], //Optional: Override URL of a service provider, e.g to enable youtube-nocookie support
						},
					},
				],
			},
		},
		// this (optional) plugin enables Progressive Web App + Offline functionality
		// To learn more, visit: https://gatsby.dev/offline
		// `gatsby-plugin-offline`,
	],
}
