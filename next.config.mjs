import { fileURLToPath } from 'url';
import path from 'path';

const __dirname = path.dirname(fileURLToPath(import.meta.url));

/** @type {import('next').NextConfig} */
const nextConfig = {
  transpilePackages: [
    'three',
    '@react-three/fiber',
    '@react-three/drei',
    '@react-three/rapier',
    '@react-three/postprocessing',
    'postprocessing',
  ],
  // Turbopack config (default in Next.js 16)
  turbopack: {
    resolveAlias: {
      '@': path.resolve(__dirname, 'corona-control-ultimate/src'),
    },
  },
  // Webpack fallback
  webpack: (config) => {
    config.resolve.alias['@'] = path.resolve(__dirname, 'corona-control-ultimate/src');
    return config;
  },
};

export default nextConfig;
