/** @type {import('next').NextConfig} */
const nextConfig = {
  //add imgur
  output: "export",
  images: {
    domains: ["i.imgur.com", "camo.githubusercontent.com", "loremflickr.com"],
  },
};

module.exports = nextConfig;
