import type { NextConfig } from "next";
import { nextImageLoaderRegex } from "next/dist/build/webpack-config.js";
import { regexLikeCss } from "next/dist/build/webpack/config/blocks/css/index.js";
import { WEBPACK_RESOURCE_QUERIES } from "next/dist/lib/constants.js";
import type { Configuration } from "webpack";

const nextConfig: NextConfig = {
	reactStrictMode: true,
	compress: true,
	experimental: {
		optimizeCss: true,
	},
	images: {
		disableStaticImages: false,
		qualities: [75, 80, 85, 90, 95],
		deviceSizes: [640, 750, 828, 1080, 1200, 1920],
		imageSizes: [16, 32, 48, 64, 96, 128, 192, 256, 384],
		remotePatterns: [
			{
				protocol: "https",
				hostname: "cdn.jsdelivr.net",
				port: "",
				pathname: "**",
			},
		],
		formats: ["image/avif", "image/webp"],
	},
	turbopack: {
		rules: {
			"*.svg": {
				loaders: ["@svgr/webpack"],
				as: "*.js",
			},
		},
	},
	webpack(config: Configuration, { dev: isDev, isServer }) {
		if (isDev && config.output) {
			config.output.devtoolModuleFilenameTemplate = (info) =>
				info.resourcePath.replace(/\\/g, "/");
		}

		// SVG optimization and React component generation
		config.module?.rules?.push({
			test: /\.svg$/,
			use: [
				{
					loader: "@svgr/webpack",
					options: {
						prettier: false,
						svgo: true,
						svgoConfig: {
							plugins: [
								{
									name: "preset-default",
									params: {
										overrides: {
											removeViewBox: false,
										},
									},
								},
								"cleanupListOfValues",
								"removeStyleElement",
								"removeScriptElement",
							],
						},
						titleProp: true,
					},
				},
				{
					loader: "svgo-loader",
					options: {
						configFile: false,
						js2svg: {
							indent: 2,
							pretty: true,
						},
						plugins: [
							{
								name: "preset-default",
								params: {
									overrides: {
										removeViewBox: false,
										cleanupIDs: false,
									},
								},
							},
							"removeDimensions",
							"removeXMLNS",
						],
					},
				},
			],
		});

		config.module?.rules?.push({
			test: nextImageLoaderRegex,
			loader: "next/dist/shared/lib/image-loader",
			issuer: { not: regexLikeCss },
			dependency: { not: ["url"] },
			resourceQuery: {
				not: Object.values(WEBPACK_RESOURCE_QUERIES).map((query) => new RegExp(query)),
			},
			options: {
				isDev,
				isServer,
			},
		});

		return config;
	},
};

export default nextConfig;
