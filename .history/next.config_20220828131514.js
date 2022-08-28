/** @type {import('next').NextConfig} */
module.exports = {
  images: {
    loader: 'akamai',
    path: '',
    trailingSlash: true,
    reactStrictMode: true,
    assetPrefix: './',

  },
  reactStrictMode: true,
},
nextConfig.images = {
  deviceSizes: [
    256, 320, 492, 512, 640, 768, 896, 1024, 1152, 1280, 1408, 1536, 1664, 1792,
    1920, 2048, 2176, 2304, 2432, 2560, 2688, 2944,
  ],
  imageSizes: [32, 64, 96, 112, 128, 144, 160, 176, 192, 240],
  formats: ['image/avif', 'image/webp']
}