import createMDX from '@next/mdx';
import type { NextConfig } from 'next';

const nextConfig: NextConfig = {
  pageExtensions: ['ts', 'tsx', 'js', 'jsx', 'md', 'mdx'],
};

// 2️⃣  wrap with MDX
const withMDX = createMDX({
});

export default withMDX(nextConfig);
