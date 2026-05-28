/** @type {import('next').NextConfig} */
const nextConfig = {
  // Gera HTML estático em /out — roda em qualquer hospedagem estática, sem Node server-side.
  output: "export",
  // Cada rota vira uma pasta com index.html (ex: /servicos/index.html) → clean URLs sem .htaccess de rewrite.
  trailingSlash: true,
  // Static export não suporta o otimizador de imagens server-side do Next.
  images: {
    unoptimized: true,
  },
};

export default nextConfig;
