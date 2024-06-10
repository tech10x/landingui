/** @type {import('next').NextConfig} */
const nextConfig = {
    reactStrictMode: true,
    env: {
        API_KEY: process.env.API_KEY,
    },
    images: {
        remotePatterns: [
            {
                protocol: 'https',
                hostname: 'mydukaan.io',
                port: '',
            },
            {
                protocol: 'https',
                hostname: 'pub-96c5670691c8435283fb5dea0d94a7e8.r2.dev',
                port: '',
            },
        ],
    },
};

export default nextConfig;
