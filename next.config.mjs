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
};

export default nextConfig;
