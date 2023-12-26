/** @type {import('next').NextConfig} */
const nextConfig = {
  output: "export",
  domains: ["i.imgur.com", "camo.githubusercontent.com", "loremflickr.com"],
  images: {
    loader: "akamai",
    path: "",
  },
  assetPrefix: "./",
};
export default nextConfig;
