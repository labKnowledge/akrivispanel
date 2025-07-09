import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  devIndicators: false,
  webpack: (config, { isServer }) => {
    // Only apply the node-loader on the server-side build
    // as .node modules are typically not meant for the browser
    if (isServer) {
      config.module.rules.push({
        test: /\.node$/,
        loader: "node-loader",
      });
    }
    return config;
  },
};

export default nextConfig;
