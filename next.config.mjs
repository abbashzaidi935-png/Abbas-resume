/** @type {import('next').NextConfig} */
const repoName = "Abbas-resume"

const nextConfig = {
  output: "export",
  trailingSlash: true,
  images: {
    unoptimized: true,
  },
  basePath: `/${repoName}`,
  assetPrefix: `/${repoName}/`,
}

export default nextConfig
