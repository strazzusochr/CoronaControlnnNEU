import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const gameSrc = path.join(__dirname, 'corona-control-ultimate', 'src');

/** @type {import('next').NextConfig} */
const nextConfig = {
  transpilePackages: [
    'three',
    '@react-three/fiber',
    '@react-three/drei',
    '@react-three/rapier',
    '@react-three/postprocessing',
    'postprocessing',
    '@dimforge/rapier3d-compat',
  ],
  serverExternalPackages: ['@dimforge/rapier3d-compat'],
  turbopack: {
    resolveAlias: {
      '@/*': [path.join(gameSrc, '*')],
    },
  },
  webpack: (config) => {
    config.resolve.alias['@'] = gameSrc;

    // Enable WASM support
    config.experiments = {
      ...config.experiments,
      asyncWebAssembly: true,
    };

    // Handle WASM files
    config.module.rules.push({
      test: /\.wasm$/,
      type: 'asset/resource',
    });

    return config;
  },
};

export default nextConfig;
