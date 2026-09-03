const { defineConfig } = require('@vue/cli-service')

// Publicado em https://www.workix.com.br/ (domínio próprio no GitHub Pages, servido
// a partir da raiz). Para publicar de novo em um subdiretório (ex: a URL padrão
// https://<usuario>.github.io/workix-frontend-vue/), basta buildar com
// PUBLIC_PATH=/workix-frontend-vue/ npm run build
module.exports = defineConfig({
  transpileDependencies: true,
  publicPath: process.env.PUBLIC_PATH || '/'
})
