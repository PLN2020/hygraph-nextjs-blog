/** @type {import('next').NextConfig} */
const nextConfig = {
    experimental: {
        appDir: true,
        fontLoaders: [
            { loader: '@next/font/google', options: { subsets: ['latin'] } },
        ],
    },
    images: {
        domains: ['media.graphassets.com'],
    },
}

module.exports = nextConfig
