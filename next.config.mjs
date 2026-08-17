/** @type {import('next').NextConfig} */
const nextConfig = {
  async redirects() {
    return [
      {
        source: "/alarme-monitorado",
        destination: "/solucoes/alarmes",
        permanent: true,
      },
      {
        source: "/cerca-eletrica",
        destination: "/solucoes/alarmes",
        permanent: true,
      },
    ];
  },
};

export default nextConfig;
