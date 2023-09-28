/** @type {import('next').NextConfig} */
const nextConfig = {
    env: {
        API_KEY: process.env.API_KEY || 'valor_predeterminado',
      
      },
}

module.exports = nextConfig
