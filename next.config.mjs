/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',
  trailingSlash: true,
  basePath: '/client-portal',
  assetPrefix: '/client-portal',
  typescript: { ignoreBuildErrors: true },
  images: { unoptimized: true },
}
export default nextConfig
