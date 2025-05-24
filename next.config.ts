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
    remotePatterns: [
      {
        protocol: "https",
        hostname: "cdn.jsdelivr.net",
        port: "",
        pathname: "**",
      }
    ],
  },
  turbopack: {
    rules: {
      '*.svg': {
        loaders: ['@svgr/webpack'],
        as: '*.js',
      },
    },
  },
  webpack(config: Configuration, { dev: isDev, isServer }) {
    if (isDev && config.output) {
      config.output.devtoolModuleFilenameTemplate = (info) =>
        info.resourcePath.replace(/\\/g, "/");
    }

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
