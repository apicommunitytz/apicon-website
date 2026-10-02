const isStaticExport = process.env.NEXT_OUTPUT === "export";

/** @type {import('next').NextConfig} */
const nextConfig = {
  reactCompiler: true,
  ...(isStaticExport
    ? {
        output: "export",
        trailingSlash: true,
      }
    : {
        async redirects() {
          return [
            { source: "/index.html", destination: "/", permanent: true },
            { source: "/team.html", destination: "/team", permanent: true },
          ];
        },
      }),
};

export default nextConfig;
